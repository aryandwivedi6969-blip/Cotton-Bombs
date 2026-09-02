import { useState, useEffect } from "react";
import ShaderBackground from "../components/ShaderBackground";
import { getDeals } from "../lib/api";

const FALLBACK_DEALS = [
  {
    id: 1, title: "The Party Pack",
    description: "6 exclusive neon flavors in holographic tubs.",
    discount_pct: 20, price: 49.99, is_sold_out: false,
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-VoH8Efm_Pu1rvnrPQVB4OCs2e-PfyR0YzK8723PaeBLsxnOCWN8XgY7LkNIKWe2opHeLVSeBI-EHeaxQZdHEErXTzuMVDuUC4xzRU7uzeTYggzooCCJiHNvekFEUlSKgbe-8bBvGNc4r_oSe9ekRiLdk4EfC51-dXntkXxwrL14ugYN8pwLz99FmnMwfe7in48PMQ3O4dWVbBpIld5Pe-pjqnQaK0iMc0FwCJzJB1nbu3Dt0m6M0",
  },
  {
    id: 2, title: "Solo Drop #1",
    description: "The original glitch flavor. Gone forever.",
    discount_pct: null, price: 19.99, is_sold_out: true,
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEM9XX8ByIf2dtvgz5uq7QgGSwU25FkZu3Y_dzcuTocZrT64BXXVXOvkpXvlXOwTXiraCGl0-AreZRAKNw_wH6i5hQ2CWYS7aK7qlzHCLsIju8iDWo0LTTvZH9rJZ7UeZ2EnIe2hqR0iSVC6N3qAGqkzMo9hGcEFo44_XfcQ-0b513K-puVbNgpCmUQ46z_VDUCWW8tOrlUGtvLQlUn9Pi18zkMci2F90bFAcE8aeYSFxkKKl9gV3N",
  },
];

function useCountdown() {
  const [time, setTime] = useState({ days: 2, hours: 14, minutes: 59 });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes } = prev;
        minutes--;
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return { days: 0, hours: 0, minutes: 0 };
        return { days, hours, minutes };
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  return time;
}

export default function Sales() {
  const [deals, setDeals] = useState(FALLBACK_DEALS);
  const countdown = useCountdown();

  useEffect(() => {
    getDeals()
      .then((res) => { if (res.data?.length) setDeals(res.data); })
      .catch(() => {});
  }, []);

  return (
    <div className="dark-section min-h-screen">
      {/* Hero with Shader */}
      <section className="relative flex h-[819px] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-60">
          <ShaderBackground className="h-full w-full" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

        <div className="relative z-20 flex flex-col items-center gap-stack-md px-margin-mobile text-center md:px-margin-desktop">
          <span className="rounded-full border border-primary/50 bg-primary/20 px-4 py-2 text-label-caps text-[#ffabf3] backdrop-blur-sm">
            STRICTLY LIMITED
          </span>
          <h1 className="glitter-text text-headline-xl uppercase leading-none">
            The Neon<br />Drop
          </h1>

          {/* Countdown */}
          <div className="mt-8 flex gap-4 text-headline-lg text-white">
            {[
              { val: String(countdown.days).padStart(2, "0"), label: "DAYS" },
              { val: String(countdown.hours).padStart(2, "0"), label: "HRS" },
              { val: String(countdown.minutes).padStart(2, "0"), label: "MIN" },
            ].map((item, i) => (
              <div key={item.label} className="flex flex-col items-center">
                {i > 0 && <span className="text-headline-lg text-white self-center mr-4">:</span>}
                <div className="flex flex-col items-center rounded-lg border border-primary/30 bg-[#1a1c1c]/80 p-4 backdrop-blur-md">
                  <span>{item.val}</span>
                  <span className="text-label-caps text-[#ffabf3]">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="relative z-20 mx-auto max-w-7xl px-margin-mobile py-stack-lg md:px-margin-desktop">
        <h2 className="text-headline-lg mb-stack-md text-center text-white">Exclusive Bundles</h2>
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className={`iridescent-border-dark bouncy-hover group flex flex-col gap-4 rounded-xl p-6 transition-all duration-300 ${
                deal.is_sold_out ? "" : ""
              }`}
            >
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={deal.image_url}
                  alt={deal.title}
                />
                {deal.discount_pct && !deal.is_sold_out && (
                  <span className="absolute right-2 top-2 rounded-full bg-primary px-3 py-1 text-label-caps text-white">
                    -{deal.discount_pct}%
                  </span>
                )}
                {deal.is_sold_out && (
                  <span className="absolute right-2 top-2 rounded-full bg-secondary px-3 py-1 text-label-caps text-white">
                    SOLD OUT
                  </span>
                )}
              </div>

              <div>
                <h3 className={`text-headline-lg-mobile text-white ${deal.is_sold_out ? "opacity-50" : ""}`}>
                  {deal.title}
                </h3>
                <p className={`text-body-md mt-2 text-surface-variant ${deal.is_sold_out ? "opacity-50" : ""}`}>
                  {deal.description}
                </p>
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-surface-variant/20 pt-4">
                <span className={`text-headline-lg-mobile ${deal.is_sold_out ? "text-surface-variant/50 line-through" : "text-[#ffabf3]"}`}>
                  ${deal.price.toFixed(2)}
                </span>
                {deal.is_sold_out ? (
                  <button className="cursor-not-allowed rounded-full bg-surface-variant/10 px-6 py-3 text-label-caps text-surface-variant/50">
                    MISSED IT
                  </button>
                ) : (
                  <button className="glow-btn bouncy-active rounded-full bg-primary px-6 py-3 text-label-caps text-white transition-all">
                    CLAIM NOW
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
