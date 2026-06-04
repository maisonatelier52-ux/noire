"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import editorsPick from "@/data/editorsPick.json";
import latestPosts from "@/data/latestPosts.json";

export default function EditorsSection() {
  return (
    <section className="bg-[#f4dada] py-1">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">


<div className="grid gap-6 md:gap-8 xl:grid-cols-[280px_1fr_280px_320px]">

{/* LEFT FEATURE AREA */}
<div className="xl:col-span-2">

  {/* TOP FEATURE CARD */}
  <div className="grid items-start gap-6 lg:grid-cols-[220px_1fr]">

    {/* IMAGE */}
    <div className="relative aspect-[4/4] overflow-hidden rounded-[20px] border border-[#F1D5D9]">

      <Image
        src={editorsPick.image}
        alt={editorsPick.title}
        fill
        className="object-cover"
      />


    </div>

    {/* CONTENT */}
    <div>

      <div className="mb-8 flex items-center gap-4">
        <h2
          className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Editor&apos;s Picks
        </h2>

        <div className="h-[1px] w-12 bg-[#E96A84]" />
      </div>

      <span
        className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {editorsPick.category}
      </span>

      <h3
        className="mt-4 text-[42px] leading-[1.08] text-[#1F1A17]"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontWeight: 500,
        }}
      >
        {editorsPick.title}
      </h3>

      <p
        className="mt-4 max-w-[520px] text-[18px] leading-[1.8] text-[#4A4644]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {editorsPick.description}
      </p>
      <p
        className="mt-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {editorsPick.featuredDate}
      </p>
      <button className="mt-8 flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#E96A84] hover:text-[#D85C77]">
        {editorsPick.buttonText}
        <FiArrowRight size={18} />
      </button>

    </div>
  </div>

  {/* SECOND FEATURE CARD */}
  <div className="mt-1 border-t border-[#F1D5D9] pt-8">

    <div className="grid items-start gap-6 lg:grid-cols-[220px_1fr]">

      {/* IMAGE */}
      <div className="relative aspect-[4/4] overflow-hidden rounded-[20px] border border-[#F1D5D9]">

        <Image
          src={editorsPick.extraImage}
          alt={editorsPick.extraTitle}
          fill
          className="object-cover"
        />

      </div>

      {/* CONTENT */}
      <div>

        <span
          className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {editorsPick.extraCategory}
        </span>

        <h4
          className="mt-4 text-[42px] leading-[1.08] text-[#1F1A17]"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontWeight: 500,
          }}
        >
          {editorsPick.extraTitle}
        </h4>

        <p
          className="mt-4 max-w-[520px] text-[18px] leading-[1.8] text-[#4A4644]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {editorsPick.extraDescription}
        </p>
        <p
          className="mt-4 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {editorsPick.extraDate}
        </p>
        <button className="mt-8 flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#E96A84] hover:text-[#D85C77]">
          READ MORE
          <FiArrowRight size={18} />
        </button>

      </div>

    </div>
  </div>

</div>
  {/* COLUMN 3 — MINI POSTS */}
  <div className="pt-0 space-y-4 xl:pt-[62px] xl:space-y-5">

    {latestPosts.slice(0, 3).map((post) => (
      <article
        key={post.id}
        className="flex gap-3 border-b border-[#F1D5D9] pb-4 md:gap-4 md:pb-5"
      >

        <div className="relative h-[90px] w-[110px] shrink-0 overflow-hidden rounded-[12px]">

          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />

        </div>

        <div>

          <span
            className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {post.category}
          </span>

          <h4
            className="mt-1 text-[24px] leading-[1.3] text-[#1F1A17]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontWeight: 500,
            }}
          >
            {post.title}
          </h4>

          <p
            className="mt-2 text-[11px] uppercase tracking-[0.08em] text-[#847D79]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {post.date}
          </p>

        </div>
      </article>
    ))}

  </div>

  {/* COLUMN 4 — THE LATEST */}
  <div>

    <div className="mb-8 flex items-center justify-between">
      <h2
        className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        The Latest
      </h2>

      <div className="h-[1px] w-12 bg-[#E96A84]" />
    </div>

    <div className="space-y-5">

      {latestPosts.slice(3).map((post) => (
        <article
          key={post.id}
          className="flex gap-4"
        >

          <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-[12px]">

            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />

          </div>

          <div>

            <span
              className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {post.category}
            </span>

            <h4
              className="mt-1 text-[22px] leading-[1.3] text-[#1F1A17]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 500,
              }}
            >
              {post.title}
            </h4>

            <p
              className="mt-2 text-[11px] uppercase tracking-[0.08em] text-[#847D79]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {post.date}
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