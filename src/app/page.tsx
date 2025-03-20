import BlogSection from "@/components/BlogSection";
import CategorySection from "@/components/CategorySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-24 h-[500vh]">
      <Navbar />
      <HeroSection
        title="Welcome to <Code&Coffee/>"
        description="A community of developers and designers who love to code and drink coffee."
        image="/images/hero.jpg"
      />
      <NewsSection />
      <BlogSection />
      <CategorySection />
      <ContactSection />
    </div>
  );
}
