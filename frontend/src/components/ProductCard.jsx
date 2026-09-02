import { Link } from "react-router-dom";

export default function ProductCard({ product, onAddToCart, wide = false }) {
  const isSoldOut = product.is_sold_out;

  return (
    <article
      className={`iridescent-card group flex cursor-pointer flex-col overflow-hidden rounded-xl ${
        wide ? "col-span-1 sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""
      }`}
    >
      <Link
        to={`/product/${product.slug}`}
        className="relative aspect-[4/5] overflow-hidden rounded-t-xl bg-surface-container"
      >
        <img
          src={product.image_url}
          alt={product.name}
          className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
            isSoldOut ? "grayscale opacity-70" : ""
          }`}
        />

        {/* Glitter overlay */}
        <div className="pointer-events-none absolute inset-0 bg-primary/20 opacity-0 mix-blend-overlay transition-opacity group-hover:opacity-100" />

        {/* Badge */}
        {product.badge && !isSoldOut && (
          <span className="absolute left-2 top-2 z-10 rounded-full bg-gradient-to-r from-primary to-tertiary px-2 py-1 text-label-caps text-on-primary shadow-[inset_0_0_8px_rgba(255,255,255,0.4)]">
            {product.badge}
          </span>
        )}

        {/* Sold Out Overlay */}
        {isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-surface/40 backdrop-blur-[2px]">
            <span className="rotate-[-12deg] rounded-full border border-outline bg-surface px-3 py-1 text-label-caps text-on-surface shadow-md">
              Sold Out
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-grow flex-col justify-between p-4">
        <div>
          <h3 className="text-headline-lg-mobile leading-tight text-on-surface mb-1">
            {product.name}
          </h3>
          <p className="text-sm text-on-surface-variant">{product.description}</p>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span
            className={`text-lg font-bold ${
              isSoldOut ? "text-on-surface-variant line-through" : "text-primary"
            }`}
          >
            ${product.price.toFixed(2)}
          </span>
          {isSoldOut ? (
            <button
              disabled
              className="cursor-not-allowed rounded-full bg-surface-variant px-4 py-2 text-label-caps text-on-surface-variant"
            >
              Out of Stock
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.preventDefault();
                onAddToCart?.(product);
              }}
              className="btn-bouncy flex items-center gap-1 rounded-full bg-on-surface px-4 py-2 text-label-caps text-surface transition-colors hover:bg-primary"
            >
              Add{" "}
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                add
              </span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
