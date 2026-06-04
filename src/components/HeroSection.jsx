"use client";

import { useEffect, useState } from "react";
import editorsPick from "@/data/editorsPick.json";
import latestPosts from "@/data/latestPosts.json";
import trendingData from "@/data/trending.json";
import styleEditData from "@/data/styleEdit.json";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function HeroSection() {

  const parseDate = (dateStr) => {
    const months = {
      JAN: 0,
      FEB: 1,
      MAR: 2,
      APR: 3,
      MAY: 4,
      JUN: 5,
      JUL: 6,
      AUG: 7,
      SEP: 8,
      OCT: 9,
      NOV: 10,
      DEC: 11,
    };

    const [month, day, year] = dateStr.replace(",", "").split(" ");

    return new Date(
      Number(year),
      months[month.toUpperCase()],
      Number(day)
    );
  };

  const articles = [
    {
      title: editorsPick.title,
      description: editorsPick.description,
      category: editorsPick.category,
      date: editorsPick.featuredDate,
      image: editorsPick.image,
      buttonText: editorsPick.buttonText,
    },

    {
      title: editorsPick.extraTitle,
      description: editorsPick.extraDescription,
      category: editorsPick.extraCategory,
      date: editorsPick.extraDate,
      image: editorsPick.extraImage,
      buttonText: "READ MORE",
    },

    ...latestPosts,
    ...trendingData,
    ...styleEditData,
  ];

const latestArticles = [...articles]
  .sort(
    (a, b) =>
      parseDate(b.date).getTime() -
      parseDate(a.date).getTime()
  )
  .slice(0, 4);

  const [activeSlide, setActiveSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

  const currentArticle = latestArticles[activeSlide];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setActiveSlide((prev) =>
          prev === latestArticles.length - 1 ? 0 : prev + 1
        );
        setAnimate(true);
      }, 200);
    }, 6000);

    return () => clearInterval(interval);
  }, [latestArticles.length]);

  return (
    <section className="bg-[#f4dada]">
      <div className="mx-auto max-w-[1440px] px-5 pt-4 pb-11 lg:px-10 lg:py-11">

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <div
            className={`max-w-[650px] transition-all duration-500 ${
              animate
                ? "translate-y-0 opacity-100"
                : "translate-y-3 opacity-0"
            }`}
          >

            {/* LABEL */}
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#E96A84] md:text-[13px]"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              LATEST
            </span>

            {/* MOBILE IMAGE */}
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-[18px] border border-[#F1D5D9] bg-[#F8E1E1] lg:hidden">

<Image
  key={currentArticle.image}
  src={currentArticle.image}
  alt={currentArticle.title}
  fill
  priority
  className={`
    object-cover
    transition-all
    duration-700
    ease-out
    ${animate ? "opacity-100 scale-100" : "opacity-0 scale-105"}
  `}
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
              {currentArticle.title}
            </h1>

            {/* DESCRIPTION */}
            <p
              className="mt-5 max-w-[560px] text-[16px] leading-[1.8] text-[#4A4644] md:text-[18px]"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              {currentArticle.description ||
                "Discover the latest developments from the world of fashion, beauty, lifestyle and luxury."}
            </p>

            {/* BUTTON */}
            <button className="mt-8 flex items-center gap-3 rounded-md bg-[#E96A84] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#D85C77] md:px-8">

              {currentArticle.buttonText || "READ MORE"}

              <FiArrowRight size={18} />

            </button>

            {/* PAGINATION */}
            <div className="mt-10 flex flex-wrap items-center gap-8 md:mt-14">

              {latestArticles.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className="flex cursor-pointer items-center gap-4"
                >

                  <span
                    className={`text-[15px] font-medium transition-all ${
                      index === activeSlide
                        ? "text-[#E96A84]"
                        : "text-[#847D79]"
                    }`}
                    style={{
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {index === activeSlide && (
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
      key={currentArticle.image}
      src={currentArticle.image}
      alt={currentArticle.title}
      fill
      priority
      className={`
        object-cover
        transition-all
        duration-700
        ease-out
        ${animate ? "opacity-100 scale-100" : "opacity-0 scale-105"}
      `}
    />

  </div>

</div>

        </div>

      </div>
    </section>
  );
}