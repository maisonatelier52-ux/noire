"use client";

import Image from "next/image";

export default function StyleEditSection({ title = "{title}", data = [] }) {
  return (
    <section className="bg-[#f4dada] py-8 sm:py-10 lg:py-14">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">

        {/* Heading */}
        <div className="mb-6 sm:mb-8 flex items-center gap-4">
          <h2
            className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {title}
          </h2>
          <div className="h-[1px] w-12 bg-[#E96A84]" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <article key={item.id} className="flex flex-col">

              {/* IMAGE */}
              <div className="relative aspect-[4/4] w-full overflow-hidden rounded-[10px] border border-[#F1D5D9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="mt-3 sm:mt-4">
                <span
                  className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {item.category}
                </span>

                <h3
                  className="mt-1 text-[22px] sm:text-[24px] leading-[1.25] text-[#1F1A17]"
                  style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
                >
                  {item.title}
                </h3>

                <p
                  className="mt-2 text-[11px] uppercase tracking-[0.08em] text-[#847D79]"
                  style={{ fontFamily: "var(--font-inter)" }}
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