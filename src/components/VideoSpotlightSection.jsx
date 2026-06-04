"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import videoSpotlight from "@/data/videoSpotlight.json";

export default function VideoSpotlightSection() {
  return (
    <section className="bg-[#f4dada] py-2">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">

        <div className="grid gap-10 xl:grid-cols-[1.4fr_1fr]">

          {/* LEFT SIDE */}
          <div>

            <div className="mb-5 flex items-center gap-4">
              <h2
                className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Video Spotlight
              </h2>

              <div className="h-[1px] w-12 bg-[#E96A84]" />
            </div>

            <div className="grid gap-6 lg:grid-cols-[420px_1fr]">

              {/* IMAGE */}
<div className="relative aspect-[3/4] overflow-hidden rounded-[20px] border border-[#F1D5D9] shadow-[0_25px_70px_rgba(201,87,115,0.14)] ring-1 ring-white/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_rgba(201,87,115,0.18)]">

                <Image
                  src={videoSpotlight.featured.image}
                  alt={videoSpotlight.featured.title}
                  fill
                  className="object-cover"
                />



              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-center">

                <span
                  className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {videoSpotlight.featured.category}
                </span>
<p
  className="mt-2 text-[11px] uppercase tracking-[0.08em] text-[#847D79]"
  style={{ fontFamily: "var(--font-inter)" }}
>
  {videoSpotlight.featured.date}
</p>
                <h3
                  className="mt-4 text-[46px] leading-[1.1] text-[#1F1A17]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 500,
                  }}
                >
                  {videoSpotlight.featured.title}
                </h3>

                <p
                  className="mt-5 max-w-[420px] text-[17px] leading-[1.8] text-[#4A4644]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {videoSpotlight.featured.description}
                </p>

                <button className="mt-8 flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#E96A84]">
                  {videoSpotlight.featured.buttonText}
                  <FiArrowRight size={18} />
                </button>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="mb-5 flex items-center justify-between">
              <h2
                className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Latest Stories
              </h2>

              <div className="h-[1px] w-12 bg-[#E96A84]" />
            </div>

            <div className="space-y-5">

              {videoSpotlight.latest.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-4"
                >

                  <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-[12px] border border-[#F1D5D9]">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />

                  </div>

                  <div>

                    <span
                      className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.category}
                    </span>

                    <h4
                      className="mt-1 text-[22px] leading-[1.3] text-[#1F1A17]"
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 500,
                      }}
                    >
                      {item.title}
                    </h4>

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

        </div>

      </div>
    </section>
  );
}