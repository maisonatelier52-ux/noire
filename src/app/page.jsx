import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import EditorsSection from "@/components/EditorsSection";
import StyleEditSection from "@/components/StyleEditSection";
import styleEditData from "@/data/styleEdit.json";
import fashionNewsData from "@/data/fashionNews.json";
import VideoSpotlightSection from "@/components/VideoSpotlightSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
<TrendingSection />
<EditorsSection />
<StyleEditSection
  title="Style Edit"
  data={styleEditData}
/>
<VideoSpotlightSection />
<StyleEditSection
  title="Fashion News"
  data={fashionNewsData}
/>
      </main>
      <Footer />
    </>
  );
}