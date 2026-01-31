import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Instagram, Users, Mic, Pen, GraduationCap, MapPin } from "lucide-react";
import Layout from "@/components/Layout";

const collaborationTypes = [
  {
    icon: Users,
    title: "Research Collaboration",
    description: "Joint research projects in wildlife conservation and AI applications"
  },
  {
    icon: Mic,
    title: "Speaking Engagements",
    description: "Conferences, workshops, and academic presentations"
  },
  {
    icon: Pen,
    title: "Writing & Media",
    description: "Science communication, articles, and interviews"
  },
  {
    icon: GraduationCap,
    title: "Mentorship",
    description: "Guiding students and early-career conservationists"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    description: "Professional networking",
    href: "https://www.linkedin.com/in/simran-prasad-2785b011b/"
  },
  {
    icon: Mail,
    name: "Email",
    description: "Direct correspondence",
    href: "mailto:simranprasaduae@gmail.com"
  },
  {
    icon: Instagram,
    name: "Instagram",
    description: "Creative & lifestyle updates",
    href: "https://www.instagram.com/simran__prasad/"
  }
];

const Collaborate = () => {
  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(158_65%_45%/0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-foreground">Let's </span>
            <span className="text-primary">Collaborate</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-4">
            Whether you're interested in research collaboration, speaking engagements, or simply want to discuss conservation research, I'd love to hear from you.
          </p>
          <Button asChild className="mb-12">
            <a href="mailto:simranprasaduae@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Send a Message
            </a>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Collaboration Opportunities</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {collaborationTypes.map((type) => (
                    <Card key={type.title} className="bg-card/30 border-border">
                      <CardContent className="p-4 flex items-start gap-3">
                        <type.icon className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium text-foreground">{type.title}</p>
                          <p className="text-xs text-muted-foreground">{type.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary/50 bg-card/30 transition-colors group"
                    >
                      <link.icon className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">{link.name}</p>
                        <p className="text-xs text-muted-foreground">{link.description}</p>
                      </div>
                    </a>
                  ))}
                  {/* Current Status Card */}
                  <div className="flex items-center gap-3 p-4 rounded-xl border border-primary/30 bg-primary/5">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Current Status</p>
                      <p className="text-xs text-muted-foreground">Dubai, UAE • Open to global collaboration</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs text-primary">Accepting Partnerships</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Collaborate;
