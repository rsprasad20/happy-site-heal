import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Lightbulb, Heart } from "lucide-react";

const skills = [
  "Wildlife Conservation", "Data Science", "Field Biology",
  "Python", "R", "Machine Learning", "Statistical Analysis",
  "Manuscript Writing and Preparation", "Grant Writing", "Photography", "Storytelling",
  "QGIS Maps", "Science Publications", "PADI Nitrox Scuba Diver"
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(158_65%_45%/0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          <span className="text-primary">About</span>{" "}
          <span className="text-foreground">Simran</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left - Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a Postdoctoral Fellow in Wildlife Conservation, I build on insights from my doctoral research to tackle pressing questions about human–wildlife conflict worldwide.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey has taken me into the field in South India, where I worked with communities to understand their relationships with elephants in a biodiversity hotspot, the Western Ghats. Today, I combine these experiences with interdisciplinary approaches to research the underpinnings of conflict, which can inform on habitat restoration, and species recovery.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond research, I love storytelling – whether through scientific communication, book reviews, or capturing the beauty of wildlife underwater while scuba diving. I believe data tells stories, and stories inspire action, driving meaningful change in conservation.
            </p>
          </div>

          {/* Right - Skills */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-foreground">Expertise & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="px-4 py-2 border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <GraduationCap className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">PhD in Wildlife Conservation</h4>
              <p className="text-sm text-muted-foreground">Focus on Human Elephant Conflict (HEC)</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <Award className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Research Excellence</h4>
              <p className="text-sm text-muted-foreground">5+ peer-reviewed publications in conservation biology</p>
              <a 
                href="https://www.nature.com/articles/s41598-025-14867-3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline mt-2 inline-block"
              >
                Read My Research
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <Lightbulb className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Data Innovation</h4>
              <p className="text-sm text-muted-foreground">Pioneering AI models for species behavior prediction</p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <Heart className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold text-foreground mb-2">Conservation Impact</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• NYAS Mentor for 1000 Girls Program</li>
                <li>• CCC Fellow at Colorado State</li>
                <li>• ATBC Keynote Speaker, Rwanda</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
