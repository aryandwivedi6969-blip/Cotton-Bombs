"""
Supabase Database Seed Script
Run this to create tables and insert initial product data.
"""

from config import supabase


def seed_products():
    """Seed the products table with initial Cotton Bombs product data."""
    products = [
        {
            "name": "Berry Blast",
            "slug": "berry-blast",
            "description": "Explosive berry glitter bomb with vibrant pink sparkle.",
            "price": 12.00,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuCDIBHx8woUodi_iI4dJLWek0JcFzYK1W6o3FXHVSIkoXixYKeG_i6EQLYPm_XArGe216OSQDVEHKn2DYkHoa6l8YbmJ9eoXouACEUVnMQjfNkveN3KtTs2t6l61dtE50WWWGfgG-ATx4DSwv8vMWbCI52osXODGlnlYH-Ka4zLjasNrYq_1vwkHtvOyot5AV0HiE5T2gH2MYwxMsxRLezBx6VysMsfa2RX5QHBahOd908Gd25wJaVu",
            "badge": None,
            "is_sold_out": False,
            "flavor": "Berry",
            "pack_size": "Single",
            "ingredients": "Cane Sugar, Corn Syrup, Citric Acid, Natural Berry Flavor, Red 40, Edible Mica-Based Pearlescent Pigment.",
            "calories": 110,
            "total_sugars": "26g",
        },
        {
            "name": "Cyan Surge",
            "slug": "cyan-surge",
            "description": "Electric cyan blue glitter bomb with holographic shimmer.",
            "price": 12.00,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuDMvDBm364LO_VVUoTKKv4plbwYokdqs5hwKVNIY8fdJLVgEK98I2zhv3nygOu3rrMT6HpNkj6F65nI0NXiWtN5zTbqsvfsZmLC7KOwHkW-DGmFSkVN70zRg5Z4UpxCqkECr8_oOUVsU6N-8cwo_TfS0mdPF9O1qGPvRYimh8kUEvKgKkbjaH2mmwKW7Z1QQ9t8rmVE5G6f06Evb95fOi1cYTnLPvw1BdEvM9ey8HxOtrbqGEIeGcyY",
            "badge": None,
            "is_sold_out": False,
            "flavor": "Cyan",
            "pack_size": "Single",
            "ingredients": "Cane Sugar, Corn Syrup, Citric Acid, Natural Blue Raspberry Flavor, Blue 1, Edible Mica-Based Pearlescent Pigment.",
            "calories": 115,
            "total_sugars": "27g",
        },
        {
            "name": "Midnight Spark",
            "slug": "midnight-spark",
            "description": "Deep midnight purple glitter bomb — mysteriously sparkly.",
            "price": 14.00,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuAZNTHHJ3hxjQt8O8cQaGJjTSrxj6JNS8TETy_2deStVV1yYrjbeqPCOGCbDvDmuaA94pkLtPMyReV2jY91CpVc5D7Q2c3jUSoH5WfEx3XFEYSXkblOtCrMY4kj8xcghzXjc_xSI87YK9U1uOUuo4jdXubbnzHKv0VEkeGFegukJ_PXT_oPmiF1MI349b_dSzhkgJWydbCVJOgzJOBpraQvmm8JtXy7ceSyfIKE6AErHhZnUDf7Hr7a",
            "badge": "SOLD OUT",
            "is_sold_out": True,
            "flavor": "Grape",
            "pack_size": "Single",
            "ingredients": "Cane Sugar, Corn Syrup, Citric Acid, Natural Grape Flavor, Blue 1, Red 3, Edible Mica-Based Pearlescent Pigment.",
            "calories": 120,
            "total_sugars": "28g",
        },
        {
            "name": "Blueberry Burst",
            "slug": "blueberry-burst",
            "description": "The original electric-blue explosion. Tangy, loud, and excessively sparkly.",
            "price": 12.00,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuAFH8jjLCNNtGUY10y5WxyY49WPpFOmMHsj_gRU34ss3KlrwN9YYB-S38bjY5NOspBf6A9p0XdseQQTksxR7hn5IScrigN9zpHOFJBgRu_vTz1dXI5S_Ywunr5FIrtdqN7hyWnuK534ryJdU5mVrQnf0GNV5L_b_R1vIpi9KZLoQ_crnyQXEE6LAIWnK9UDhEKKTSGPJfMN2QJSVlPjE7lq-vsaKlKlCHR6rf9_YPVMDRxpbn1KQAeP",
            "badge": "New Flavor",
            "is_sold_out": False,
            "flavor": "Blueberry",
            "pack_size": "Single",
            "ingredients": "Cane Sugar, Corn Syrup, Citric Acid, Natural Blueberry Flavor, Blue 1, Red 3, Edible Mica-Based Pearlescent Pigment (Titanium Dioxide).",
            "calories": 120,
            "total_sugars": "28g",
        },
        {
            "name": "Strawberry Sparkle",
            "slug": "strawberry-sparkle",
            "description": "Sweet pink glitter bomb with strawberry burst.",
            "price": 4.99,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuATWx_yhMYyIwvo5JA1rH7bBLuCcMh6tp0yudAZPBHx86ADFPKkDNkiLxkeHFVY0xxcR1vZnntuYw1aUdTgn4Zi7A5IyPT2SdAm1KMHmQc3VXqPLTTk15NKCtQUIuFQZ5yKcsjuWB0pBpjBYz4yY5-jv76C_Sfn1DrtUiHpQMdS-DZovMLcRbP8o-5-3Zv0l1t--ZoipqBjNNPWa4rJc8Wvw_4p8f_UOmpKAuU3hMhQcXBgf9kfWOMA",
            "badge": None,
            "is_sold_out": False,
            "flavor": "Strawberry",
            "pack_size": "Single",
            "ingredients": "Cane Sugar, Corn Syrup, Citric Acid, Natural Strawberry Flavor, Red 40, Edible Mica-Based Pearlescent Pigment.",
            "calories": 105,
            "total_sugars": "25g",
        },
        {
            "name": "Neon Lime (12-Pack)",
            "slug": "neon-lime-12-pack",
            "description": "Tangy green glitter bomb bulk pack.",
            "price": 49.99,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuA3JHG6v6O7QxL3SdHtv-V3ivisMEvyggwwIv3V8BzxmFAQYks3oyq6hx21MiOhyiC90V7E1br4XI3Mc0FcqCXkhTm5_YXMrPbmz0knNzIR508A0YEfoqgwMHpraYnzhpqJwaHsAIT9MwSSx5LD10rdj7Nf86H4Xl9Z2xouYyXxsEHqGszzQes7LLdGtAuyaJqdsJlOXiW2u4uqRjSl99hwbZJpeGnR3yzoh2lkAcjubuDMZ9mBA12U",
            "badge": "Best Value",
            "is_sold_out": False,
            "flavor": "Lime",
            "pack_size": "12-Pack",
            "ingredients": "Cane Sugar, Corn Syrup, Citric Acid, Natural Lime Flavor, Yellow 5, Blue 1, Edible Mica-Based Pearlescent Pigment.",
            "calories": 100,
            "total_sugars": "24g",
        },
        {
            "name": "Galaxy Grape",
            "slug": "galaxy-grape",
            "description": "Deep space glitter bomb with cosmic grape flavor.",
            "price": 4.99,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuD6zVeLy5FpVNND_b55I0JLVqSDdbVIBO0dalwx2m9Y1vKBTghk_go2mTSzRRW4XLu2_jNV7cVOjCKDQKy7G8dHEc1eq8hB9xqijKQW9OFK4twiVrQHzSuMRQHcUbkPvfJFP8dA7QfgHgpL7dUbBABvG4hxWRcQAbTz7-zSI-QqPqVXJsmtmGTv0ipitukPavcMznkTIVeRxUOA34RZODss3BDx_GEAYvPIOMf4riQqJ4pn6pAUiQEZ",
            "badge": "Sold Out",
            "is_sold_out": True,
            "flavor": "Grape",
            "pack_size": "Single",
            "ingredients": "Cane Sugar, Corn Syrup, Citric Acid, Natural Grape Flavor, Blue 1, Red 3, Edible Mica-Based Pearlescent Pigment.",
            "calories": 118,
            "total_sugars": "27g",
        },
        {
            "name": "Strawberry Supernova",
            "slug": "strawberry-supernova",
            "description": "Pink supernova explosion with strawberry shimmer.",
            "price": 12.00,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuA_MS5ojeoAijAiNC-cYmEEZAZCVZUwBkVAEpDcBrtEWrCQkN1_NIvsuWK42au0sreHMQ3WDg6Lir3f2V7Sjhw9G51U6vqKOYd08xLWYd5dD0aSRYDrEfgnsz9ald2nGwTt0mjPDWRPTtSwV9BBNGing0rBHhH6svOrilxxTBgf1PmRI7xKC65AVxP4FLhjEoTmH46CfoEcDVb71Ju-ruvH5ulnU7mbaxqDuCHKs9EHMX6tsz_G7kHm",
            "badge": None,
            "is_sold_out": False,
            "flavor": "Strawberry",
            "pack_size": "Single",
            "ingredients": "Cane Sugar, Corn Syrup, Citric Acid, Natural Strawberry Flavor, Red 40, Edible Mica-Based Pearlescent Pigment.",
            "calories": 112,
            "total_sugars": "26g",
        },
        {
            "name": "Sour Apple Shock",
            "slug": "sour-apple-shock",
            "description": "Neon green sour apple with a shocking sparkle.",
            "price": 12.00,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuB_VPAuCeYKpTuWXaHzoVhD1g7tgxCAUI8HLDlYZOtWxpYnMr7XaM7t9DsQ1BoTujNOtYVQ9nJTYT2bkcGOD0fnt_6Q4E_p73ShmkFkR5y-cp7ZUt_ORbrI46F_qFMuaJ0qnkQy4C6w4IsPhs2dg183uQx_Sdlbb3YQWqlXibI-ih8qTXFuv1nVXCELy5QSLD0gwIjLyMxxG8NdAtfUYFGOZqsdxk16HZ2QsnA0Yw1KZpunq2Cb7pSk",
            "badge": "Sold Out",
            "is_sold_out": True,
            "flavor": "Apple",
            "pack_size": "Single",
            "ingredients": "Cane Sugar, Corn Syrup, Citric Acid, Natural Apple Flavor, Yellow 5, Blue 1, Edible Mica-Based Pearlescent Pigment.",
            "calories": 108,
            "total_sugars": "25g",
        },
        {
            "name": "Galactic Grape",
            "slug": "galactic-grape",
            "description": "Deep cosmic grape with metallic glitter sheen.",
            "price": 12.00,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuAXYTrHPueB-xKw6fd-BjuHTIz0fbQZzgWi1PznHC1Rb_TVBn_95Eei3OxR5xy8zOVUNMS_bClRqGZYY_NPBKabX1g8yc9ZXB_Mh6hVUTZIC0-QMNE3YlnQC35gm-nsTIXHEjfGFUpKDxREV0ECKZJniYXg8dNpzCa063_iHdUiRNU2MkM31zKfJCEbYtAGNqAEG_aIY2aPyBuAeyzhX4yfFfc8wQ7F5D_dZO9DRk_kA-iuoe2mAo2H",
            "badge": None,
            "is_sold_out": False,
            "flavor": "Grape",
            "pack_size": "Single",
            "ingredients": "Cane Sugar, Corn Syrup, Citric Acid, Natural Grape Flavor, Blue 1, Red 3, Edible Mica-Based Pearlescent Pigment.",
            "calories": 120,
            "total_sugars": "28g",
        },
    ]

    for product in products:
        try:
            supabase.table("products").insert(product).execute()
            print(f"  ✓ Seeded: {product['name']}")
        except Exception as e:
            print(f"  ✗ Error seeding {product['name']}: {e}")


def seed_deals():
    """Seed the deals table with initial limited drop data."""
    deals = [
        {
            "title": "The Party Pack",
            "description": "6 exclusive neon flavors in holographic tubs.",
            "discount_pct": 20,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuC-VoH8Efm_Pu1rvnrPQVB4OCs2e-PfyR0YzK8723PaeBLsxnOCWN8XgY7LkNIKWe2opHeLVSeBI-EHeaxQZdHEErXTzuMVDuUC4xzRU7uzeTYggzooCCJiHNvekFEUlSKgbe-8bBvGNc4r_oSe9ekRiLdk4EfC51-dXntkXxwrL14ugYN8pwLz99FmnMwfe7in48PMQ3O4dWVbBpIld5Pe-pjqnQaK0iMc0FwCJzJB1nbu3Dt0m6M0",
            "price": 49.99,
            "is_sold_out": False,
        },
        {
            "title": "Solo Drop #1",
            "description": "The original glitch flavor. Gone forever.",
            "discount_pct": None,
            "image_url": "https://lh3.googleusercontent.com/aida-public/AB6AXuAEM9XX8ByIf2dtvgz5uq7QgGSwU25FkZu3Y_dzcuTocZrT64BXXVXOvkpXvlXOwTXiraCGl0-AreZRAKNw_wH6i5hQ2CWYS7aK7qlzHCLsIju8iDWo0LTTvZH9rJZ7UeZ2EnIe2hqR0iSVC6N3qAGqkzMo9hGcEFo44_XfcQ-0b513K-puVbNgpCmUQ46z_VDUCWW8tOrlUGtvLQlUn9Pi18zkMci2F90bFAcE8aeYSFxkKKl9gV3N",
            "price": 19.99,
            "is_sold_out": True,
        },
    ]

    for deal in deals:
        try:
            supabase.table("deals").insert(deal).execute()
            print(f"  ✓ Seeded deal: {deal['title']}")
        except Exception as e:
            print(f"  ✗ Error seeding deal {deal['title']}: {e}")


if __name__ == "__main__":
    print("\n🎆 Cotton Bombs — Database Seeder\n")
    print("Seeding products...")
    seed_products()
    print("\nSeeding deals...")
    seed_deals()
    print("\n✅ Done!\n")
