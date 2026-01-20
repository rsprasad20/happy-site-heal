import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Lightbulb, Heart } from "lucide-react";

const skills = [
  "Wildlife Conservation", "Data Science", "AI Research", "Field Biology",
  "Python", "R", "Machine Learning", "Statistical Analysis",
  "Research Writing", "Grant Writing", "Photography", "Storytelling",
  "QGIS Maps", "Science Publications"
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
              As a PhD candidate in Wildlife Conservation with a focus on Human Elephant Conflict (HEC), I stand at the intersection of nature and technology, using data science and AI to unlock the secrets of wildlife behavior and ecosystem dynamics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey began in the field, tracking endangered species and documenting their stories. Today, I combine fieldwork with cutting-edge technology to create predictive models that help conservationists make informed decisions about habitat protection and species recovery.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond research, I'm passionate about storytelling - whether through academic writing, book reviews, or capturing the beauty of wildlife through photography. I believe that data tells stories, and stories inspire action.
            </p>
            <p className="text-muted-foreground italic border-l-2 border-primary pl-4">
              When I'm not in the field or analyzing data, you'll find me curating book reviews for The Little Book Club or dancing in the streets of the city.
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
