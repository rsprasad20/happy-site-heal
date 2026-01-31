import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Instagram, Youtube, Users, Mic, Pen, GraduationCap, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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
  },
  {
    icon: Youtube,
    name: "YouTube",
    description: "Short videos & talks",
    href: "https://www.youtube.com/shorts/VzKPbVYGNu8"
  }
];

const Collaborate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Some fields need your attention.",
        variant: "destructive",
      });
      return;
    }
    
    const subject = encodeURIComponent(formData.subject.trim());
    const body = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );
    
    window.location.href = `mailto:simranprasaduae@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening Email Client",
      description: "Your email app should open with the message details.",
    });
  };

  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(158_65%_45%/0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-foreground">Let's </span>
            <span className="text-primary">Collaborate</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Whether you're interested in research collaboration, speaking engagements, or simply want to discuss conservation research, I'd love to hear from you.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: "" });
                    }}
                    className={`bg-card/50 border-border focus:border-primary ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: "" });
                    }}
                    className={`bg-card/50 border-border focus:border-primary ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: "" });
                    }}
                    className={`bg-card/50 border-border focus:border-primary ${errors.subject ? "border-red-500" : ""}`}
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: "" });
                    }}
                    className={`bg-card/50 border-border focus:border-primary min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <div className="flex gap-4">
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                  <Button type="button" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10">
                    Schedule Call
                  </Button>
                </div>
              </form>
              <p className="text-sm text-muted-foreground mt-4">
                I'll get back to you within 48 hours. For urgent matters, please reach out via LinkedIn.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
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
                </div>
              </div>

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

              {/* Status */}
              <div className="p-6 rounded-xl border border-primary/30 bg-primary/5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h4 className="font-semibold text-foreground">Current Status</h4>
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  Based in Dubai, United Arab Emirates, open to global collaboration
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-primary">Accepting Research Partnerships</span>
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
