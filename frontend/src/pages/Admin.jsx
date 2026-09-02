import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAdminStats } from "../lib/api";

const FALLBACK_STATS = {
  total_revenue: 124500, active_orders: 342, low_stock_alerts: 5,
  revenue_change_pct: 14.5, orders_needing_attention: 12,
};

const NAV_ITEMS = [
  { icon: "analytics", label: "Analytics", active: true },
  { icon: "shopping_bag", label: "Orders", active: false },
  { icon: "inventory_2", label: "Inventory", active: false },
  { icon: "settings", label: "Settings", active: false },
];

export default function Admin() {
  const [stats, setStats] = useState(FALLBACK_STATS);

  useEffect(() => {
    getAdminStats()
      .then((res) => { if (res.data) setStats(res.data); })
      .catch(() => {});
  }, []);

  return (
    <div className="flex min-h-screen bg-background text-on-surface">
      {/* Sidebar */}
      <nav className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-outline-variant bg-surface-container-lowest p-stack-md">
        <div className="mb-stack-lg">
          <h1 className="text-headline-lg tracking-tight text-primary">Cotton HQ</h1>
          <p className="text-body-md mt-1 text-on-surface-variant">Admin Dashboard</p>
        </div>

        <ul className="flex flex-grow flex-col gap-unit">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`bouncy-active flex items-center gap-3 rounded-lg px-4 py-2 transition-transform duration-150 ease-out ${
                  item.active
                    ? "bg-primary-container font-bold text-on-primary-container"
                    : "text-on-surface-variant hover:bg-surface-variant/50 hover:scale-[0.98]"
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={item.active ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {item.icon}
                </span>
                <span className="text-label-caps">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-outline-variant pt-stack-md">
          <button className="bouncy-active mb-stack-sm flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-label-caps tracking-wider text-on-primary shadow-[inset_0_0_10px_rgba(255,255,255,0.4)]">
            <span className="material-symbols-outlined text-sm">add</span> New Drop
          </button>
          <a href="#" className="bouncy-active flex items-center gap-3 rounded-lg px-4 py-2 text-on-surface-variant transition-all hover:bg-surface-variant/50 hover:scale-[0.98]">
            <span className="material-symbols-outlined">logout</span>
            <span className="text-label-caps">Logout</span>
          </a>
          <div className="mt-4 flex items-center gap-3 px-2">
            <div className="h-8 w-8 overflow-hidden rounded-full border border-outline-variant bg-surface-variant">
              <img
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjoARj7VaTJNESmOYhwKJA1RrQBVK7dt4wrKuL4MAPLfaHlGG-EqnOQwGDcjYTy-7lxtvPNw1F6Q5H9eaegEz50390d9bjixKtjcsRcgSYoP8EaUW_yzgJWE65lr9ULRV4_imQtMjtw263L6FtGzuvJvFC2kS3IrZEn_MrscIjq2HWU4aoGONsdtFa32L33rYOL6DMrQKArDRib2fJ312f9EJXLyqwfu_Ky4qJow7RbhqYMPtzUDzr"
                alt="Admin user avatar"
              />
            </div>
            <span className="text-label-caps text-on-surface-variant">Admin User</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 min-h-screen flex-grow bg-background p-margin-desktop">
        <header className="mb-stack-lg flex items-end justify-between border-b border-outline-variant pb-stack-sm">
          <div>
            <h2 className="text-headline-xl tracking-tighter text-on-surface">Dashboard Overview</h2>
            <p className="text-body-md mt-2 max-w-xl text-on-surface-variant">
              Real-time metrics, active orders, and inventory status for the current drop cycle.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="iridescent-border flex items-center gap-2 rounded-full border border-tertiary-container bg-tertiary-fixed px-4 py-1 text-label-caps text-on-tertiary-fixed-variant">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Live Feed
            </span>
          </div>
        </header>

        {/* KPI Cards */}
        <div className="mb-stack-lg grid grid-cols-1 gap-gutter md:grid-cols-3">
          {/* Revenue */}
          <div className="iridescent-border group relative overflow-hidden rounded-xl border border-outline-variant bg-surface p-stack-md">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 mb-4 flex items-start justify-between">
              <span className="text-label-caps uppercase text-on-surface-variant">Total Revenue</span>
              <span className="material-symbols-outlined text-primary">payments</span>
            </div>
            <div className="relative z-10">
              <span className="text-headline-lg text-on-surface">
                ${stats.total_revenue.toLocaleString()}
              </span>
              <div className="mt-2 flex items-center gap-1 text-label-caps text-secondary">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                +{stats.revenue_change_pct}% vs last week
              </div>
            </div>
          </div>

          {/* Active Orders */}
          <div className="iridescent-border group relative overflow-hidden rounded-xl border border-outline-variant bg-surface p-stack-md">
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 mb-4 flex items-start justify-between">
              <span className="text-label-caps uppercase text-on-surface-variant">Active Orders</span>
              <span className="material-symbols-outlined text-tertiary">local_shipping</span>
            </div>
            <div className="relative z-10">
              <span className="text-headline-lg text-on-surface">{stats.active_orders}</span>
              <div className="mt-2 flex items-center gap-1 text-label-caps text-error">
                <span className="material-symbols-outlined text-sm">priority_high</span>
                {stats.orders_needing_attention} require attention
              </div>
            </div>
          </div>

          {/* Low Stock */}
          <div className="iridescent-border group relative overflow-hidden rounded-xl border border-outline-variant bg-surface p-stack-md">
            <div className="absolute inset-0 bg-gradient-to-br from-error/5 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10 mb-4 flex items-start justify-between">
              <span className="text-label-caps uppercase text-on-surface-variant">Low Stock Alerts</span>
              <span className="material-symbols-outlined text-error">warning</span>
            </div>
            <div className="relative z-10">
              <span className="text-headline-lg text-on-surface">{stats.low_stock_alerts}</span>
              <div className="mt-2 text-label-caps text-on-surface-variant">
                SKUs below threshold
              </div>
            </div>
          </div>
        </div>

        {/* Back to Store Link */}
        <div className="mt-stack-lg">
          <Link to="/" className="text-label-caps text-primary hover:underline">
            ← Back to Store
          </Link>
        </div>
      </main>
    </div>
  );
}
