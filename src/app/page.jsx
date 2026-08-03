import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FashionSection from "@/components/FashionSection";
import BeautySection from "@/components/BeautySection";
import CategoryGridSection from "@/components/CategoryGridSection";
import lifestyleData from "@/data/lifestyle.json";
import celebrityData from "@/data/celebrity.json";
import CultureSection from "@/components/CultureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FashionSection />
        <BeautySection />
<CategoryGridSection title="LIFESTYLE" data={lifestyleData.articles} />
        <CultureSection />
<CategoryGridSection title="CELEBRITY" data={celebrityData.articles} />
      </main>
      <Footer />
    </>
  );
}