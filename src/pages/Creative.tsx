import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Music, Camera, MapPin, Pen, Users, Image, Heart } from "lucide-react";
import Layout from "@/components/Layout";

const creativeAreas = [
  {
    icon: Music,
    title: "Street Dance",
    subtitle: "Urban Rhythms",
    description: "Expressing the pulse of city life through movement, bringing joy to unexpected spaces.",
    featured: true
  },
  {
    icon: Camera,
    title: "Photography",
    subtitle: "Wildlife Portraits",
    description: "Capturing the soul and spirit of animals in their natural environment."
  },
  {
    icon: MapPin,
    title: "Lifestyle",
    subtitle: "City Explorer",
    description: "Finding beauty in urban landscapes and sharing moments of everyday magic."
  },
  {
    icon: Pen,
    title: "Creative Writing",
    subtitle: "Nature Narratives",
    description: "Weaving stories that connect human experiences with the natural world."
  }
];

const achievements = [
  {
    icon: Users,
    title: "Dance Workshop Leader",
    description: "Teaching street dance to local communities",
    stat: "50+ participants"
  },
  {
    icon: Image,
    title: "Photography Exhibition",
    description: "Wildlife conservation awareness through art",
    stat: "Featured in 3 galleries"
  },
  {
    icon: Heart,
    title: "Content Creator",
    description: "Lifestyle and science communication",
    stat: "2K+ followers"
  }
];

const Creative = () => {
  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,hsl(158_65%_45%/0.05)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-primary">Creative </span>
            <span className="text-foreground">Expression</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Beyond research and conservation, creativity fuels my passion. From street dance to photography, I explore different ways to tell stories and connect with the world around me.
          </p>

          {/* Creative Areas */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {creativeAreas.map((area) => (
              <Card key={area.title} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group">
                <CardContent className="p-6">
                  {area.featured && (
                    <Badge className="mb-3 bg-accent/20 text-accent border-accent/30">Featured</Badge>
                  )}
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                    <area.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{area.title}</p>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {area.subtitle}
                  </h4>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {achievements.map((achievement) => (
              <div key={achievement.title} className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card/30">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <achievement.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <p className="text-sm text-accent font-medium mt-1">{achievement.stat}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social CTA */}
          <div className="text-center p-8 rounded-2xl border border-border bg-card/30">
            <h3 className="text-xl font-semibold text-foreground mb-2">Follow My Creative Journey</h3>
            <p className="text-muted-foreground mb-6">
              Connect with me on social media to see behind-the-scenes moments, creative projects, and the lighter side of wildlife research life.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.instagram.com/simran__prasad/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @simran__prasad
              </a>
              <span className="text-muted-foreground">•</span>
              <span className="text-primary">@the_little_bookclub</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Creative;
