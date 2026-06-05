"use client";

import EditorsSection from "@/components/EditorsSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// JSON imports
import editorsPick from "@/data/editorsPick.json";
import latestPosts from "@/data/latestPosts.json";
import fashionNews from "@/data/fashionNews.json";
import styleEdit from "@/data/styleEdit.json";
import trending from "@/data/trending.json";
import videoSpotlight from "@/data/videoSpotlight.json";

export default function CategoryPage({ params }) {
  const slug = params.slug.toUpperCase();

  // Featured item: pick the JSON object whose category matches the slug
  const featuredCandidates = [
    editorsPick,
    trending.featured || {},
    videoSpotlight.featured || {},
  ];
  const featured = featuredCandidates.find(item => item.category?.toUpperCase() === slug) || null;

  // Middle posts: filter all JSON arrays for this category
  const categoryPosts = [
    ...latestPosts,
    ...fashionNews,
    ...styleEdit,
    ...(trending.latest || []),
    ...(videoSpotlight.latest || []),
  ].filter(post => post.category?.toUpperCase() === slug);

  // Right column: all posts from all JSONs, sorted newest first
  const allPostsSorted = [
    ...latestPosts,
    ...fashionNews,
    ...styleEdit,
    ...(trending.latest || []),
    ...(videoSpotlight.latest || []),
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <Header />
      <main className="bg-[#f4dada] min-h-screen">
        {featured && (
          <EditorsSection
            editorsPick={featured}
            latestPosts={categoryPosts}
            rightPosts={allPostsSorted} // right column
          />
        )}
        {!featured && (
          <EditorsSection
            editorsPick={null}
            latestPosts={categoryPosts}
            rightPosts={allPostsSorted} // right column
          />
        )}
      </main>
      <Footer />
    </>
  );
}