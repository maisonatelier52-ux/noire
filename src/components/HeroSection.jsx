"use client";

import heroData from "@/data/hero.json";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[#f4dada]">
      <div className="mx-auto max-w-[1440px] px-5 py-11 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-[650px]">

            {/* FEATURED STORY */}
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#E96A84] md:text-[13px]"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              {heroData.featuredLabel}
            </span>

            {/* MOBILE IMAGE */}
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[18px] border border-[#F1D5D9] bg-[#F8E1E1] lg:hidden">
              <Image
                src="/images/fashion-hero.jpg"
                alt="Paris Couture Week"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <h1
              className="mt-6 text-[38px] leading-[1.08] text-[#1F1A17] sm:text-[48px] md:text-[56px] lg:text-[64px]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 500,
              }}
            >
              {heroData.title}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="mt-5 max-w-[560px] text-[16px] leading-[1.8] text-[#4A4644] md:text-[18px]"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              {heroData.description}
            </p>

            {/* BUTTON */}
            <button className="mt-8 flex items-center gap-3 rounded-md bg-[#E96A84] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#D85C77] md:px-8">
              {heroData.buttonText}
              <FiArrowRight size={18} />
            </button>

            {/* PAGINATION */}
            <div className="mt-10 flex flex-wrap items-center gap-8 md:mt-14">
              {heroData.slides.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <span
                    className={`text-[15px] font-medium ${
                      index === 0
                        ? "text-[#E96A84]"
                        : "text-[#847D79]"
                    }`}
                    style={{
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item}
                  </span>

                  {index === 0 && (
                    <div className="h-[2px] w-12 bg-[#E96A84]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* DESKTOP IMAGE */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-[#F1D5D9] bg-[#F8E1E1]">

              <Image
                src="/images/fashion-hero.jpg"
                alt="Paris Couture Week"
                fill
                priority
                className="object-cover"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}