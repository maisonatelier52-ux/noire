import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Category data
import beautyData from "@/data/beauty.json";
import celebrityData from "@/data/celebrity.json";
import fashionData from "@/data/fashion.json";
import lifestyleData from "@/data/lifestyle.json";
import cultureData from "@/data/culture.json";
import weddingData from "@/data/wedding.json";

// Authors data (keyed by author slug)
import authorsData from "@/data/authors.json";

const categoryDataMap = {
  beauty: beautyData,
  celebrity: celebrityData,
  fashion: fashionData,
  lifestyle: lifestyleData,
  culture: cultureData,
  wedding: weddingData,
};

const parseDate = (str) => new Date(str);

export default async function AuthorPage({ params }) {
  const { author } = await params;
  if (!author) return <p>Author not found</p>;

  const authorSlug = author.toLowerCase();
  const authorInfo = authorsData[authorSlug];
  if (!authorInfo) return <p>Author not found</p>;

  const categorySlug = authorInfo.category;
  const categoryData = categoryDataMap[categorySlug];
  if (!categoryData) return <p>Category not found</p>;

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

  const authorArticles = categoryData.articles || [];

  return (
    <>
      <Header />

      {/* Author Hero */}
      <section className="bg-[#f4dada]">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-10 py-8 lg:py-12 grid lg:grid-cols-[1fr_380px] gap-8 items-center">
          <div>
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#847D79]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Authors / {authorInfo.name}
            </span>
            <h1
              className="mt-3 text-[56px] sm:text-[72px] lg:text-[88px] leading-[0.95] text-[#1F1A17]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 500 }}
            >
              {authorInfo.name}
            </h1>
            <p
              className="mt-2 text-[16px] font-medium text-[#E96A84]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {authorInfo.title}
            </p>
            <p
              className="mt-4 max-w-[440px] text-[15px] leading-[1.8] text-[#4A4644]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {authorInfo.bio}
            </p>
            {authorInfo.social && (
              <div className="mt-4 flex gap-4 text-[13px] text-[#847D79]">
                {authorInfo.social.instagram && (
                  <span>📸 {authorInfo.social.instagram}</span>
                )}
                {authorInfo.social.twitter && (
                  <span>🐦 {authorInfo.social.twitter}</span>
                )}
              </div>
            )}
          </div>

          {/* Author Image */}
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={authorInfo.image}
                alt={authorInfo.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content – now with featured sections like category page */}
      <section className="bg-[#f4dada] pb-12">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 grid gap-8 xl:grid-cols-[1fr_320px] xl:items-start">
          <div className="flex flex-col gap-8">

            {/* === TOP FEATURE — SAME AS CATEGORY PAGE === */}
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

            {/* === SECOND FEATURE — SAME AS CATEGORY PAGE === */}
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

            {/* === ARTICLES BY THIS AUTHOR === */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h3
                  className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A4644]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Articles by {authorInfo.name}
                </h3>
                <div className="h-[1px] w-8 bg-[#E96A84]" />
              </div>

              <div className="flex flex-col gap-8">
                {authorArticles.map((article, index) => {
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

                        {/* Author Link – separate */}
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

          {/* Sidebar – identical to category page */}
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
                    className="flex items-center justify-between py-3 hover:text-[#E96A84] transition-colors text-[#1F1A17]"
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