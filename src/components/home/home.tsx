import React, { useState } from "react";
import {
  CallToAction,
  MainHeadline,
  PillTag,
  QuickMetrics,
  SubText,
} from "./hero/Hero";

export const HeroSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<"tee" | "hoodie">(
    "tee",
  );

  // Products available in this section
  const products = [
    {
      id: "tee" as const,
      name: "Essential Cotton Tee",
      price: "$22.00+",
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: "hoodie" as const,
      name: "Signature Fleece Hoodie",
      price: "$45.00+",
      image:
        "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const currentProduct =
    products.find((p) => p.id === selectedProduct) || products[0];

  const pillNameTxt = "Full-Color DTG & Screen Printing";
  const subTextTxt: string =
    "High-resolution logo printing on premium cotton and fleece. Zerominimum orders, ultra-fast 48-hour production, and museum-qualitycolor precision for your brand or event.";
  const mainHeadLineTxtx = {
    logoname: "Damawi Vestiti",
    descript1: "Custom Designs",
    descript2: "Professional Grade",
    descript3: "Prints",
  };

  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-28 lg:pt-24 lg:pb-36 border-b border-zinc-200">
      {/* Background Graphic Element */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Branding Statement & CTA */}
          <div className="flex flex-col items-start lg:col-span-7 text-center lg:text-left">
            {/* Pill Tag */}
            <PillTag pillName={pillNameTxt} />
            {/* Main Headline */}
            <MainHeadline
              logoName={mainHeadLineTxtx.logoname}
              descript1={mainHeadLineTxtx.descript1}
              descript2={mainHeadLineTxtx.descript2}
              descript3={mainHeadLineTxtx.descript3}
            />
            {/* Subtext */}
            <SubText text={subTextTxt} />
            {/* Call to Actions */}
            <CallToAction />
            {/* Quick Metrics / Guarantees */}
            <QuickMetrics />
          </div>

          {/* Right Column: Interactive Print Showcase */}
          {/* Add pb-12 on mobile to account for the quality badge, and pb-10 on desktop. */}
          <div className="relative flex justify-center lg:col-span-5 pb-12 sm:pb-10">
            <div className="relative w-full max-w-md">
              {/* Product Card Container */}
              <div className="relative aspect-[3.5/4] w-full overflow-hidden rounded-3xl bg-zinc-100 border border-zinc-200/90 shadow-xl p-6 flex flex-col justify-between">
                {/* Header Tag inside card */}
                <div className="flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-zinc-500 pb-3 border-b border-zinc-200/60">
                  <span>Product Overview</span>
                  <span className="text-zinc-900 font-bold">
                    {currentProduct.price}
                  </span>
                </div>

                {/* Main Product/Garment Image */}
                <div className="relative flex-1 my-3 rounded-xl bg-white border border-zinc-200/80 p-4 flex flex-col items-center justify-center overflow-hidden">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-contain pointer-events-none"
                  />

                  {/* Printable Area Marker */}
                  <div className="absolute top-[18%] w-[52%] h-[46%] border-2 border-dashed border-indigo-400/80 rounded-md flex flex-col items-center justify-center p-3 text-center bg-white/40 backdrop-blur-sm shadow-inner">
                    <svg
                      className="h-8 w-8 text-indigo-500/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-indigo-700/90 leading-tight">
                      Print Area <br />
                      12" × 16"
                    </p>
                  </div>
                </div>

                {/* Garment Selector */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                      Garment Style
                    </span>
                    <span className="text-xs font-bold text-zinc-950">
                      {currentProduct.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {products.map((prod) => (
                      <button
                        key={prod.id}
                        type="button"
                        onClick={() => setSelectedProduct(prod.id)}
                        className={`text-left px-3 py-2 border rounded-xl transition-all ${
                          selectedProduct === prod.id
                            ? "border-zinc-950 bg-white shadow-sm ring-1 ring-zinc-950"
                            : "border-zinc-200 hover:border-zinc-300 bg-zinc-50 hover:bg-white"
                        }`}
                      >
                        <p className="text-[11px] font-bold text-zinc-950 leading-tight truncate">
                          {prod.name}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quality Assured Seal Badge */}
              {/* Added 'sm:right-5 sm:-bottom-6' and raised the z-index to avoid overlaps on desktop, and set negative pointer events so it doesn't block clicks. */}
              {/* <div className="absolute -bottom-8 right-3 sm:right-5 sm:-bottom-6 flex items-center gap-3 rounded-2xl bg-zinc-950 px-4 py-3 shadow-2xl text-white border border-zinc-800 pointer-events-none z-20">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-zinc-950 font-serif font-black text-sm">
                  DV
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider leading-none">
                    Quality Assured
                  </p>
                  <p className="text-[10px] text-zinc-400 mt-1 leading-none">
                    Tested up to 50 washes
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
