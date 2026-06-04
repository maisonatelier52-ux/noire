import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrendingSection from "@/components/TrendingSection";
import EditorsSection from "@/components/EditorsSection";
import StyleEditSection from "@/components/StyleEditSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
<TrendingSection />
<EditorsSection />
<StyleEditSection />
      </main>
      <Footer />
    </>
  );
}