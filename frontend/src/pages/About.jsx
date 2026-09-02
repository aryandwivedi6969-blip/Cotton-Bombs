import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section: Split Screen */}
      <section className="flex min-h-[819px] flex-col border-b-4 border-on-surface md:flex-row">
        <div className="flex w-full flex-col justify-center bg-surface-container-lowest p-margin-mobile md:w-1/2 md:p-margin-desktop">
          <h1 className="text-headline-xl mb-stack-md uppercase leading-none text-on-surface">
            Our<br />Manifesto
          </h1>
          <p className="text-body-md max-w-md text-on-surface-variant">
            We aren't just selling cotton candy. We're detonating flavor bombs that turn ordinary moments into hyper-vibrant memories. Welcome to the collision of nostalgic taste and internet-breaking aesthetic.
          </p>
          <div className="mt-stack-lg">
            <Link
              to="/catalogue"
              className="holographic-gradient btn-bouncy foil-glow inline-flex items-center gap-2 rounded-full px-8 py-4 text-label-caps uppercase tracking-widest text-on-primary"
            >
              Get the Drop
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
        <div className="glitter-overlay relative h-[512px] w-full overflow-hidden bg-primary-container md:h-auto md:w-1/2">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Nxm59dGBFO2ebO9V_cxiiKjaQIa8g98_lN_TpaKQ_zfYTgyvcSL45V9_WCimrOcG-E3e65w4dDW8rD3ybRY1TMUzTodKLQwJJpIFAiH7sghDe_0fXqnHWhU5NTHD72eFwpvSOw4QNIv2d0iEvJlsSkJ6BJlgVQW7DtDt7C-oBlEKOUBghP_RhbI0MT44caD4IvhZ8u_O9r478Sagfj6A6Yd199AqAbug8f7ZN8GooSSu8GKQHWYf"
            alt="Gen-Z model with cotton candy"
          />
        </div>
      </section>

      {/* Holographic Divider */}
      <div className="holographic-gradient h-4 w-full" />

      {/* Brand Story */}
      <section className="mx-auto max-w-7xl px-margin-mobile py-stack-lg md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
          <div className="relative order-2 col-span-1 mt-stack-md md:order-1 md:col-span-5 md:col-start-2 md:mt-0">
            <div className="absolute inset-0 -rotate-12 scale-110 rounded-full bg-secondary-fixed/20 blur-2xl" />
            <img
              className="relative z-10 w-full rounded-xl border-4 border-on-surface object-cover shadow-[8px_8px_0px_0px_rgba(26,28,28,1)] aspect-square"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwALVaK1M1x1RNE3gfyumWAspL50m-4gtes4L0h4qBYelKe4nULx_ECCX-s8hScW-N24DJsT06xtISe35NYkxJDYmxstgoXK1EwIUltYWRvYKRksghS5ZZW9a6u_NsCm21oZa9uPEBptxFOOi4rtlIa6Cg9kZ2KqDpvPfvgKN2F3W6uRaKS2zZ5umMDBjxv25-TKJsrmYTt1rMbS7uM5PP0qrS0GzMTnXMAJDQY1un_MNPwMT1yO1U"
              alt="Cotton candy being spun"
            />
          </div>
          <div className="order-1 col-span-1 md:order-2 md:col-span-5 md:col-start-8">
            <div className="foil-glow mb-stack-sm inline-block rounded-full border border-primary/20 bg-primary-container px-4 py-1 text-label-caps uppercase text-on-primary-container">
              The Ethos
            </div>
            <h2 className="text-headline-lg-mobile mb-stack-md leading-tight text-on-surface md:text-headline-lg">
              Sparkle Responsibly.
            </h2>
            <p className="text-body-md mb-stack-sm text-on-surface-variant">
              Every Cotton Bomb is crafted with organic cane sugar and plant-based food coloring. We obsess over the aesthetics so you can flex on the feed, but we never compromise on the ingredients.
            </p>
            <p className="text-body-md text-on-surface-variant">
              Zero microplastics. 100% biodegradable sticks. Maximum visual impact. We engineered a treat that looks illegal but is totally clean.
            </p>
          </div>
        </div>
      </section>

      {/* Holographic Divider */}
      <div className="holographic-gradient h-2 w-full opacity-70" />

      {/* Meet The Founders */}
      <section className="bg-surface-container-low px-margin-mobile py-stack-lg md:px-margin-desktop">
        <div className="mx-auto max-w-7xl">
          <div className="mb-stack-lg text-center">
            <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">The Architects</h2>
            <p className="text-label-caps mt-2 text-primary">WHO DRIVES THE HYPE</p>
          </div>
          <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2">
            {/* Founder 1 */}
            <div className="group relative overflow-hidden rounded-xl border-2 border-outline-variant bg-surface transition-colors duration-300 hover:border-primary">
              <div className="glitter-overlay relative overflow-hidden aspect-[4/5]">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX-RjWeriIjoCLF8vNnFP8C0m6LdmYzQT43DwCPzSLJHylAuT95IIOGKEXu59w3tNWJ7nx1Wp_3ewehX1-e8kgSDutWPnHwzJECSCg1RZN8S41CUSgSpPfUyg-TxdMyFsthBBgUx3axz-w-0SeYfG3LIlbyBnttpyz4sKi_pvlLPhQ2QKRbXnK7smWmgaFFZKUMSZr6eUIC1MmXvJsWugZjoRX6brORePQv8MYPHV2yzd02LoGnTJy"
                  alt="Lexi — Chief Flavor Officer"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-on-surface/90 to-transparent p-stack-md">
                  <h3 className="text-headline-lg-mobile leading-none text-surface-container-lowest">Lexi</h3>
                  <p className="text-label-caps mt-1 text-primary-fixed">Chief Flavor Officer</p>
                </div>
              </div>
            </div>
            {/* Founder 2 */}
            <div className="group relative overflow-hidden rounded-xl border-2 border-outline-variant bg-surface transition-colors duration-300 hover:border-primary md:translate-y-12">
              <div className="glitter-overlay relative overflow-hidden aspect-[4/5]">
                <img
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIf0s1gwXTXLi2MCMvP29KX5w6fGsM1sAqbeYz7YQcxS8LPvGBsTrZbeW7tRy-TV8GrDZQWUOor1Ns0O_SiJtCwx1aWOPtyPol4SITrBvkLWEJW50JakotxyPLQ8NznLUUQe9qWXFL02m7v_vzcldckclmzrCgYDNWApuo7xpdYitQZNgYsJu2POV-66iNN7yZmfQoC7MsE0I3zxuaoCmB9K76VAq1QEYDX6cmO-nJkNo1m3wGUsGO"
                  alt="Jaxon — Creative Director"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-on-surface/90 to-transparent p-stack-md">
                  <h3 className="text-headline-lg-mobile leading-none text-surface-container-lowest">Jaxon</h3>
                  <p className="text-label-caps mt-1 text-secondary-fixed">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
