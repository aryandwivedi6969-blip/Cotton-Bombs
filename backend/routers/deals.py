from fastapi import APIRouter, HTTPException
from typing import List
from config import supabase
from models import DealOut, DealCreate

router = APIRouter(prefix="/api/deals", tags=["deals"])


@router.get("", response_model=List[DealOut])
async def list_deals():
    """List all active deals/drops."""
    response = supabase.table("deals").select("*").execute()
    return response.data


@router.get("/{deal_id}", response_model=DealOut)
async def get_deal(deal_id: int):
    """Get a single deal by ID."""
    response = supabase.table("deals").select("*").eq("id", deal_id).execute()

    if not response.data:
        raise HTTPException(status_code=404, detail="Deal not found")

    return response.data[0]


@router.post("", response_model=DealOut, status_code=201)
async def create_deal(deal: DealCreate):
    """Create a new deal (admin)."""
    response = supabase.table("deals").insert(
        deal.model_dump(mode="json")
    ).execute()

    if not response.data:
        raise HTTPException(status_code=400, detail="Failed to create deal")

    return response.data[0]
