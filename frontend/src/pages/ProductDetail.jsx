import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProduct } from "../lib/api";

const FALLBACK = {
  name: "Blueberry Burst", slug: "blueberry-burst", price: 12.0,
  description: "The original electric-blue explosion. Tangy, loud, and excessively sparkly.",
  image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFH8jjLCNNtGUY10y5WxyY49WPpFOmMHsj_gRU34ss3KlrwN9YYB-S38bjY5NOspBf6A9p0XdseQQTksxR7hn5IScrigN9zpHOFJBgRu_vTz1dXI5S_Ywunr5FIrtdqN7hyWnuK534ryJdU5mVrQnf0GNV5L_b_R1vIpi9KZLoQ_crnyQXEE6LAIWnK9UDhEKKTSGPJfMN2QJSVlPjE7lq-vsaKlKlCHR6rf9_YPVMDRxpbn1KQAeP",
  badge: "New Flavor", is_sold_out: false,
  ingredients: "Cane Sugar, Corn Syrup, Citric Acid, Natural Blueberry Flavor, Blue 1, Red 3, Edible Mica-Based Pearlescent Pigment.",
  calories: 120, total_sugars: "28g",
};

const GALLERY = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC2jvOs4V_6eR50PK_sut3N5vTs4XnJ6vIdFbgxgpNo32vCFvtx4xZEYbqtDZH-lg-Q0Fpa0ji285t6xW9Z8QBG9bjUlZjsiJD0i5x2dJaYcngiEkrPfEuCa4uYIDz9KyS0MV1D4w_Wg_CGjI2FpqjI-Iskbq0gI1w3jk7Su__AECxKsKIol7f-pMnVkz5_4yVFW45TbGAZFXZ4f1BZ-ZvrnvpHnUTUO_85dAmVqs5GMUac4tpUZXqR",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB0BCK_Rosy8-Kq8ae4FgPrWXZW5aOdmr8rSM5bmfB64ityR3VJthT9baCyz2kL3bVxDthd6dxSrE_vPO3oQ3sBa4YmJ6rJvGwBwrBp2M3Z6OlbOt5QgbLjZH2jmdEg2rsbpp3RHR1NOcW2N6-iZtDXxK4lGSrG0OiovuHkUV3PCaQT-InxqnkZf17KwDW8PVclmKn2hplE598Ong1fO7eTDIIwV2spLJozu-1DEsdqyplF4I4EgNiW",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDNSgpgtJGE8stvIepICq0ljQtziwFzhHQg6igNfuzX4CiSSBg6Fim59LXJDSTyj1Y10kAUcC2x7PlsAjysLan5u8wq2KbuPwWNp19diby754BqiudnvF-0W0MaB3NI3CmDfjw-QovjXxum7ObokREGXzaG-O-rAfWUDxPvw-lFaM7wAkhBg6A2KP5wNq8hmV1hugNkLowl2Ew6X5QrvL-ddvzfdXcASCo6qfvXVjMjEg8bjLfe3oXV",
];

const RELATED = [
  { name: "Strawberry Supernova", slug: "strawberry-supernova", price: 12.0, image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_MS5ojeoAijAiNC-cYmEEZAZCVZUwBkVAEpDcBrtEWrCQkN1_NIvsuWK42au0sreHMQ3WDg6Lir3f2V7Sjhw9G51U6vqKOYd08xLWYd5dD0aSRYDrEfgnsz9ald2nGwTt0mjPDWRPTtSwV9BBNGing0rBHhH6svOrilxxTBgf1PmRI7xKC65AVxP4FLhjEoTmH46CfoEcDVb71Ju-ruvH5ulnU7mbaxqDuCHKs9EHMX6tsz_G7kHm" },
  { name: "Sour Apple Shock", slug: "sour-apple-shock", price: 12.0, badge: "Sold Out", image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_VPAuCeYKpTuWXaHzoVhD1g7tgxCAUI8HLDlYZOtWxpYnMr7XaM7t9DsQ1BoTujNOtYVQ9nJTYT2bkcGOD0fnt_6Q4E_p73ShmkFkR5y-cp7ZUt_ORbrI46F_qFMuaJ0qnkQy4C6w4IsPhs2dg183uQx_Sdlbb3YQWqlXibI-ih8qTXFuv1nVXCELy5QSLD0gwIjLyMxxG8NdAtfUYFGOZqsdxk16HZ2QsnA0Yw1KZpunq2Cb7pSk" },
  { name: "Galactic Grape", slug: "galactic-grape", price: 12.0, image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXYTrHPueB-xKw6fd-BjuHTIz0fbQZzgWi1PznHC1Rb_TVBn_95Eei3OxR5xy8zOVUNMS_bClRqGZYY_NPBKabX1g8yc9ZXB_Mh6hVUTZIC0-QMNE3YlnQC35gm-nsTIXHEjfGFUpKDxREV0ECKZJniYXg8dNpzCa063_iHdUiRNU2MkM31zKfJCEbYtAGNqAEG_aIY2aPyBuAeyzhX4yfFfc8wQ7F5D_dZO9DRk_kA-iuoe2mAo2H" },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const [product, setProduct] = useState(FALLBACK);
  const [quantity, setQuantity] = useState(1);
  const [nutritionOpen, setNutritionOpen] = useState(true);

  useEffect(() => {
    getProduct(slug)
      .then((res) => { if (res.data) setProduct(res.data); })
      .catch(() => {});
  }, [slug]);

  const total = (product.price * quantity).toFixed(2);

  return (
    <div className="mx-auto w-full max-w-[1600px]">
      {/* Split Layout */}
      <section className="grid min-h-[calc(100vh-80px)] grid-cols-1 lg:grid-cols-12">
        {/* Left Gallery */}
        <div className="flex flex-col gap-gutter overflow-y-auto bg-surface-container-lowest p-margin-mobile lg:col-span-7 md:p-margin-desktop" style={{ scrollbarWidth: "none" }}>
          <div className="holo-border relative w-full overflow-hidden rounded-xl aspect-square">
            <img className="h-full w-full object-cover" src={product.image_url} alt={product.name} />
            {product.badge && (
              <div className="holo-gradient-bg foil-glow absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full px-4 py-1 backdrop-blur-md">
                <span className="material-symbols-outlined text-sm text-white" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-label-caps text-white">{product.badge}</span>
              </div>
            )}
          </div>
          <div className="grid h-[500px] grid-cols-2 gap-gutter">
            <div className="holo-border relative col-span-1 h-full w-full overflow-hidden rounded-xl">
              <img className="h-full w-full object-cover" src={GALLERY[0]} alt="Detail 1" />
            </div>
            <div className="col-span-1 grid grid-rows-2 gap-gutter">
              <div className="holo-border relative h-full w-full overflow-hidden rounded-xl">
                <img className="h-full w-full object-cover" src={GALLERY[1]} alt="Detail 2" />
              </div>
              <div className="holo-border group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-surface-container-low">
                <img className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100" src={GALLERY[2]} alt="Video" />
                <div className="holo-border relative z-10 flex items-center justify-center rounded-full bg-surface/50 p-4 text-primary backdrop-blur-sm">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 32 }}>play_arrow</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sticky Panel */}
        <div className="flex flex-col justify-center gap-stack-md border-l border-outline-variant bg-surface p-margin-mobile lg:sticky lg:top-20 lg:col-span-5 lg:h-[calc(100vh-80px)] md:p-margin-desktop">
          <div className="flex flex-col gap-unit">
            <h1 className="text-headline-lg-mobile font-black uppercase tracking-tighter text-primary md:text-headline-xl">{product.name}</h1>
            <p className="text-body-md text-on-surface-variant">{product.description}</p>
          </div>
          <div className="text-headline-lg-mobile font-black text-on-surface md:text-headline-lg">${product.price.toFixed(2)}</div>

          {/* How to Detonate */}
          <div className="rounded-lg border-4 border-primary/10 bg-surface-container p-6">
            <h3 className="text-label-caps mb-4 flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined">bolt</span> How to Detonate
            </h3>
            <ul className="text-body-md flex flex-col gap-4 text-on-surface">
              <li className="flex items-start gap-3"><span className="font-bold text-primary">1.</span> Drop it in your favorite clear beverage.</li>
              <li className="flex items-start gap-3"><span className="font-bold text-primary">2.</span> Watch the sugar shell dissolve into a sparkly galaxy.</li>
              <li className="flex items-start gap-3"><span className="font-bold text-primary">3.</span> Drink the burst. Sparkle responsibly.</li>
            </ul>
          </div>

          {/* Quantity & Cart */}
          <div className="mt-auto flex flex-col gap-4 lg:mt-stack-md">
            <div className="flex items-center justify-between border-b border-outline-variant pb-2">
              <span className="text-label-caps text-on-surface-variant">Quantity</span>
              <div className="flex items-center gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex h-8 w-8 items-center justify-center rounded-full border border-outline hover:bg-surface-variant"><span className="material-symbols-outlined text-sm">remove</span></button>
                <span className="text-body-md w-4 text-center font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-outline hover:bg-surface-variant"><span className="material-symbols-outlined text-sm">add</span></button>
              </div>
            </div>
            <button className="holo-gradient-bg foil-glow btn-bouncy mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-label-caps text-white">
              <span className="material-symbols-outlined">shopping_bag</span> Add to Cart — ${total}
            </button>
          </div>
        </div>
      </section>

      {/* Nutrition Accordion */}
      <section className="border-t border-outline-variant bg-surface-container-low px-margin-mobile py-stack-lg md:px-margin-desktop">
        <div className="mx-auto max-w-3xl">
          <div className="iridescent-border overflow-hidden rounded-xl bg-surface-container-lowest">
            <button onClick={() => setNutritionOpen(!nutritionOpen)} className="flex w-full items-center justify-between p-6 text-headline-lg-mobile font-bold text-primary text-left">
              Nutrition &amp; Ingredients
              <span className={`material-symbols-outlined transition-transform duration-300 ${nutritionOpen ? "rotate-180" : ""}`}>keyboard_arrow_down</span>
            </button>
            {nutritionOpen && (
              <div className="text-body-md border-t border-surface-variant p-6 pt-4 text-on-surface-variant">
                <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
                  <div>
                    <h4 className="text-label-caps mb-2 text-primary">Ingredients</h4>
                    <p>{product.ingredients || FALLBACK.ingredients}</p>
                  </div>
                  <div>
                    <h4 className="text-label-caps mb-2 text-primary">Nutrition Facts</h4>
                    <ul className="space-y-1">
                      <li className="flex justify-between border-b border-surface-variant pb-1"><span>Calories</span><span className="font-bold text-on-surface">{product.calories || 120}</span></li>
                      <li className="flex justify-between border-b border-surface-variant pb-1"><span>Total Sugars</span><span className="font-bold text-on-surface">{product.total_sugars || "28g"}</span></li>
                      <li className="flex justify-between pb-1"><span>Sparkle Energy</span><span className="font-bold text-primary">100%</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="border-t border-outline-variant bg-background px-margin-mobile py-stack-lg md:px-margin-desktop">
        <h2 className="text-headline-lg-mobile mb-stack-md text-center font-black uppercase text-on-surface md:text-headline-lg">More Bombs</h2>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {RELATED.map((r) => (
            <Link key={r.slug} to={`/product/${r.slug}`} className="group flex h-full flex-col overflow-hidden rounded-xl border-4 border-transparent bg-surface-container-lowest transition-all hover:border-black/5">
              <div className="relative overflow-hidden bg-surface-container aspect-[4/5]">
                <img className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src={r.image_url} alt={r.name} />
                {r.badge && <div className="absolute right-2 top-2 z-10 rounded-full bg-error px-2 py-1 text-label-caps text-on-error">{r.badge}</div>}
              </div>
              <div className="flex flex-grow flex-col gap-2 bg-surface p-4">
                <h3 className="text-label-caps uppercase text-primary">{r.name}</h3>
                <p className="text-body-md mt-auto font-bold text-on-surface">${r.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
