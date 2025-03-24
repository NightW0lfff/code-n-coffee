import BlogSection from "@/components/BlogSection";
import CategorySection from "@/components/CategorySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="container flex flex-col items-center gap-32 mx-auto mb-8">
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
      <Footer />
    </div>
  );
}
