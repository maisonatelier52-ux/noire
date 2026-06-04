"use client";

import Image from "next/image";
import styleEditData from "@/data/styleEdit.json";

export default function StyleEditSection() {
  return (
    <section className="bg-[#f4dada] py-14">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">

        {/* Heading */}
        <div className="mb-8 flex items-center gap-4">
          <h2
            className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]"
            style={{
              fontFamily: "var(--font-inter)",
            }}
          >
            Style Edit
          </h2>

          <div className="h-[1px] w-12 bg-[#E96A84]" />
        </div>

        {/* Cards */}
        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

          {styleEditData.map((item) => (
            <article key={item.id}>

              {/* IMAGE */}
              <div className="relative aspect-[4/4] overflow-hidden rounded-[10px] border border-[#F1D5D9]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* CONTENT */}
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
                  className="mt-2 text-[24px] leading-[1.25] text-[#1F1A17]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-3 text-[11px] uppercase tracking-[0.08em] text-[#847D79]"
                  style={{
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {item.date}
                </p>

              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}