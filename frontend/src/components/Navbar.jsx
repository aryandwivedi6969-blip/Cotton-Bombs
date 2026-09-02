import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Catalogue", to: "/catalogue" },
  { label: "Sales", to: "/sales" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      id="main-navbar"
      className="sticky top-0 z-50 flex h-20 w-full items-center justify-between border-b border-on-surface/10 bg-surface/80 px-margin-mobile backdrop-blur-md md:px-margin-desktop"
    >
      {/* Logo */}
      <Link
        to="/"
        className="text-headline-lg-mobile text-primary italic select-none"
      >
        Cotton Bombs
      </Link>

      {/* Desktop Nav Links */}
      <div className="hidden items-center gap-gutter md:flex">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`text-label-caps transition-all duration-200 hover:scale-105 active:scale-95 ${
                isActive
                  ? "border-b-2 border-primary pb-1 text-primary"
                  : "text-on-surface hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-gutter">
        <button
          id="cart-button"
          className="flex items-center gap-1 text-primary transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="hidden md:inline text-label-caps">Cart</span>
        </button>
        <button
          id="account-button"
          className="flex items-center gap-1 text-on-surface transition-all duration-200 hover:scale-105 hover:text-primary active:scale-95"
        >
          <span className="material-symbols-outlined">account_circle</span>
          <span className="hidden md:inline text-label-caps">Account</span>
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-on-surface"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[28px]">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-20 z-40 flex w-full flex-col gap-2 border-b border-outline-variant bg-surface p-margin-mobile shadow-lg md:hidden">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-label-caps transition-colors ${
                  isActive
                    ? "bg-primary-container text-on-primary-container"
                    : "text-on-surface hover:bg-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
