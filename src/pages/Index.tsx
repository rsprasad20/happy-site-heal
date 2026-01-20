import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WildlifeSection from "@/components/WildlifeSection";
import BookClubSection from "@/components/BookClubSection";
import CreativeSection from "@/components/CreativeSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WildlifeSection />
      <BookClubSection />
      <CreativeSection />
      <BlogSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center text-sm text-muted-foreground">
          <p>© 2024 Dr. Simran Prasad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
