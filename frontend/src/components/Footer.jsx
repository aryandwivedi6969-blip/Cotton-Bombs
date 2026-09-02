import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full border-t border-outline-variant bg-surface-container-highest py-stack-lg">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-4 md:px-margin-desktop">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <Link
            to="/"
            className="text-headline-lg-mobile text-on-surface italic font-black md:text-headline-lg block mb-unit"
          >
            Cotton Bombs
          </Link>
          <p className="text-label-caps text-on-surface-variant">
            © 2024 Cotton Bombs. Sparkle Responsibly.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col gap-unit">
          <Link
            to="/"
            className="text-body-md text-on-surface-variant transition-colors hover:text-primary hover:underline decoration-primary"
          >
            Privacy Policy
          </Link>
          <Link
            to="/"
            className="text-body-md text-on-surface-variant transition-colors hover:text-primary hover:underline decoration-primary"
          >
            Terms of Service
          </Link>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col gap-unit">
          <Link
            to="/"
            className="text-body-md text-on-surface-variant transition-colors hover:text-primary hover:underline decoration-primary"
          >
            Shipping Info
          </Link>
          <Link
            to="/about"
            className="text-body-md text-on-surface-variant transition-colors hover:text-primary hover:underline decoration-primary"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
}
