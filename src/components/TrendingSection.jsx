"use client";

import trendingData from "@/data/trending.json";
import Image from "next/image";
export default function TrendingSection() {
  return (
    <section className="bg-[#f4dada] py-10">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">

        {/* HEADING */}
        <div className="mb-10 flex items-center gap-4">
          <h2
            className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]"
            style={{
              fontFamily: "var(--font-inter)",
            }}
          >
            Trending Now
          </h2>

          <div className="h-[1px] w-12 bg-[#E96A84]" />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr_1fr_1fr_280px]">

          {/* ARTICLES */}
          {trendingData.map((item) => (
            <article key={item.id}>

              {/* IMAGE PLACEHOLDER */}
                <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px] border border-[#F1D5D9] bg-[#F8E1E1]">
<Image
  src={item.image}
  alt={item.title}
  width={500}
  height={400}
  className="h-full w-full object-cover"
/>
              </div>

              <div className="mt-4">

                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
                  style={{
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {item.category}
                </span>

                <h3
                  className="mt-2 text-[30px] leading-[1.25] text-[#1F1A17]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 text-[12px] uppercase tracking-[0.08em] text-[#847D79]"
                  style={{
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {item.date}
                </p>
              </div>
            </article>
          ))}

          {/* NEWSLETTER CARD */}
<div
  className="overflow-hidden rounded-[18px] border border-[#F1D5D9] p-8 shadow-[0_20px_60px_rgba(233,106,132,0.18)]"
  style={{
    background:
      "linear-gradient(135deg, #fff5f6 0%, #f6d4db 40%, #f2a6b3 100%)",
  }}
>
            <div className="flex h-full flex-col justify-between">

              <div>

                <h3
                  className="text-[42px] leading-[1.1] text-[#C95773]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 500,
                  }}
                >
                  Stay Inspired
                </h3>

                <p
                  className="mt-5 text-[16px] leading-[1.8] text-[#4A4644]"
                  style={{
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Get the latest fashion news,
                  exclusive editorials and more
                  straight to your inbox.
                </p>
              </div>

              <div className="mt-8">

                <input
                  type="email"
                  placeholder="Enter your email"
className="mb-3 h-[52px] w-full rounded-lg border border-[#F1D5D9] bg-white px-4 outline-none" />

                <button
className="h-[52px] w-full rounded-lg bg-[#E96A84] text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#D85C77]">
                  Subscribe
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}