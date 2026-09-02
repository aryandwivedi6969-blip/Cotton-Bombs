import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import useConfetti, { ConfettiContainer } from "../components/ConfettiEffect";
import { getProducts } from "../lib/api";

const FALLBACK = [
  { id: 1, name: "Blueberry Burst", slug: "blueberry-burst", price: 4.99, description: "Electric blue glitter bomb.", image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSHrnjE58IrUlhLQgH-cbGhbHTdiwIv2l6D8l32VbMqr3g2tq1uOdLgni9v0ccP_QqRcrXwLHmbIOsG5kpzU_M-tQc6TcqJPyOHyAsV--B0C1StVGO0p-_DfAuMyDfy4hI1gZc_7ns2AejJUvAYAyxGQmJv1pIZG4fC1gVAw_FSFvtiX5sENtBVSZJ4PssCsHTZfEXx9sB68fy8MXS92c-9o3pGPTMY7ray0axyKvLDpdsBE7CLPcM", is_sold_out: false, badge: "New Flavor", flavor: "Blueberry", pack_size: "Single" },
  { id: 2, name: "Strawberry Sparkle", slug: "strawberry-sparkle", price: 4.99, description: "Sweet pink glitter bomb.", image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuATWx_yhMYyIwvo5JA1rH7bBLuCcMh6tp0yudAZPBHx86ADFPKkDNkiLxkeHFVY0xxcR1vZnntuYw1aUdTgn4Zi7A5IyPT2SdAm1KMHmQc3VXqPLTTk15NKCtQUIuFQZ5yKcsjuWB0pBpjBYz4yY5-jv76C_Sfn1DrtUiHpQMdS-DZovMLcRbP8o-5-3Zv0l1t--ZoipqBjNNPWa4rJc8Wvw_4p8f_UOmpKAuU3hMhQcXBgf9kfWOMA", is_sold_out: false, badge: null, flavor: "Strawberry", pack_size: "Single" },
  { id: 3, name: "Neon Lime (12-Pack)", slug: "neon-lime-12-pack", price: 49.99, description: "Tangy green glitter bomb bulk pack.", image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3JHG6v6O7QxL3SdHtv-V3ivisMEvyggwwIv3V8BzxmFAQYks3oyq6hx21MiOhyiC90V7E1br4XI3Mc0FcqCXkhTm5_YXMrPbmz0knNzIR508A0YEfoqgwMHpraYnzhpqJwaHsAIT9MwSSx5LD10rdj7Nf86H4Xl9Z2xouYyXxsEHqGszzQes7LLdGtAuyaJqdsJlOXiW2u4uqRjSl99hwbZJpeGnR3yzoh2lkAcjubuDMZ9mBA12U", is_sold_out: false, badge: "Best Value", flavor: "Lime", pack_size: "12-Pack" },
  { id: 4, name: "Galaxy Grape", slug: "galaxy-grape", price: 4.99, description: "Deep space glitter bomb.", image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6zVeLy5FpVNND_b55I0JLVqSDdbVIBO0dalwx2m9Y1vKBTghk_go2mTSzRRW4XLu2_jNV7cVOjCKDQKy7G8dHEc1eq8hB9xqijKQW9OFK4twiVrQHzSuMRQHcUbkPvfJFP8dA7QfgHgpL7dUbBABvG4hxWRcQAbTz7-zSI-QqPqVXJsmtmGTv0ipitukPavcMznkTIVeRxUOA34RZODss3BDx_GEAYvPIOMf4riQqJ4pn6pAUiQEZ", is_sold_out: true, badge: "Sold Out", flavor: "Grape", pack_size: "Single" },
];

const FLAVORS = ["Blueberry", "Strawberry", "Lime", "Grape", "Berry", "Cyan", "Apple"];
const PACK_SIZES = ["Single", "4-Pack", "12-Pack"];

export default function Catalogue() {
  const [products, setProducts] = useState(FALLBACK);
  const [selectedFlavors, setSelectedFlavors] = useState([]);
  const [selectedPack, setSelectedPack] = useState(null);
  const { containerRef, burst } = useConfetti();

  useEffect(() => {
    getProducts()
      .then((res) => { if (res.data?.length) setProducts(res.data); })
      .catch(() => {});
  }, []);

  const toggleFlavor = (f) => {
    setSelectedFlavors((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
  };

  const filtered = products.filter((p) => {
    if (selectedFlavors.length && !selectedFlavors.includes(p.flavor)) return false;
    if (selectedPack && p.pack_size !== selectedPack) return false;
    return true;
  });

  const handleAddToCart = (product, e) => {
    if (e?.currentTarget) {
      const rect = e.currentTarget.getBoundingClientRect();
      burst(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-[1920px] flex-col pt-stack-md md:flex-row md:pt-stack-lg">
      {/* ── Filter Sidebar ── */}
      <aside className="mb-stack-md w-full flex-shrink-0 px-margin-mobile md:mb-0 md:w-64 md:px-margin-desktop">
        <div className="sticky top-28 rounded-lg border border-outline-variant bg-surface-container-lowest p-stack-md">
          <h2 className="text-headline-lg-mobile mb-stack-sm text-primary">Filter</h2>

          {/* Flavor */}
          <div className="mb-stack-md">
            <h3 className="text-label-caps mb-unit text-on-surface-variant">FLAVOR</h3>
            <div className="flex flex-col gap-unit">
              {FLAVORS.map((f) => (
                <label key={f} className="flex cursor-pointer items-center gap-unit hover:text-primary">
                  <input
                    type="checkbox"
                    checked={selectedFlavors.includes(f)}
                    onChange={() => toggleFlavor(f)}
                    className="rounded border-outline-variant bg-surface text-primary"
                  />
                  <span>{f}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pack Size */}
          <div className="mb-stack-md">
            <h3 className="text-label-caps mb-unit text-on-surface-variant">PACK SIZE</h3>
            <div className="flex flex-wrap gap-unit">
              {PACK_SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedPack(selectedPack === s ? null : s)}
                  className={`rounded-full border px-3 py-1 text-sm transition-colors ${
                    selectedPack === s
                      ? "border-primary bg-primary font-bold text-on-primary"
                      : "border-outline-variant text-on-surface hover:border-primary hover:text-primary"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* ── Product Grid ── */}
      <section className="flex-grow px-margin-mobile pb-stack-lg md:pl-0 md:pr-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={(prod) => handleAddToCart(prod)} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="py-stack-lg text-center">
            <p className="text-headline-lg-mobile text-on-surface-variant">No products match your filters.</p>
          </div>
        )}
      </section>

      <ConfettiContainer containerRef={containerRef} />
    </div>
  );
}
