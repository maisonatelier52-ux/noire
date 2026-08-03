// src/app/[category]/[slug]/page.jsx
import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiBookmark, FiShare2 } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import beautyData from "@/data/beauty.json";
import celebrityData from "@/data/celebrity.json";
import fashionData from "@/data/fashion.json";
import lifestyleData from "@/data/lifestyle.json";
import cultureData from "@/data/culture.json";
import weddingData from "@/data/wedding.json";

const allDataSources = [
  { data: beautyData,    categorySlug: "beauty" },
  { data: celebrityData, categorySlug: "celebrity" },
  { data: fashionData,   categorySlug: "fashion" },
  { data: lifestyleData, categorySlug: "lifestyle" },
  { data: cultureData,   categorySlug: "culture" },
  { data: weddingData,   categorySlug: "wedding" },
];

const allArticlesMap = {};
for (const { data, categorySlug } of allDataSources) {
  for (const article of data.articles || []) {
    if (article.slug) {
      allArticlesMap[article.slug] = { article, categorySlug };
    }
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = allArticlesMap[slug];
  if (!entry) return { title: "Article Not Found" };
  const { article } = entry;
  return {
    title: article.seo?.metaTitle ?? article.title,
    description: article.seo?.metaDescription ?? article.subtitle,
    keywords: article.seo?.keywords?.join(", "),
    openGraph: {
      title: article.seo?.metaTitle ?? article.title,
      description: article.seo?.metaDescription ?? article.subtitle,
      images: [{ url: article.heroImage ?? article.image }],
    },
  };
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const entry = allArticlesMap[slug];
  if (!entry) return <p className="p-10">Article not found.</p>;

  const { article, categorySlug } = entry;
  const sourceData = allDataSources.find((s) => s.categorySlug === categorySlug)?.data;
  const relatedArticles = (sourceData?.articles || [])
    .filter((a) => a.slug && a.slug !== slug)
    .slice(0, 4);

  return (
    <>
      <Header />

      <main className="bg-[#f4dada] min-h-screen">
        {/* HERO SECTION - TALLER */}
        <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={article.heroImage ?? article.image}
              alt={article.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/80 via-[#1F1A17]/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12 lg:p-20 max-w-[1440px] mx-auto">
            <div className="max-w-4xl">
              <span
                className="inline-block text-[14px] font-semibold uppercase tracking-[0.2em] text-white/80 bg-[#E96A84]/40 px-5 py-1.5 rounded-full backdrop-blur-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {article.category}
              </span>
              <h1
                className="mt-5 text-5xl sm:text-6xl lg:text-8xl leading-[1.05] text-white drop-shadow-2xl"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
              >
                {article.title}
              </h1>
              {article.subtitle && (
                <p
                  className="mt-4 text-xl sm:text-2xl text-white/90 max-w-3xl drop-shadow"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {article.subtitle}
                </p>
              )}
              <div className="mt-8 flex items-center gap-6 text-white/80 text-base">
                {article.author?.avatar && (
                  <div className="relative h-12 w-12 rounded-full border-2 border-white/30 overflow-hidden">
                    <Image src={article.author.avatar} alt={article.author.name} fill className="object-cover" />
                  </div>
                )}
                <div>
                  <span className="font-semibold text-white">{article.author?.name}</span>
                  <span className="mx-3">·</span>
                  <span>{article.date}</span>
                  <span className="mx-3">·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT - more spacious */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 grid gap-14 xl:grid-cols-[1fr_360px]">
          <article className="space-y-14">
            {/* BODY */}
            <div className="prose prose-xl prose-pink max-w-none">
              {(article.sections || []).map((section, idx) => (
                <div key={section.id} id={section.id} className="article-section scroll-mt-24">
                  {idx === 0 ? (
                    <>
                      <p
                        className="text-xl leading-[1.9] text-[#4A4644] first-letter:float-left first-letter:mr-5 first-letter:text-9xl first-letter:leading-[0.8] first-letter:text-[#C95773] first-letter:font-serif"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {section.body}
                      </p>
                      {section.image && (
                        <div className="my-8 relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[#F1D5D9]">
                          <Image src={section.image} alt={section.heading} fill className="object-cover" />
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <h2
                        className="text-4xl sm:text-5xl mt-14 mb-6 text-[#1F1A17] border-b border-[#F1D5D9] pb-3"
                        style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
                      >
                        {section.heading}
                      </h2>
                      <p
                        className="text-xl leading-[1.9] text-[#4A4644]"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {section.body}
                      </p>
                      {section.image && (
                        <div className="my-8 relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-[#F1D5D9]">
                          <Image src={section.image} alt={section.heading} fill className="object-cover" />
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* TAGS */}
            {article.tags && (
              <div className="flex flex-wrap items-center gap-3 pt-8 border-t border-[#F1D5D9]">
                <span className="text-sm font-semibold uppercase tracking-[0.1em] text-[#847D79]">Topics</span>
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-sm font-medium uppercase tracking-[0.08em] text-[#E96A84] bg-white/60 rounded-full border border-[#E96A84]/30 hover:bg-[#E96A84] hover:text-white transition-colors cursor-default"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* SHARE + BOOKMARK */}
            <div className="flex items-center justify-between pt-8 border-t border-[#F1D5D9]">
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-base font-medium text-[#4A4644] hover:text-[#E96A84] transition-colors">
                  <FiHeart size={22} />
                  <span>Save</span>
                </button>
                <button className="flex items-center gap-2 text-base font-medium text-[#4A4644] hover:text-[#E96A84] transition-colors">
                  <FiBookmark size={22} />
                  <span>Bookmark</span>
                </button>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold uppercase tracking-[0.1em] text-[#847D79]">Share</span>
                <button className="p-2.5 rounded-full bg-white/80 border border-[#F1D5D9] hover:bg-[#E96A84] hover:text-white hover:border-[#E96A84] transition-colors">
                  <FiShare2 size={20} />
                </button>
              </div>
            </div>
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-10 xl:sticky xl:top-24 self-start">
            {/* On This Page */}
            {article.sections && article.sections.length > 0 && (
              <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-[#F1D5D9] p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4A4644] mb-4">On This Page</h3>
                <nav className="flex flex-col gap-2">
                  {article.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-sm px-3 py-1.5 rounded-lg text-[#4A4644] hover:bg-[#F9D6DC] hover:text-[#1F1A17] transition-colors"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {section.heading}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Related Stories */}
            {relatedArticles.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4A4644] mb-4">Related Stories</h3>
                <div className="flex flex-col gap-5">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/${categorySlug}/${rel.slug}`}
                      className="group flex gap-4 items-start"
                    >
                      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-[#F1D5D9] group-hover:border-[#E96A84] transition-colors">
                        <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4
                          className="text-base font-semibold leading-snug text-[#1F1A17] group-hover:text-[#E96A84] transition-colors line-clamp-2"
                          style={{ fontFamily: "var(--font-inter)" }}
                        >
                          {rel.title}
                        </h4>
                        <p className="mt-1 text-xs uppercase tracking-[0.06em] text-[#847D79]">{rel.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* At a Glance */}
            {article.atAGlance && (
              <div className="bg-white/60 backdrop-blur-sm rounded-xl border border-[#F1D5D9] p-6 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-[#4A4644] mb-4">At a Glance</h3>
                <dl className="divide-y divide-[#F1D5D9]">
                  {article.atAGlance.map((item) => (
                    <div key={item.label} className="flex py-3 gap-4">
                      <dt className="w-28 shrink-0 text-sm text-[#847D79] font-medium" style={{ fontFamily: "var(--font-inter)" }}>
                        {item.label}
                      </dt>
                      <dd className="text-sm font-medium text-[#1F1A17]" style={{ fontFamily: "var(--font-inter)" }}>
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {/* Stay Inspired */}
            <div
              className="rounded-xl border border-[#F1D5D9] p-6 backdrop-blur-sm"
              style={{
                background:
                  "linear-gradient(135deg, #fff5f6 0%, #f6d4db 40%, #f2a6b3 100%)",
              }}
            >
              <h3
                className="text-2xl leading-tight text-[#C95773]"
                style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
              >
                Stay Inspired
              </h3>
              <div className="mt-2 h-[2px] w-8 bg-[#E96A84]" />
              <p className="mt-3 text-sm leading-relaxed text-[#4A4644]" style={{ fontFamily: "var(--font-inter)" }}>
                Get the latest fashion news, exclusive editorials and more straight to your inbox.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-4 h-[44px] w-full rounded-lg border border-[#F1D5D9] bg-white/80 px-4 text-sm outline-none focus:ring-2 focus:ring-[#E96A84] transition"
              />
              <button className="mt-2 h-[44px] w-full rounded-lg bg-[#E96A84] text-sm font-semibold uppercase tracking-[0.08em] text-white hover:bg-[#D85C77] transition-colors">
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}