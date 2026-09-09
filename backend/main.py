"""
Cotton Bombs — FastAPI Backend
Connects to Supabase for data persistence.
"""

import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import products, deals, cart, admin

app = FastAPI(
    title="Cotton Bombs API",
    description="Backend API for the Cotton Bombs e-commerce experience",
    version="1.0.0",
)

# CORS — allow the Vite dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(products.router)
app.include_router(deals.router)
app.include_router(cart.router)
app.include_router(admin.router)


@app.get("/")
async def root():
    return {
        "message": "Cotton Bombs API 🎆",
        "docs": "/docs",
        "version": "1.0.0",
    }


@app.get("/health")
async def health():
    return {"status": "ok"}
