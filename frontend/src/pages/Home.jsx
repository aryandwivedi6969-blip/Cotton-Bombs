import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShaderBackground from "../components/ShaderBackground";
import { getProducts } from "../lib/api";

/* ── Static fallback data (used if API is offline) ── */
const FALLBACK_PRODUCTS = [
  {
    id: 1, name: "Berry Blast", slug: "berry-blast", price: 12.0,
    description: "Explosive berry glitter bomb.",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDIBHx8woUodi_iI4dJLWek0JcFzYK1W6o3FXHVSIkoXixYKeG_i6EQLYPm_XArGe216OSQDVEHKn2DYkHoa6l8YbmJ9eoXouACEUVnMQjfNkveN3KtTs2t6l61dtE50WWWGfgG-ATx4DSwv8vMWbCI52osXODGlnlYH-Ka4zLjasNrYq_1vwkHtvOyot5AV0HiE5T2gH2MYwxMsxRLezBx6VysMsfa2RX5QHBahOd908Gd25wJaVu",
    is_sold_out: false, badge: null,
  },
  {
    id: 2, name: "Cyan Surge", slug: "cyan-surge", price: 12.0,
    description: "Electric cyan blue glitter bomb.",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMvDBm364LO_VVUoTKKv4plbwYokdqs5hwKVNIY8fdJLVgEK98I2zhv3nygOu3rrMT6HpNkj6F65nI0NXiWtN5zTbqsvfsZmLC7KOwHkW-DGmFSkVN70zRg5Z4UpxCqkECr8_oOUVsU6N-8cwo_TfS0mdPF9O1qGPvRYimh8kUEvKgKkbjaH2mmwKW7Z1QQ9t8rmVE5G6f06Evb95fOi1cYTnLPvw1BdEvM9ey8HxOtrbqGEIeGcyY",
    is_sold_out: false, badge: null,
  },
  {
    id: 3, name: "Midnight Spark", slug: "midnight-spark", price: 14.0,
    description: "Deep midnight purple glitter bomb.",
    image_url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZNTHHJ3hxjQt8O8cQaGJjTSrxj6JNS8TETy_2deStVV1yYrjbeqPCOGCbDvDmuaA94pkLtPMyReV2jY91CpVc5D7Q2c3jUSoH5WfEx3XFEYSXkblOtCrMY4kj8xcghzXjc_xSI87YK9U1uOUuo4jdXubbnzHKv0VEkeGFegukJ_PXT_oPmiF1MI349b_dSzhkgJWydbCVJOgzJOBpraQvmm8JtXy7ceSyfIKE6AErHhZnUDf7Hr7a",
    is_sold_out: true, badge: "SOLD OUT",
  },
];

const UGC_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXnPMAj1sYVr17FLgjAKapWGPmeaTgWWYKsTFiuj65U5x6A76hk-ikwPJRMgbKFnId2a5PmlRycdT1X2subTqcOnVljFC9thpsfcDaRN9DIas7LeOu11eqPq1jJkjv8l0VILiV3OYFCxDmuCYWFYSjxUvfNliScpErJkr-d8WGcdTz4hsNyuFFryMWi72ftvzGbCReUg8RjNVS8T_fmz0vnATui6B0xq8DW0WQ7Gb3v9CSW5bEYTc6",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDpHmrNhz9YD6xR0SdB6G3vIw1YxeVg8oLL2fXm06PXLWl6-4WUn1VLu7MTw2H2e2vBlQ7692KO_I9r24Zx50hIGZUFdnOoTOWMSKOkgWouvtHnmBpdrF59vuZcHlqX4O_EbsyLeMO4isp06O1N3UfR-oZKrsL1tdhbDX96qRo9ljNiKBvwNjAASxSHK6jw9xwNLW6rXOxgMeIieAeuD5paKjPB2z5XKBgyCj4AGOJVx1Gk9W00JagW",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzk_wgOT2WpI8zGEuJ4v_LrLMRajz6hgw7O5qMtmEHAJNovzfPJ3nORThjVQxZvt41QCPDTdEhy9v92heqCzagckXLNMtl_XFce0ZnotOrqG8MvjQjwIbtChay-JetFt1g3tb0ehvk-Kafl8hAUa057gAbTORHY4nArLFXFA9rdP5fJYcNyez1RDzrZ1Buxf-r00c6moCAJZFcDPOiijIP7BOwk36eQNmlocUFApcnqtGb2i_PBOQu",
];

export default function Home() {
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (res.data && res.data.length > 0) setProducts(res.data.slice(0, 3));
      })
      .catch(() => {});
  }, []);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative flex min-h-[819px] flex-col items-center gap-stack-lg overflow-hidden px-margin-mobile py-stack-lg md:flex-row md:px-margin-desktop">
        {/* Shader Background */}
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
          <ShaderBackground className="h-full w-full" />
        </div>

        {/* Hero Image */}
        <div className="relative z-10 w-full flex-1">
          <div className="relative w-full overflow-hidden rounded-xl border-2 border-primary shadow-[4px_4px_0px_#a900a9] aspect-square md:aspect-auto md:h-[600px]">
            <img
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYVfWMutWVOrpMn75tjWH1kDzvMeTMDnCSU_J5j2NECEtIcfAALJZXEgFaRedO6Yv99_52ELv0MKuekviNWHj-mnExZs4pyh-DsywYC6ZQ-IFivSDqbDCU1Gws5rsFZxLzA_qN0NdveirlhRUO2lTFCUQaQ5x8nJiuIpgsNb7ipKfeftkPlSrWYC1QQqZaVbIJG9w7owKCQtJJQ3cZEnfF_bibl5XA8JW5Dl48WGgfgdbaZgWmE2Tu"
              alt="Cotton Bombs hero — a pink cotton candy glitter bomb exploding in liquid"
            />
          </div>
        </div>

        {/* Hero Copy */}
        <div className="z-10 flex w-full flex-1 flex-col items-start gap-stack-md">
          <div className="rounded-full border border-primary bg-surface px-3 py-1 text-label-caps text-primary shadow-[2px_2px_0px_#a900a9]">
            NEW DROP
          </div>
          <h1 className="text-headline-lg-mobile uppercase leading-none text-on-surface md:text-headline-xl">
            THE DRINK<br />THAT<br />
            <span className="italic text-primary">SPARKS</span>
          </h1>
          <p className="text-body-md max-w-md text-on-surface-variant">
            Drop it, watch it pop. The original glitter cotton candy bomb that turns
            any beverage into a holographic masterpiece.
          </p>
          <Link
            to="/catalogue"
            className="holographic-btn bouncy-hover bouncy-active mt-4 flex items-center gap-2 rounded-lg px-8 py-4 text-label-caps text-on-primary"
          >
            SHOP THE DROP{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ── Shop by Flavor ── */}
      <section className="border-y border-outline-variant/30 bg-surface-container-low py-stack-lg pl-margin-mobile md:pl-margin-desktop">
        <div className="mb-stack-md flex items-end justify-between pr-margin-mobile md:pr-margin-desktop">
          <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">
            SHOP BY FLAVOR
          </h2>
          <Link
            to="/catalogue"
            className="text-label-caps text-primary hover:underline"
          >
            VIEW ALL
          </Link>
        </div>

        <div className="hide-scrollbar flex gap-stack-md overflow-x-auto pb-4 pr-margin-mobile md:pr-margin-desktop">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.slug}`}
              className="iridescent-card bouncy-hover group flex min-w-[280px] w-[280px] cursor-pointer flex-col gap-4 rounded-lg p-4"
            >
              <div className="relative w-full overflow-hidden rounded-md bg-surface aspect-square">
                {product.is_sold_out && (
                  <div className="absolute left-2 top-2 z-10 rounded-full bg-on-surface px-2 py-1 text-[10px] text-label-caps text-surface">
                    SOLD OUT
                  </div>
                )}
                <img
                  className={`h-full w-full object-cover ${
                    product.is_sold_out ? "grayscale opacity-70" : ""
                  }`}
                  src={product.image_url}
                  alt={product.name}
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 mix-blend-overlay transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-label-caps text-on-surface">{product.name}</h3>
                  <p className="text-[14px] text-body-md text-on-surface-variant">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <button
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                    product.is_sold_out
                      ? "cursor-not-allowed bg-surface-variant text-on-surface/50"
                      : "bg-surface-variant text-on-surface group-hover:bg-primary group-hover:text-on-primary"
                  }`}
                  disabled={product.is_sold_out}
                >
                  <span className="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── UGC Grid — Caught on Camera ── */}
      <section className="bg-surface px-margin-mobile py-stack-lg md:px-margin-desktop">
        <div className="mb-stack-lg text-center">
          <h2 className="text-headline-lg-mobile text-on-surface md:text-headline-lg">
            CAUGHT ON CAMERA
          </h2>
          <p className="text-body-md mt-2 text-on-surface-variant">
            Tag us to be featured #CottonBombs
          </p>
        </div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-gutter md:auto-rows-[300px] md:grid-cols-4">
          {/* Large feature */}
          <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={UGC_IMAGES[0]}
              alt="Customer with Cotton Bombs drink"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="material-symbols-outlined text-[48px] text-white">
                play_arrow
              </span>
            </div>
          </div>

          {/* Small */}
          <div className="group relative col-span-1 row-span-1 overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={UGC_IMAGES[1]}
              alt="Cotton Bombs flat lay"
            />
          </div>

          {/* Tall */}
          <div className="group relative col-span-1 row-span-2 overflow-hidden rounded-xl">
            <img
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={UGC_IMAGES[2]}
              alt="Dropping a cotton bomb into champagne"
            />
          </div>

          {/* Quote Card */}
          <div className="col-span-1 row-span-1 flex items-center justify-center overflow-hidden rounded-xl bg-primary-container p-4 text-center">
            <h3 className="text-headline-lg-mobile italic text-on-primary-container">
              "LITERALLY<br />MAGIC"
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
