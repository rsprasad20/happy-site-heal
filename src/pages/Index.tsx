import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center text-sm text-muted-foreground">
          <p>© 2026 Dr. Simran Prasad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
