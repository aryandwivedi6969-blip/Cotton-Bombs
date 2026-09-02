from pydantic import BaseModel
from typing import Optional
from datetime import datetime


# ── Product ──────────────────────────────────────────────────────────
class ProductBase(BaseModel):
    name: str
    slug: str
    description: str
    price: float
    image_url: str
    badge: Optional[str] = None
    is_sold_out: bool = False
    flavor: Optional[str] = None
    pack_size: Optional[str] = None
    ingredients: Optional[str] = None
    calories: Optional[int] = None
    total_sugars: Optional[str] = None


class ProductOut(ProductBase):
    id: int

    class Config:
        from_attributes = True


class ProductCreate(ProductBase):
    pass


# ── Deal ─────────────────────────────────────────────────────────────
class DealBase(BaseModel):
    title: str
    description: str
    discount_pct: Optional[int] = None
    image_url: str
    price: float
    is_sold_out: bool = False
    ends_at: Optional[datetime] = None


class DealOut(DealBase):
    id: int

    class Config:
        from_attributes = True


class DealCreate(DealBase):
    pass


# ── Cart ─────────────────────────────────────────────────────────────
class CartItemBase(BaseModel):
    session_id: str
    product_id: int
    quantity: int = 1


class CartItemOut(CartItemBase):
    id: int

    class Config:
        from_attributes = True


class CartItemCreate(CartItemBase):
    pass


class CartItemUpdate(BaseModel):
    quantity: int


# ── Admin Stats ──────────────────────────────────────────────────────
class AdminStats(BaseModel):
    total_revenue: float
    active_orders: int
    low_stock_alerts: int
    revenue_change_pct: float
    orders_needing_attention: int
