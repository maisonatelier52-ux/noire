// components/WeddingColumn.jsx
"use client";

import Image from "next/image";
import weddingData from "@/data/wedding.json";

export default function WeddingColumn() {
  return (
    <div>
      <div className="mb-4 sm:mb-6 flex items-center justify-between">
        <h2 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]" style={{ fontFamily: "var(--font-inter)" }}>
          WEDDING
        </h2>
        <div className="h-[1px] w-12 bg-[#E96A84]" />
      </div>
      <div className="space-y-3 sm:space-y-5">
{(weddingData.articles || []).map((post) => (

          <article key={post.id} className="flex gap-4">
            <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-[12px]">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]" style={{ fontFamily: "var(--font-inter)" }}>
                {post.category}
              </span>
              <h4 className="mt-1 text-[22px] leading-[1.3] text-[#1F1A17]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>
                {post.title}
              </h4>
              <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-[#847D79]" style={{ fontFamily: "var(--font-inter)" }}>
                {post.date}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}