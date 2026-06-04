"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#F1D5D9] bg-[#facfcf]">

      {/* BACKGROUND WAVES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute right-0 top-0 h-full w-full"
          viewBox="0 0 1600 300"
          preserveAspectRatio="none"
        >
          <path
            d="M900 20 C1100 80, 1300 10, 1600 70"
            fill="none"
            stroke="#F6DADF"
            strokeWidth="2"
          />

          <path
            d="M850 60 C1100 140, 1350 30, 1600 120"
            fill="none"
            stroke="#F2B9C3"
            strokeWidth="1.5"
            opacity="0.7"
          />

          <path
            d="M950 0 C1200 100, 1450 20, 1600 90"
            fill="none"
            stroke="#F6DADF"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-16 pb-6 lg:px-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>

            <Link href="/">
              <div>
                <h2
                  className="text-[42px] leading-none tracking-[0.15em] text-[#1F1A17]"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontWeight: 500,
                  }}
                >
                  NOIRÉ
                </h2>

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

            <p
              className="mt-8 max-w-[260px] text-[16px] leading-[1.9] text-[#4A4644]"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              Your destination for everything fashion,
              beauty, wedding and lifestyle.
            </p>

            {/* SOCIALS */}
            <div className="mt-8 flex items-center gap-6">

              <Link
                href="/"
                className="text-[#1F1A17] transition hover:text-[#E96A84]"
              >
                <FaInstagram size={24} />
              </Link>

              <Link
                href="/"
                className="text-[#1F1A17] transition hover:text-[#E96A84]"
              >
                <FaFacebookF size={22} />
              </Link>

              <Link
                href="/"
                className="text-[#1F1A17] transition hover:text-[#E96A84]"
              >
                <FaPinterestP size={23} />
              </Link>

              <Link
                href="/"
                className="text-[#1F1A17] transition hover:text-[#E96A84]"
              >
                <RxCross2 size={25} />
              </Link>

              <Link
                href="/"
                className="text-[#1F1A17] transition hover:text-[#E96A84]"
              >
                <FaYoutube size={24} />
              </Link>

            </div>
          </div>

          {/* EXPLORE */}
          <div>

            <h3
              className="text-[15px] font-semibold uppercase tracking-[0.08em] text-[#1F1A17]"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              Explore
            </h3>

            <ul className="mt-6 space-y-3">
              {[
                "Fashion",
                "Beauty",
                "Wedding",
                "Lifestyle",
                "Runway",
                "Celebrity",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-[16px] text-[#4A4644] transition hover:text-[#E96A84]"
                    style={{
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* INFORMATION */}
          <div>

            <h3
              className="text-[15px] font-semibold uppercase tracking-[0.08em] text-[#1F1A17]"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              Information
            </h3>

            <ul className="mt-6 space-y-3">
              {[
                "About Us",
                "Contact",
                "Advertise",
                "Careers",
                "Privacy Policy",
                "Terms of Use",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/"
                    className="text-[16px] text-[#4A4644] transition hover:text-[#E96A84]"
                    style={{
                      fontFamily: "var(--font-inter)",
                    }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>

            <h3
              className="text-[15px] font-semibold uppercase tracking-[0.08em] text-[#1F1A17]"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              Stay In The Know
            </h3>

            <p
              className="mt-6 max-w-[360px] text-[16px] leading-[1.9] text-[#4A4644]"
              style={{
                fontFamily: "var(--font-inter)",
              }}
            >
              Subscribe to get the latest fashion news,
              exclusive editorials and more.
            </p>

            {/* INPUT */}
            <div className="mt-8 flex overflow-hidden rounded-[10px] border border-[#F1D5D9] bg-white">

<input
  type="email"
  placeholder="Enter your email"
  className="h-[58px] flex-1 bg-transparent px-5 text-[15px] text-[#1F1A17] outline-none placeholder:text-[#847D79]"
/>

<button className="flex w-[72px] items-center justify-center bg-[#E96A84] transition hover:bg-[#D85C77]">
                <FiArrowRight
                  size={22}
                  className="text-white"
                />
              </button>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-[#F1D5D9] pt-7 text-center">

          <p
            className="text-[14px] text-[#847D79]"
            style={{
              fontFamily: "var(--font-inter)",
            }}
          >
            © 2026 Noiré Fashion Journal. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}