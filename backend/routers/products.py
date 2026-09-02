from fastapi import APIRouter, HTTPException, Query
from typing import Optional, List
from config import supabase
from models import ProductOut, ProductCreate

router = APIRouter(prefix="/api/products", tags=["products"])


@router.get("", response_model=List[ProductOut])
async def list_products(
    flavor: Optional[str] = Query(None),
    pack_size: Optional[str] = Query(None),
    search: Optional[str] = Query(None),
):
    """List all products with optional filters."""
    query = supabase.table("products").select("*")

    if flavor:
        query = query.eq("flavor", flavor)
    if pack_size:
        query = query.eq("pack_size", pack_size)
    if search:
        query = query.ilike("name", f"%{search}%")

    response = query.execute()
    return response.data


@router.get("/{slug}", response_model=ProductOut)
async def get_product(slug: str):
    """Get a single product by slug."""
    response = supabase.table("products").select("*").eq("slug", slug).execute()

    if not response.data:
        raise HTTPException(status_code=404, detail="Product not found")

    return response.data[0]


@router.post("", response_model=ProductOut, status_code=201)
async def create_product(product: ProductCreate):
    """Create a new product (admin)."""
    response = supabase.table("products").insert(product.model_dump()).execute()

    if not response.data:
        raise HTTPException(status_code=400, detail="Failed to create product")

    return response.data[0]
