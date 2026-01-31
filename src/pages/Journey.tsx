import { GraduationCap, Microscope, BookOpen, FlaskConical, TreePine, Bird, Mountain, Compass } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import bangorLogo from "@/assets/bangor-logo.jpeg";
import imperialLogo from "@/assets/imperial-logo.png";
import cwsLogo from "@/assets/cws-logo.jpeg";

const timeline = [
  { 
    year: "2016", 
    title: "Bachelor of Science (Hons.)", 
    subtitle: "Zoology with Marine Zoology - Bangor University, Wales UK",
    icon: BookOpen,
    institution: "BU",
    institutionUrl: "https://www.bangor.ac.uk",
    institutionColor: "from-purple-500 to-violet-600",
    useLogo: "bangor"
  },
  { 
    year: "2020", 
    title: "Master of Science", 
    subtitle: "Ecology, Evolution & Conservation - Imperial College London, London UK",
    icon: GraduationCap,
    institution: "ICL",
    institutionUrl: "https://www.imperial.ac.uk",
    institutionColor: "from-blue-500 to-indigo-600",
    useLogo: "imperial"
  },
  { 
    year: "2020", 
    title: "Doctoral Researcher", 
    subtitle: "Centre for Wildlife Studies, Bengaluru, India",
    icon: FlaskConical,
    institution: "CWS",
    institutionUrl: "https://cwsindia.org",
    institutionColor: "from-emerald-500 to-teal-600",
    useLogo: "cws"
  },
  { 
    year: "2026", 
    title: "Post Doctoral Researcher", 
    subtitle: "Centre for Wildlife Studies, Remotely based in Dubai UAE",
    icon: Microscope,
    institution: "CWS",
    institutionUrl: "https://cwsindia.org",
    institutionColor: "from-emerald-500 to-teal-600",
    useLogo: "cws"
  },
];

const decorativeIcons = [TreePine, Bird, Mountain, Compass, TreePine];

const Journey = () => {
  const [pathProgress, setPathProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how much of the element is visible
      const start = rect.top - windowHeight;
      const end = rect.bottom;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0), 1);
      
      setPathProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(158_65%_45%/0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-foreground">Journey </span>
            <span className="text-primary">Timeline</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            A chronological overview of my academic and professional journey in wildlife conservation and research.
          </p>

          {/* Horizontal Winding Road Timeline */}
          <div className="relative overflow-x-auto py-12" ref={timelineRef}>
            <div className="min-w-[1100px] lg:min-w-full relative" style={{ height: '650px' }}>
              
              {/* Decorative Icons along the path */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
                {decorativeIcons.map((Icon, i) => (
                  <div 
                    key={i}
                    className="absolute opacity-20 text-primary"
                    style={{ 
                      left: `${10 + i * 20}%`,
                      top: i % 2 === 0 ? '-80px' : '80px',
                      transform: `rotate(${i * 15 - 30}deg)`,
                      transition: 'opacity 0.5s ease',
                      opacity: pathProgress > (i * 0.2) ? 0.3 : 0.1
                    }}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                ))}
              </div>

              {/* Road SVG Background - with animated drawing effect */}
              <div className="absolute top-1/2 left-0 right-0 h-40 -translate-y-1/2 pointer-events-none">
                <svg 
                  viewBox="0 0 1000 160" 
                  className="w-full h-full" 
                  preserveAspectRatio="none"
                >
                  {/* Road shadow/glow */}
                  <path
                    d="M0 80 Q125 10 250 80 Q375 150 500 80 Q625 10 750 80 Q875 150 1000 80"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="50"
                    strokeOpacity="0.08"
                    strokeLinecap="round"
                  />
                  {/* Main road path - background */}
                  <path
                    d="M0 80 Q125 10 250 80 Q375 150 500 80 Q625 10 750 80 Q875 150 1000 80"
                    fill="none"
                    stroke="hsl(var(--muted))"
                    strokeWidth="40"
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                  />
                  {/* Animated progress path */}
                  <path
                    d="M0 80 Q125 10 250 80 Q375 150 500 80 Q625 10 750 80 Q875 150 1000 80"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="40"
                    strokeOpacity="0.4"
                    strokeLinecap="round"
                    strokeDasharray="2000"
                    strokeDashoffset={2000 - (2000 * pathProgress)}
                    style={{ transition: 'stroke-dashoffset 0.3s ease-out' }}
                  />
                  {/* Center dashed line - animated */}
                  <path
                    d="M0 80 Q125 10 250 80 Q375 150 500 80 Q625 10 750 80 Q875 150 1000 80"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeDasharray="20 15"
                    strokeOpacity="0.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Timeline Items */}
              <div className="relative h-full flex justify-around items-center px-16">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  const isTop = index % 2 === 0;
                  const itemProgress = pathProgress > ((index + 0.5) / timeline.length) ? 1 : 0;
                  
                  return (
                    <div 
                      key={index} 
                      className="relative flex flex-col items-center"
                      style={{ 
                        width: '22%',
                        opacity: pathProgress > (index * 0.2) ? 1 : 0.3,
                        transform: `translateY(${pathProgress > (index * 0.2) ? 0 : 20}px)`,
                        transition: 'opacity 0.5s ease, transform 0.5s ease'
                      }}
                    >
                      {/* Top Cards */}
                      {isTop && (
                        <div className="absolute bottom-[60%] w-52">
                          <div className="block p-4 rounded-xl border border-border bg-card/60 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 backdrop-blur-sm group shadow-lg hover:shadow-xl hover:shadow-primary/10">
                            <div className="flex items-center gap-2 mb-2">
                              {item.useLogo === "bangor" ? (
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden p-0.5">
                                  <img src={bangorLogo} alt="Bangor University" className="w-full h-full object-contain" />
                                </div>
                              ) : item.useLogo === "imperial" ? (
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden p-0.5">
                                  <img src={imperialLogo} alt="Imperial College London" className="w-full h-full object-contain" />
                                </div>
                              ) : item.useLogo === "cws" ? (
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden p-0.5">
                                  <img src={cwsLogo} alt="Centre for Wildlife Studies" className="w-full h-full object-contain" />
                                </div>
                              ) : (
                                <a 
                                  href={item.institutionUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.institutionColor} flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
                                >
                                  <span className="text-white font-bold text-[10px]">{item.institution}</span>
                                </a>
                              )}
                              <p className="text-accent font-bold text-lg">{item.year}</p>
                            </div>
                            {item.useLogo ? (
                              <a 
                                href={item.institutionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground text-sm font-semibold hover:text-primary transition-colors leading-tight block"
                              >
                                {item.title}
                              </a>
                            ) : (
                              <p className="text-foreground text-sm font-semibold group-hover:text-primary transition-colors leading-tight">{item.title}</p>
                            )}
                            <p className="text-muted-foreground text-xs mt-1 leading-tight">{item.subtitle}</p>
                          </div>
                          {/* Connector line */}
                          <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
                        </div>
                      )}

                      {/* Milestone marker - centered */}
                      <div 
                        className={`w-14 h-14 rounded-full bg-gradient-to-br ${item.institutionColor} border-4 border-background flex items-center justify-center shadow-[0_0_25px_hsl(var(--primary)/0.4)] z-20 hover:scale-110 transition-all duration-300 cursor-pointer ${isTop ? 'mt-4' : '-mt-4'}`}
                        style={{
                          boxShadow: pathProgress > (index * 0.25) 
                            ? '0 0 30px hsl(var(--primary) / 0.5), 0 0 60px hsl(var(--primary) / 0.2)' 
                            : '0 0 15px hsl(var(--primary) / 0.2)'
                        }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Bottom Cards */}
                      {!isTop && (
                        <div className="absolute top-[60%] w-52">
                          {/* Connector line */}
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-px h-8 bg-gradient-to-t from-primary/60 to-transparent" />
                          <div className="p-4 rounded-xl border border-border bg-card/60 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 backdrop-blur-sm group shadow-lg hover:shadow-xl hover:shadow-primary/10">
                            <div className="flex items-center gap-2 mb-2">
                              {item.useLogo === "bangor" ? (
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden p-0.5">
                                  <img src={bangorLogo} alt="Bangor University" className="w-full h-full object-contain" />
                                </div>
                              ) : item.useLogo === "imperial" ? (
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden p-0.5">
                                  <img src={imperialLogo} alt="Imperial College London" className="w-full h-full object-contain" />
                                </div>
                              ) : item.useLogo === "cws" ? (
                                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden p-0.5">
                                  <img src={cwsLogo} alt="Centre for Wildlife Studies" className="w-full h-full object-contain" />
                                </div>
                              ) : (
                                <a 
                                  href={item.institutionUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${item.institutionColor} flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
                                >
                                  <span className="text-white font-bold text-[10px]">{item.institution}</span>
                                </a>
                              )}
                              <p className="text-accent font-bold text-lg">{item.year}</p>
                            </div>
                            {item.useLogo ? (
                              <a 
                                href={item.institutionUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground text-sm font-semibold hover:text-primary transition-colors leading-tight block"
                              >
                                {item.title}
                              </a>
                            ) : (
                              <p className="text-foreground text-sm font-semibold group-hover:text-primary transition-colors leading-tight">{item.title}</p>
                            )}
                            <p className="text-muted-foreground text-xs mt-1 leading-tight">{item.subtitle}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Start marker */}
              <div className="absolute top-1/2 left-2 -translate-y-1/2">
                <div className="w-6 h-6 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
              
              {/* End marker */}
              <div className="absolute top-1/2 right-2 -translate-y-1/2">
                <div 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-primary flex items-center justify-center"
                  style={{
                    boxShadow: pathProgress > 0.9 ? '0 0 30px hsl(var(--primary) / 0.6)' : '0 0 10px hsl(var(--primary) / 0.3)',
                    transition: 'box-shadow 0.5s ease'
                  }}
                >
                  <span className="text-sm">🚀</span>
                </div>
              </div>

              {/* Journey continues message - inside the scroll container */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <p className="text-muted-foreground text-sm italic">The journey continues...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Journey;
