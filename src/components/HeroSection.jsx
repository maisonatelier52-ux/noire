"use client";

import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

import beautyData from "@/data/beauty.json";
import fashionData from "@/data/fashion.json";
import lifestyleData from "@/data/lifestyle.json";
import celebrityData from "@/data/celebrity.json";
import cultureData from "@/data/culture.json";
import weddingData from "@/data/wedding.json";

export default function HeroSection() {
  const parseDate = (dateStr) => {
    if (!dateStr) return new Date(0);
    try {
      const months = {
        JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
        JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
      };
      const [month, day, year] = dateStr.replace(",", "").split(" ");
      return new Date(Number(year), months[month.toUpperCase()], Number(day));
    } catch {
      return new Date(0);
    }
  };

  const allArticles = [
    // Beauty top feature
    ...(beautyData.title && beautyData.featuredDate ? [{
      title: beautyData.title,
      description: beautyData.description,
      category: beautyData.category,
      date: beautyData.featuredDate,
      image: beautyData.image,
      buttonText: beautyData.buttonText,
    }] : []),
    // Beauty extra feature
    ...(beautyData.extraTitle && beautyData.extraDate ? [{
      title: beautyData.extraTitle,
      description: beautyData.extraDescription,
      category: beautyData.extraCategory,
      date: beautyData.extraDate,
      image: beautyData.extraImage,
      buttonText: "READ MORE",
    }] : []),
    // Beauty articles
    ...(beautyData.articles || []).map((item) => ({
      title: item.title,
      description: undefined,
      category: item.category,
      date: item.date,
      image: item.image,
      buttonText: undefined,
    })),
    // Fashion articles
    ...(fashionData.articles || []).map((item) => ({
      title: item.title,
      description: undefined,
      category: item.category,
      date: item.date,
      image: item.image,
      buttonText: undefined,
    })),
    // Lifestyle articles
    ...(lifestyleData.articles || []).map((item) => ({
      title: item.title,
      description: undefined,
      category: item.category,
      date: item.date,
      image: item.image,
      buttonText: undefined,
    })),
    // Celebrity articles
    ...(celebrityData.articles || []).map((item) => ({
      title: item.title,
      description: undefined,
      category: item.category,
      date: item.date,
      image: item.image,
      buttonText: undefined,
    })),
    // Runway top-level featured
    ...(cultureData.title && cultureData.featuredDate ? [{
      title: cultureData.title,
      description: cultureData.description,
      category: cultureData.category,
      date: cultureData.featuredDate,
      image: cultureData.image,
      buttonText: "READ MORE",
    }] : []),
    // Runway articles
    ...(cultureData.articles || []).map((item) => ({
      title: item.title,
      description: undefined,
      category: item.category,
      date: item.date,
      image: item.image,
      buttonText: undefined,
    })),
    // Wedding articles
    ...(weddingData.articles || []).map((item) => ({
      title: item.title,
      description: undefined,
      category: item.category,
      date: item.date,
      image: item.image,
      buttonText: undefined,
    })),
  ].filter((a) => a.title && a.date && a.image);

  const latestArticles = [...allArticles]
    .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
    .slice(0, 4);

  const [activeSlide, setActiveSlide] = useState(0);
  const [animate, setAnimate] = useState(true);

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

  if (latestArticles.length === 0) return null;

  const currentArticle = latestArticles[activeSlide];

  return (
    <section className="bg-[#f4dada]">
      <div className="mx-auto max-w-[1440px] px-5 pt-4 pb-11 lg:px-10 lg:py-11">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* LEFT CONTENT */}
          <div
            className={`max-w-[650px] transition-all duration-500 ${
              animate ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span
              className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#E96A84] md:text-[13px]"
              style={{ fontFamily: "var(--font-inter)" }}
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
                className={`object-cover transition-all duration-700 ease-out ${
                  animate ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            </div>

            <h1
              className="mt-6 text-[38px] leading-[1.08] text-[#1F1A17] sm:text-[48px] md:text-[56px] lg:text-[64px]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
            >
              {currentArticle.title}
            </h1>

            <p
              className="mt-5 max-w-[560px] text-[16px] leading-[1.8] text-[#4A4644] md:text-[18px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {currentArticle.description ||
                "Discover the latest developments from the world of fashion, beauty, lifestyle and luxury."}
            </p>

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
                      index === activeSlide ? "text-[#E96A84]" : "text-[#847D79]"
                    }`}
                    style={{ fontFamily: "var(--font-inter)" }}
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
                className={`object-cover transition-all duration-700 ease-out ${
                  animate ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}