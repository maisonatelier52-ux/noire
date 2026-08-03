"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const categories = [
  "Fashion",
  "Beauty",
  "Wedding",
  "Lifestyle",
  "Culture",
  "Celebrity",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative overflow-hidden border-b border-[#F1D5D9] bg-gradient-to-r from-[#FFF6F6] via-[#F8E7EA] to-[#F5DCE1]">
      <div className="absolute top-0 left-0 z-[5] h-px w-full bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-[#F2A6B3]/25 blur-[120px]" />
        <div className="absolute left-[20%] top-[-80px] h-[220px] w-[220px] rounded-full bg-white/40 blur-[100px]" />
      </div>

      {/* Decorative Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute right-0 top-0 h-full w-full" viewBox="0 0 1600 120" preserveAspectRatio="none">
          <path d="M700 15 C900 70, 1100 10, 1600 40" fill="none" stroke="#EBC4CB" strokeWidth="1.5" />
          <path d="M750 35 C950 85, 1200 20, 1600 55" fill="none" stroke="#DFA7B3" strokeWidth="1.5" opacity="0.35" />
          <path d="M850 10 C1050 90, 1300 20, 1600 80" fill="none" stroke="#EBC4CB" strokeWidth="1" opacity="0.6" />
          <path d="M1000 0 C1200 60, 1400 10, 1600 45" fill="none" stroke="#DFA7B3" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-5 lg:px-10">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <h1
            className="text-[38px] leading-none tracking-[0.15em] text-[#1F1A17]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
          >
            NOIRÉ
          </h1>
          <p
            className="mt-1 text-[10px] uppercase tracking-[0.35em] text-[#4A4644]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Fashion Journal
          </p>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {categories.map((item) => {
            const href = `/${item.toLowerCase()}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item}
                href={href}
                className={`group relative pb-2 text-[13px] font-medium uppercase tracking-[0.08em] transition-all duration-300 ${
                  isActive ? "text-[#E96A84]" : "text-[#1F1A17] hover:text-[#D85C77]"
                }`}
              >
                {item}
                <span
                  className={`absolute left-0 bottom-0 h-[1px] rounded-full bg-gradient-to-r from-[#E96A84] to-[#F2A6B3] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="flex h-10 w-10 items-center justify-center rounded-full transition bg-white/40 backdrop-blur-sm border border-white/30 hover:bg-white/70">
            <FiSearch size={22} className="text-[#1F1A17]" />
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#E96A84] to-[#F2A6B3] shadow-[0_8px_30px_rgba(233,106,132,0.25)] transition hover:scale-105"
          >
            <HiOutlineMenuAlt3 size={24} className="text-white" />
          </button>
        </div>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed right-0 top-0 z-50 h-screen w-[340px] bg-[#FFF7F7] shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-[#F1D5D9] px-6 py-6">
          <h2
            className="text-[30px] tracking-[0.12em] text-[#1F1A17]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            NOIRÉ
          </h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F1D5D9]"
          >
            <RxCross2 size={20} />
          </button>
        </div>

        {/* MENU */}
        <div className="p-6">
          <nav className="space-y-5">
            {categories.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`block border-b border-[#F1D5D9] pb-4 text-[14px] font-semibold uppercase tracking-[0.08em] transition hover:text-[#E96A84] ${
                  pathname === `/${item.toLowerCase()}` ? "text-[#E96A84]" : "text-[#1F1A17]"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="mt-10">
            <h3
              className="mb-4 text-[14px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Information
            </h3>
            <div className="space-y-4">
              <Link href="#" className="block text-[#4A4644]">About Us</Link>
              <Link href="#" className="block text-[#4A4644]">Contact</Link>
              <Link href="#" className="block text-[#4A4644]">Privacy Policy</Link>
              <Link href="#" className="block text-[#4A4644]">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}