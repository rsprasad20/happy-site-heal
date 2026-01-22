import { ArrowRight, ArrowDown, Linkedin, Mail, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import simranPortrait from "@/assets/simran-portrait.png";
import StarryBackground from "./StarryBackground";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1f1a]">
      {/* Starry background effect */}
      <StarryBackground />
      
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,hsl(158_65%_45%/0.08)_0%,transparent_60%)]" />
      
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Availability Badge */}
            <a 
              href="mailto:simranprasaduae@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary">Available for Collaboration</span>
            </a>

            {/* Name */}
            <div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
                Dr. Simran
                <span className="block text-primary">Prasad</span>
              </h1>
            </div>

            {/* Title */}
            <p className="text-xl md:text-2xl text-primary font-medium">
              PhD in Wildlife Ecology & Conservation | Researcher | Storyteller
            </p>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Bridging conservation science, data analysis, and social science methods to understand human–wildlife dynamics and conserve species. Passionate about applying interdisciplinary, evidence-based approaches to uncover ecological processes and protect vulnerable ecosystems.
            </p>

            {/* Stats Card */}
            <div className="inline-flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50">
              <div>
                <p className="text-2xl font-bold text-accent">4+ Years</p>
                <p className="text-sm text-muted-foreground">Working on the magnificent Asian elephant <em>(Elephas maximus)</em> in South India</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-500 text-slate-900 font-semibold hover:from-lime-300 hover:via-emerald-300 hover:to-teal-400 border-0"
                asChild
              >
                <Link to="/research">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-500 text-slate-900 font-semibold hover:from-lime-300 hover:via-emerald-300 hover:to-teal-400 border-0"
                asChild
              >
                <a href="https://www.nature.com/articles/s41598-025-14867-3" target="_blank" rel="noopener noreferrer">
                  Read my latest publication
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a 
                href="https://www.linkedin.com/in/simran-prasad-2785b011b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="mailto:simranprasaduae@gmail.com"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/simran__prasad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Right Content - Image with decorative elements */}
          <div className="relative flex justify-center lg:justify-end -mt-8">
            {/* Glowing orb background */}
            <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-2xl" />

            {/* Portrait with floating stats */}
            <div className="relative z-10">
              <div className="relative">
                <div className="absolute inset-0 rounded-full border-4 border-primary/50 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_30px_10px_hsl(158_65%_45%/0.3),0_0_60px_20px_hsl(158_65%_45%/0.15)]" />
                <img 
                  src={simranPortrait} 
                  alt="Dr. Simran Prasad - Wildlife Conservation Researcher"
                  className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full object-cover border-4 border-transparent"
                />
              </div>
              
              {/* Floating Stats - positioned relative to image */}
              <div className="absolute top-4 -left-20 md:top-8 md:-left-24 p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm z-20">
                <p className="text-2xl font-bold text-accent">500+</p>
                <p className="text-xs text-muted-foreground">Research Field Interviews</p>
              </div>

              <div className="absolute bottom-4 -right-20 md:bottom-8 md:-right-24 p-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm z-20">
                <p className="text-2xl font-bold text-accent">2+ Indian States</p>
                <p className="text-xs text-muted-foreground">Field sites across the Western Ghats</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
