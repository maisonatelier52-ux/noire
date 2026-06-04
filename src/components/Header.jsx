"use client";

import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const categories = [
  "Fashion",
  "Beauty",
  "Wedding",
  "Lifestyle",
  "Runway",
  "Celebrity",
];

export default function Header() {
  return (
    <header className="relative overflow-hidden border-b border-[#F1D5D9] bg-[#facfcf]">

      {/* Decorative Waves */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <svg
    className="absolute right-0 top-0 h-full w-full"
    viewBox="0 0 1600 120"
    preserveAspectRatio="none"
  >
    <path
      d="M700 15 C900 70, 1100 10, 1600 40"
      fill="none"
      stroke="#F6DADF"
      strokeWidth="1.5"
    />

    <path
      d="M750 35 C950 85, 1200 20, 1600 55"
      fill="none"
      stroke="#F2B9C3"
      strokeWidth="1.5"
      opacity="0.8"
    />

    <path
      d="M850 10 C1050 90, 1300 20, 1600 80"
      fill="none"
      stroke="#F6DADF"
      strokeWidth="1"
      opacity="0.6"
    />

    <path
      d="M1000 0 C1200 60, 1400 10, 1600 45"
      fill="none"
      stroke="#F2B9C3"
      strokeWidth="1"
      opacity="0.5"
    />
  </svg>
</div>

      <div className="relative z-10 mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 lg:px-10">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <div>
            <h1
              className="text-[38px] leading-none tracking-[0.15em] text-[#1F1A17]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontWeight: 500,
              }}
            >
              NOIRÉ
            </h1>

            <p
              className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#4A4644]"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              Fashion Journal
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {categories.map((item, index) => (
            <Link
              key={item}
              href="#"
              className={`group relative pb-2 text-[14px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${
                index === 0
                  ? "text-[#E96A84]"
                  : "text-[#1F1A17] hover:text-[#D85C77]"
              }`}
            >
              {item}

              <span
                className={`absolute left-0 bottom-0 h-[2px] bg-[#E96A84] transition-all duration-300 ${
                  index === 0
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[#FCEEEE]">
            <FiSearch size={22} className="text-[#1F1A17]" />
          </button>

          {/* Menu */}
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F2B9C3] transition hover:bg-[#E96A84]">
            <HiOutlineMenuAlt3 size={24} className="text-[#1F1A17]" />
          </button>

        </div>
      </div>
    </header>
  );
}

