import { GraduationCap, Microscope, BookOpen, FlaskConical } from "lucide-react";
import Layout from "@/components/Layout";

const timeline = [
  { 
    year: "2026", 
    title: "Post Doctoral Researcher", 
    subtitle: "Centre for Wildlife Studies, Remotely based in Dubai UAE",
    icon: Microscope,
    institution: "CWS",
    institutionColor: "from-emerald-500 to-teal-600"
  },
  { 
    year: "2020", 
    title: "Doctoral Researcher", 
    subtitle: "Centre for Wildlife Studies, Bengaluru, India",
    icon: FlaskConical,
    institution: "CWS",
    institutionColor: "from-emerald-500 to-teal-600"
  },
  { 
    year: "2020", 
    title: "Master of Science", 
    subtitle: "Ecology, Evolution & Conservation - Imperial College London, London UK",
    icon: GraduationCap,
    institution: "ICL",
    institutionColor: "from-blue-500 to-indigo-600"
  },
  { 
    year: "2016", 
    title: "Bachelor of Science (Hons.)", 
    subtitle: "Zoology with Marine Zoology - Bangor University, Wales UK",
    icon: BookOpen,
    institution: "BU",
    institutionColor: "from-purple-500 to-violet-600"
  },
];

const Journey = () => {
  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(158_65%_45%/0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-foreground">Journey </span>
            <span className="text-primary">Timeline</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-16">
            A chronological overview of my academic and professional journey in wildlife conservation and research.
          </p>

          {/* Winding Road Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const Icon = item.icon;
              
              return (
                <div key={index} className="relative">
                  {/* Road segment with curve */}
                  <div className="flex items-center justify-center">
                    {/* Left content */}
                    <div className={`flex-1 ${isLeft ? 'pr-8 md:pr-12' : 'order-3 pl-8 md:pl-12'}`}>
                      {isLeft && (
                        <div className="p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 text-right group">
                          <div className="flex items-center justify-end gap-3 mb-3">
                            <p className="text-accent font-bold text-2xl">{item.year}</p>
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.institutionColor} flex items-center justify-center shadow-lg`}>
                              <span className="text-white font-bold text-xs">{item.institution}</span>
                            </div>
                          </div>
                          <p className="text-foreground text-lg font-semibold group-hover:text-primary transition-colors">{item.title}</p>
                          <p className="text-muted-foreground">{item.subtitle}</p>
                        </div>
                      )}
                    </div>

                    {/* Road center with milestone marker */}
                    <div className="relative flex flex-col items-center z-10">
                      {/* Road segment above */}
                      {index > 0 && (
                        <div className="w-8 h-16 relative">
                          <svg viewBox="0 0 32 64" className="w-full h-full" preserveAspectRatio="none">
                            {/* Road background */}
                            <path
                              d={index % 2 === 0 
                                ? "M16 0 Q16 32 16 64" 
                                : "M16 0 Q16 32 16 64"}
                              fill="none"
                              stroke="hsl(var(--primary))"
                              strokeWidth="12"
                              strokeOpacity="0.2"
                            />
                            {/* Road center dashes */}
                            <path
                              d="M16 0 L16 64"
                              fill="none"
                              stroke="hsl(var(--primary))"
                              strokeWidth="2"
                              strokeDasharray="8 8"
                              strokeOpacity="0.5"
                            />
                          </svg>
                        </div>
                      )}
                      
                      {/* Milestone marker with icon */}
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.institutionColor} border-4 border-background flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.4)] z-20`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Road segment below */}
                      {index < timeline.length - 1 && (
                        <div className="w-8 h-16 relative">
                          <svg viewBox="0 0 32 64" className="w-full h-full" preserveAspectRatio="none">
                            {/* Road background */}
                            <path
                              d="M16 0 Q16 32 16 64"
                              fill="none"
                              stroke="hsl(var(--primary))"
                              strokeWidth="12"
                              strokeOpacity="0.2"
                            />
                            {/* Road center dashes */}
                            <path
                              d="M16 0 L16 64"
                              fill="none"
                              stroke="hsl(var(--primary))"
                              strokeWidth="2"
                              strokeDasharray="8 8"
                              strokeOpacity="0.5"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Right content */}
                    <div className={`flex-1 ${!isLeft ? 'pr-8 md:pr-12 order-1' : 'pl-8 md:pl-12'}`}>
                      {!isLeft && (
                        <div className="p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 text-left group">
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.institutionColor} flex items-center justify-center shadow-lg`}>
                              <span className="text-white font-bold text-xs">{item.institution}</span>
                            </div>
                            <p className="text-accent font-bold text-2xl">{item.year}</p>
                          </div>
                          <p className="text-foreground text-lg font-semibold group-hover:text-primary transition-colors">{item.title}</p>
                          <p className="text-muted-foreground">{item.subtitle}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Curved connector between items */}
                  {index < timeline.length - 1 && (
                    <div className="flex items-center justify-center h-24 md:h-32">
                      <svg 
                        viewBox="0 0 200 100" 
                        className="w-48 md:w-64 h-full" 
                        preserveAspectRatio="none"
                      >
                        {/* Winding road path */}
                        <path
                          d={isLeft 
                            ? "M100 0 Q100 25 130 50 Q160 75 100 100" 
                            : "M100 0 Q100 25 70 50 Q40 75 100 100"}
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="16"
                          strokeOpacity="0.15"
                          strokeLinecap="round"
                        />
                        {/* Road edge lines */}
                        <path
                          d={isLeft 
                            ? "M92 0 Q92 25 122 50 Q152 75 92 100" 
                            : "M108 0 Q108 25 78 50 Q48 75 108 100"}
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                        />
                        <path
                          d={isLeft 
                            ? "M108 0 Q108 25 138 50 Q168 75 108 100" 
                            : "M92 0 Q92 25 62 50 Q32 75 92 100"}
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                        />
                        {/* Center dashed line */}
                        <path
                          d={isLeft 
                            ? "M100 0 Q100 25 130 50 Q160 75 100 100" 
                            : "M100 0 Q100 25 70 50 Q40 75 100 100"}
                          fill="none"
                          stroke="hsl(var(--primary))"
                          strokeWidth="2"
                          strokeDasharray="8 6"
                          strokeOpacity="0.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}

            {/* End marker */}
            <div className="flex justify-center mt-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-4 border-primary flex items-center justify-center shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                  <span className="text-primary text-xl">🎓</span>
                </div>
                <p className="text-muted-foreground mt-4 text-sm">The journey continues...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Journey;
