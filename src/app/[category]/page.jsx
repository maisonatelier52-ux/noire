import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import beautyData from "@/data/beauty.json";
import celebrityData from "@/data/celebrity.json";
import fashionData from "@/data/fashion.json";
import lifestyleData from "@/data/lifestyle.json";
import cultureData from "@/data/culture.json";
import weddingData from "@/data/wedding.json";

// Import authors data (used for fallback, but mainly we use the slug from the article)
import authorsData from "@/data/authors.json";
  
const categoryDataMap = {
  beauty: beautyData,
  celebrity: celebrityData,
  fashion: fashionData,
  lifestyle: lifestyleData,
  culture: cultureData,
  wedding: weddingData,
};

// Unique graphic per category
const categoryGraphics = {
  fashion: {
    bg: "linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 40%, #EC407A 100%)",
    icon: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="white" fillOpacity="0.08" />
        <circle cx="100" cy="100" r="55" fill="white" fillOpacity="0.08" />
        
        {/* Elegant dress silhouette */}
        <path d="M80 75 L90 75 L100 60 L110 75 L120 75 L120 100 Q110 130 100 145 Q90 130 80 100 Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
        
        {/* Flowing scarf to the right */}
        <path d="M120 80 Q140 85 150 100 Q135 105 120 95" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2" strokeLinecap="round" />
        
        {/* Waist accent */}
        <line x1="85" y1="105" x2="115" y2="105" stroke="white" strokeWidth="2" strokeOpacity="0.6" strokeLinecap="round" />
        
        {/* Abstract fashion dots */}
        <circle cx="45" cy="55" r="3.5" fill="white" fillOpacity="0.5" />
        <circle cx="155" cy="65" r="3" fill="white" fillOpacity="0.4" />
        <circle cx="155" cy="145" r="4" fill="white" fillOpacity="0.3" />
        <circle cx="45" cy="150" r="2.5" fill="white" fillOpacity="0.4" />
      </svg>
    ),
  },

  beauty: {
    bg: "linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 40%, #AB47BC 100%)",
    icon: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="white" fillOpacity="0.08" />
        <circle cx="100" cy="100" r="55" fill="white" fillOpacity="0.08" />
        
        {/* Almond eye shape */}
        <path d="M75 100 Q100 80 125 100 Q100 115 75 100 Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
        
        {/* Iris & Pupil */}
        <circle cx="100" cy="100" r="10" fill="white" fillOpacity="0.4" />
        <circle cx="100" cy="100" r="5" fill="white" />
        
        {/* Winged eyeliner */}
        <path d="M125 100 L145 90 L142 97 Z" fill="white" fillOpacity="0.8" />
        
        {/* Subtle lashes */}
        <path d="M80 94 L73 85 M88 90 L83 80 M112 90 L117 80 M120 94 L127 85" stroke="white" strokeWidth="2" strokeLinecap="round" />
        
        {/* Sparkle */}
        <path d="M155 65 L157 71 L163 73 L157 75 L155 81 L153 75 L147 73 L153 71 Z" fill="white" fillOpacity="0.8" />
        <circle cx="45" cy="65" r="3" fill="white" fillOpacity="0.4" />
        <circle cx="55" cy="140" r="3" fill="white" fillOpacity="0.5" />
        <circle cx="152" cy="140" r="2.5" fill="white" fillOpacity="0.4" />
      </svg>
    ),
  },

  wedding: {
    bg: "linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 40%, #FFB74D 100%)",
    icon: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="white" fillOpacity="0.08" />
        <circle cx="100" cy="100" r="55" fill="white" fillOpacity="0.08" />
        {/* Interlocking rings */}
        <circle cx="85" cy="100" r="24" stroke="white" strokeWidth="3.5" fill="none" />
        <circle cx="115" cy="100" r="24" stroke="white" strokeWidth="3.5" fill="white" fillOpacity="0.1" />
        <path d="M100 60 L112 75 L100 90 L88 75Z" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.5" />
        <path d="M88 75 L100 90 L112 75" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="60" cy="70" r="4" fill="white" fillOpacity="0.4" />
        <circle cx="140" cy="130" r="3.5" fill="white" fillOpacity="0.5" />
        <circle cx="60" cy="140" r="2.5" fill="white" fillOpacity="0.3" />
        <circle cx="140" cy="70" r="3" fill="white" fillOpacity="0.4" />
      </svg>
    ),
  },

  lifestyle: {
    bg: "linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 40%, #66BB6A 100%)",
    icon: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="white" fillOpacity="0.08" />
        <circle cx="100" cy="100" r="55" fill="white" fillOpacity="0.08" />
        {/* Sun + leaf abstraction */}
        <circle cx="100" cy="80" r="18" fill="white" fillOpacity="0.25" />
        <path d="M100 130 Q70 115 75 90 Q85 70 100 70 Q115 70 125 90 Q130 115 100 130Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="2" />
        <path d="M100 130 L100 95" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M100 105 Q88 95 85 82" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M100 90 Q115 80 118 68" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="145" cy="70" r="3.5" fill="white" fillOpacity="0.5" />
        <circle cx="55" cy="135" r="3" fill="white" fillOpacity="0.4" />
        <circle cx="150" cy="140" r="2.5" fill="white" fillOpacity="0.35" />
        <circle cx="50" cy="65" r="2" fill="white" fillOpacity="0.4" />
      </svg>
    ),
  },

culture: {
  bg: "linear-gradient(135deg, #3D2E44 0%, #6B5A72 10%, #9A8A9E 100%)",
  icon: (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="80" fill="white" fillOpacity="0.06" />
      <circle cx="100" cy="100" r="55" fill="white" fillOpacity="0.06" />

      {/* Open Book - left & right pages */}
      <path d="M65 125 L95 135 L95 85 L65 75 Z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M95 135 L135 125 L135 75 L95 85 Z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />

      {/* Book spine / center crease */}
      <line x1="95" y1="135" x2="95" y2="85" stroke="white" strokeWidth="3" strokeLinecap="round" />

      {/* Abstract text lines (left page) */}
      <line x1="72" y1="95" x2="90" y2="101" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <line x1="72" y1="105" x2="90" y2="111" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <line x1="72" y1="115" x2="88" y2="120" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />

      {/* Abstract text lines (right page) */}
      <line x1="100" y1="101" x2="128" y2="95" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <line x1="100" y1="111" x2="128" y2="105" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
      <line x1="102" y1="120" x2="128" y2="115" stroke="white" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />

      {/* Radiant knowledge symbols */}
      <line x1="48" y1="60" x2="56" y2="60" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <line x1="52" y1="56" x2="52" y2="64" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
      <rect x="144" y="132" width="8" height="8" transform="rotate(45 148 136)" fill="white" fillOpacity="0.5" />

      <circle cx="45" cy="138" r="3.5" fill="white" fillOpacity="0.5" />
      <circle cx="155" cy="70" r="3" fill="white" fillOpacity="0.6" />
      <circle cx="155" cy="138" r="2" fill="white" fillOpacity="0.35" />
      <path d="M42 70 L44 76 L50 78 L44 80 L42 86 L40 80 L34 78 L40 76 Z" fill="white" fillOpacity="0.6" />
    </svg>
  ),
},

  celebrity: {
    bg: "linear-gradient(135deg, #FFF8E1 0%, #FFE082 40%, #FFB300 100%)",
    icon: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" fill="white" fillOpacity="0.08" />
        <circle cx="100" cy="100" r="55" fill="white" fillOpacity="0.08" />
        {/* Modern star with inner glow */}
        <path d="M100 45 L110 75 L140 75 L115 95 L124 125 L100 108 L76 125 L85 95 L60 75 L90 75Z" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="2" strokeLinejoin="round" />
        <path d="M100 60 L105 78 L122 78 L108 88 L113 106 L100 95 L87 106 L92 88 L78 78 L95 78Z" fill="white" fillOpacity="0.45" />
        <circle cx="140" cy="55" r="4" fill="white" fillOpacity="0.5" />
        <circle cx="60" cy="145" r="4" fill="white" fillOpacity="0.5" />
        <circle cx="55" cy="60" r="2.5" fill="white" fillOpacity="0.4" />
        <circle cx="145" cy="140" r="3" fill="white" fillOpacity="0.4" />
        <circle cx="150" cy="100" r="2" fill="white" fillOpacity="0.3" />
        <circle cx="50" cy="100" r="2" fill="white" fillOpacity="0.3" />
      </svg>
    ),
  },
};

const parseDate = (str) => new Date(str);

export default async function CategoryPage({ params }) {
  const { category } = await params;
  if (!category) return <p>Category not found</p>;

  const categorySlug = category.toLowerCase();
  const categoryData = categoryDataMap[categorySlug];
  if (!categoryData) return <p>Category not found</p>;

  const graphic = categoryGraphics[categorySlug];

  const allArticles = [
    ...(beautyData.articles || []),
    ...(celebrityData.articles || []),
    ...(fashionData.articles || []),
    ...(lifestyleData.articles || []),
    ...(cultureData.articles || []),
    ...(weddingData.articles || []),
  ];

  const latestStories = [...allArticles].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  return (
    <>
      <Header />

      {/* Category Hero */}
      <section className="bg-[#f4dada]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10 py-8 lg:py-12 grid lg:grid-cols-[1fr_380px] gap-8 items-center">
          {/* ... hero left side ... */}
          <div>
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#847D79]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Home / {categoryData.category}
            </span>
            <h1
              className="mt-3 text-[56px] sm:text-[72px] lg:text-[88px] leading-[0.95] text-[#1F1A17]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
            >
              {categoryData.category.toUpperCase()}
            </h1>
            <p
              className="mt-4 max-w-[440px] text-[15px] leading-[1.8] text-[#4A4644]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {`Discover the latest ${categoryData.category.toLowerCase()} trends, expert tips, and inspiration.`}
            </p>
          </div>

          {/* Graphic (borderless) */}
          <div className="hidden lg:flex items-center justify-center relative">
            <div
              className="absolute w-[280px] h-[280px] rounded-full blur-2xl opacity-60 transition-all duration-500"
              style={{ background: graphic?.bg }}
            />
            <div className="relative w-[220px] h-[220px] z-10">
              {graphic?.icon}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#f4dada] pb-12">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 grid gap-8 xl:grid-cols-[1fr_320px] xl:items-start">
          <div className="flex flex-col gap-8">
            {/* Top Feature */}
            {categoryData.title && categoryData.image && (
              <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-start">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[#F1D5D9]">
                  <Image src={categoryData.image} alt={categoryData.title} fill className="object-cover" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]" style={{ fontFamily: "var(--font-inter)" }}>
                    {categoryData.category}
                  </span>
                  <h2 className="mt-2 text-[32px] sm:text-[36px] leading-[1.1] text-[#1F1A17]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>
                    {categoryData.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.8] text-[#4A4644]" style={{ fontFamily: "var(--font-inter)" }}>
                    {categoryData.description}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-[#847D79]" style={{ fontFamily: "var(--font-inter)" }}>
                    {categoryData.featuredDate}
                  </p>
                </div>
              </div>
            )}

            {/* Second Feature */}
            {categoryData.extraTitle && categoryData.extraImage && (
              <div className="grid lg:grid-cols-[1fr_1fr] gap-6 items-start border-t border-[#F1D5D9] pt-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[#F1D5D9]">
                  <Image src={categoryData.extraImage} alt={categoryData.extraTitle} fill className="object-cover" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]" style={{ fontFamily: "var(--font-inter)" }}>
                    {categoryData.extraCategory}
                  </span>
                  <h2 className="mt-2 text-[32px] sm:text-[36px] leading-[1.1] text-[#1F1A17]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>
                    {categoryData.extraTitle}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.8] text-[#4A4644]" style={{ fontFamily: "var(--font-inter)" }}>
                    {categoryData.extraDescription}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.08em] text-[#847D79]" style={{ fontFamily: "var(--font-inter)" }}>
                    {categoryData.extraDate}
                  </p>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h3
                  className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  More from {categoryData.category ?? categorySlug}
                </h3>
                <div className="h-[1px] w-8 bg-[#E96A84]" />
              </div>

<div className="flex flex-col gap-8">
  {(categoryData.articles || []).map((article, index) => {
    const articleUrl = article.slug ? "/" + categorySlug + "/" + article.slug : "#";
    return (
      <div
        key={article.id}
        className={`grid lg:grid-cols-[1fr_1fr] gap-6 items-start ${
          index !== 0 ? "border-t border-[#F1D5D9] pt-6" : ""
        }`}
      >
        {/* Image – clickable to article */}
        <Link href={articleUrl} className="block">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-[#F1D5D9]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </Link>

        {/* Text */}
        <div>
          <span
            className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#847D79]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {article.category}
          </span>

          {/* Title – clickable to article */}
          <Link href={articleUrl} className="group block">
            <h4
              className="mt-2 text-[28px] sm:text-[32px] leading-[1.1] text-[#1F1A17] group-hover:text-[#E96A84] transition-colors"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
            >
              {article.title}
            </h4>
            {article.subtitle && (
              <p
                className="mt-3 text-[15px] leading-[1.8] text-[#4A4644]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {article.subtitle}
              </p>
            )}
          </Link>

          {/* Author Link – separate, not nested */}
          {article.author && article.author.slug && (
            <Link
              href={`/authors/${article.author.slug}`}
              className="mt-2 text-[13px] font-medium text-[#E96A84] hover:underline inline-block"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              By {article.author.name}
            </Link>
          )}

          {/* Date & Read time */}
          <div className="mt-2 flex items-center gap-3">
            <p
              className="text-[11px] uppercase tracking-[0.08em] text-[#847D79]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {article.date}
            </p>
            {article.readTime && (
              <span
                className="text-[11px] uppercase tracking-[0.08em] text-[#847D79]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                • {article.readTime}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  })}
</div>
            </div>
          </div>

          {/* Sidebar (unchanged) */}
          <aside className="flex flex-col gap-8 xl:sticky xl:top-8 xl:self-start">
            {/* Latest Stories */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]" style={{ fontFamily: "var(--font-inter)" }}>
                  Latest Stories
                </h3>
                <div className="h-[1px] w-8 bg-[#E96A84]" />
              </div>
              <div className="flex flex-col gap-4">
                {latestStories.slice(0, 5).map((post, i) => (
                  <div key={post.id + "-" + i} className="flex gap-3">
                    <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-[12px]">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#E96A84]" style={{ fontFamily: "var(--font-inter)" }}>
                        {post.category}
                      </span>
                      <h4 className="mt-1 text-[13px] font-semibold leading-[1.3] text-[#1F1A17]" style={{ fontFamily: "var(--font-inter)" }}>
                        {post.title}
                      </h4>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-[#847D79]" style={{ fontFamily: "var(--font-inter)" }}>
                        {post.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stay Inspired */}
            <div
              className="rounded-[18px] border border-[#F1D5D9] p-6"
              style={{ background: "linear-gradient(135deg, #fff5f6 0%, #f6d4db 40%, #f2a6b3 100%)" }}
            >
              <h3 className="text-[28px] leading-[1.1] text-[#C95773]" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}>
                Stay Inspired
              </h3>
              <div className="mt-2 h-[1px] w-8 bg-[#E96A84]" />
              <p className="mt-4 text-[14px] leading-[1.7] text-[#4A4644]" style={{ fontFamily: "var(--font-inter)" }}>
                Get the latest news, exclusive editorials and more straight to your inbox.
              </p>
              <input type="email" placeholder="Enter your email" className="mt-4 h-[46px] w-full rounded-lg border border-[#F1D5D9] bg-white px-4 text-[13px] outline-none" />
              <button className="mt-3 h-[46px] w-full rounded-lg bg-[#E96A84] text-[12px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#D85C77] transition-colors">
                Subscribe
              </button>
            </div>

            {/* Categories */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]" style={{ fontFamily: "var(--font-inter)" }}>
                  Categories
                </h3>
                <div className="h-[1px] w-8 bg-[#E96A84]" />
              </div>
              <div className="flex flex-col divide-y divide-[#F1D5D9]">
                {[
                  { name: "Beauty",    slug: "beauty",    count: beautyData.articles?.length ?? 0 },
                  { name: "Celebrity", slug: "celebrity", count: celebrityData.articles?.length ?? 0 },
                  { name: "Fashion",   slug: "fashion",   count: fashionData.articles?.length ?? 0 },
                  { name: "Lifestyle", slug: "lifestyle", count: lifestyleData.articles?.length ?? 0 },
                  { name: "Culture",   slug: "culture",   count: cultureData.articles?.length ?? 0 },
                  { name: "Wedding",   slug: "wedding",   count: weddingData.articles?.length ?? 0 },
                ].map((cat) => (
                  <Link
                    key={cat.name}
                    href={"/" + cat.slug}
                    className={"flex items-center justify-between py-3 hover:text-[#E96A84] transition-colors " + (categorySlug === cat.slug ? "text-[#E96A84]" : "text-[#1F1A17]")}
                  >
                    <span className="text-[14px]" style={{ fontFamily: "var(--font-inter)" }}>{cat.name}</span>
                    <span className="text-[13px] text-[#847D79]" style={{ fontFamily: "var(--font-inter)" }}>{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </>
  );
}