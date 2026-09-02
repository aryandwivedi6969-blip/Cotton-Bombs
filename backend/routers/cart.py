from fastapi import APIRouter, HTTPException
from typing import List
from config import supabase
from models import CartItemOut, CartItemCreate, CartItemUpdate

router = APIRouter(prefix="/api/cart", tags=["cart"])


@router.get("/{session_id}", response_model=List[CartItemOut])
async def get_cart(session_id: str):
    """Get all cart items for a session."""
    response = (
        supabase.table("cart_items")
        .select("*")
        .eq("session_id", session_id)
        .execute()
    )
    return response.data


@router.post("", response_model=CartItemOut, status_code=201)
async def add_to_cart(item: CartItemCreate):
    """Add an item to the cart. If item already exists, increment quantity."""
    # Check if item already exists in cart
    existing = (
        supabase.table("cart_items")
        .select("*")
        .eq("session_id", item.session_id)
        .eq("product_id", item.product_id)
        .execute()
    )

    if existing.data:
        # Update quantity
        new_qty = existing.data[0]["quantity"] + item.quantity
        response = (
            supabase.table("cart_items")
            .update({"quantity": new_qty})
            .eq("id", existing.data[0]["id"])
            .execute()
        )
        return response.data[0]

    # Insert new item
    response = supabase.table("cart_items").insert(item.model_dump()).execute()

    if not response.data:
        raise HTTPException(status_code=400, detail="Failed to add item to cart")

    return response.data[0]


@router.patch("/{item_id}", response_model=CartItemOut)
async def update_cart_item(item_id: int, update: CartItemUpdate):
    """Update cart item quantity."""
    if update.quantity <= 0:
        # Remove the item
        supabase.table("cart_items").delete().eq("id", item_id).execute()
        return {"message": "Item removed from cart"}

    response = (
        supabase.table("cart_items")
        .update({"quantity": update.quantity})
        .eq("id", item_id)
        .execute()
    )

    if not response.data:
        raise HTTPException(status_code=404, detail="Cart item not found")

    return response.data[0]


@router.delete("/{item_id}")
async def remove_from_cart(item_id: int):
    """Remove an item from the cart."""
    supabase.table("cart_items").delete().eq("id", item_id).execute()
    return {"message": "Item removed from cart"}
