import { GraduationCap, Microscope, BookOpen, FlaskConical, Leaf, Fish, Waves } from "lucide-react";
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

const Journey = () => {
  const [pathProgress, setPathProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0), 1);
      
      setPathProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
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

          {/* Horizontal River Flow Timeline */}
          <div className="relative overflow-x-auto py-12" ref={timelineRef}>
            <div className="min-w-[1100px] lg:min-w-full relative" style={{ height: '680px' }}>
              
              {/* Decorative nature elements */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
                {/* Leaves and nature decorations */}
                <Leaf 
                  className="absolute text-primary/20 w-6 h-6" 
                  style={{ left: '5%', top: '-100px', transform: 'rotate(-30deg)' }} 
                />
                <Leaf 
                  className="absolute text-primary/15 w-5 h-5" 
                  style={{ left: '25%', top: '90px', transform: 'rotate(45deg)' }} 
                />
                <Fish 
                  className="absolute text-primary/20 w-7 h-7" 
                  style={{ 
                    left: '45%', 
                    top: '10px',
                    animation: 'swim 3s ease-in-out infinite'
                  }} 
                />
                <Waves 
                  className="absolute text-primary/10 w-8 h-8" 
                  style={{ left: '65%', top: '-80px' }} 
                />
                <Leaf 
                  className="absolute text-primary/20 w-6 h-6" 
                  style={{ left: '85%', top: '100px', transform: 'rotate(120deg)' }} 
                />
              </div>

              {/* River SVG Background */}
              <div className="absolute top-1/2 left-0 right-0 h-48 -translate-y-1/2 pointer-events-none">
                <svg 
                  viewBox="0 0 1000 200" 
                  className="w-full h-full" 
                  preserveAspectRatio="none"
                >
                  <defs>
                    {/* River gradient */}
                    <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                    </linearGradient>
                    
                    {/* Animated water shimmer */}
                    <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="white" stopOpacity="0" />
                      <stop offset="50%" stopColor="white" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                      <animate attributeName="x1" from="-100%" to="100%" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="x2" from="0%" to="200%" dur="3s" repeatCount="indefinite" />
                    </linearGradient>

                    {/* River bank texture */}
                    <filter id="riverTexture">
                      <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
                      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" />
                    </filter>
                  </defs>

                  {/* Outer river banks - organic shape */}
                  <path
                    d="M-20 100 
                       C50 40, 150 40, 200 100 
                       C250 160, 350 170, 400 100 
                       C450 30, 550 20, 600 100 
                       C650 180, 750 170, 800 100 
                       C850 30, 950 40, 1020 100"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="70"
                    strokeOpacity="0.12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Main river body - background */}
                  <path
                    d="M-20 100 
                       C50 40, 150 40, 200 100 
                       C250 160, 350 170, 400 100 
                       C450 30, 550 20, 600 100 
                       C650 180, 750 170, 800 100 
                       C850 30, 950 40, 1020 100"
                    fill="none"
                    stroke="url(#riverGradient)"
                    strokeWidth="45"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Animated flowing river */}
                  <path
                    d="M-20 100 
                       C50 40, 150 40, 200 100 
                       C250 160, 350 170, 400 100 
                       C450 30, 550 20, 600 100 
                       C650 180, 750 170, 800 100 
                       C850 30, 950 40, 1020 100"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="45"
                    strokeOpacity="0.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="2500"
                    strokeDashoffset={2500 - (2500 * pathProgress)}
                    style={{ transition: 'stroke-dashoffset 0.4s ease-out' }}
                  />

                  {/* Water shimmer overlay */}
                  <path
                    d="M-20 100 
                       C50 40, 150 40, 200 100 
                       C250 160, 350 170, 400 100 
                       C450 30, 550 20, 600 100 
                       C650 180, 750 170, 800 100 
                       C850 30, 950 40, 1020 100"
                    fill="none"
                    stroke="url(#shimmer)"
                    strokeWidth="30"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Center current line */}
                  <path
                    d="M-20 100 
                       C50 40, 150 40, 200 100 
                       C250 160, 350 170, 400 100 
                       C450 30, 550 20, 600 100 
                       C650 180, 750 170, 800 100 
                       C850 30, 950 40, 1020 100"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                    strokeDasharray="15 20"
                    strokeLinecap="round"
                  >
                    <animate 
                      attributeName="stroke-dashoffset" 
                      from="0" 
                      to="-35" 
                      dur="1s" 
                      repeatCount="indefinite" 
                    />
                  </path>

                  {/* Small ripple circles */}
                  <circle cx="150" cy="70" r="3" fill="hsl(var(--primary))" fillOpacity="0.3">
                    <animate attributeName="r" values="2;5;2" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="500" cy="100" r="3" fill="hsl(var(--primary))" fillOpacity="0.3">
                    <animate attributeName="r" values="2;5;2" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="850" cy="70" r="3" fill="hsl(var(--primary))" fillOpacity="0.3">
                    <animate attributeName="r" values="2;5;2" dur="1.8s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="1.8s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>

              {/* Timeline Items */}
              <div className="relative h-full flex justify-around items-center px-16">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  const isTop = index % 2 === 0;
                  
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
                        <div className="absolute bottom-[58%] w-52">
                          <div className="block p-4 rounded-xl border border-border bg-card/70 hover:border-primary/50 hover:bg-card/90 transition-all duration-300 backdrop-blur-sm group shadow-lg hover:shadow-xl hover:shadow-primary/10">
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
                          {/* Connector - styled as a bridge/dock */}
                          <div className="absolute left-1/2 -translate-x-1/2 top-full flex flex-col items-center">
                            <div className="w-3 h-3 rounded-full bg-primary/40 border-2 border-primary/60" />
                            <div className="w-0.5 h-6 bg-gradient-to-b from-primary/60 to-primary/20" />
                          </div>
                        </div>
                      )}

                      {/* Milestone marker - styled as river stones */}
                      <div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.institutionColor} border-4 border-background flex items-center justify-center z-20 hover:scale-110 transition-all duration-300 cursor-pointer ${isTop ? 'mt-6' : '-mt-6'}`}
                        style={{
                          boxShadow: pathProgress > (index * 0.25) 
                            ? '0 0 35px hsl(var(--primary) / 0.5), 0 0 70px hsl(var(--primary) / 0.2), inset 0 -3px 10px rgba(0,0,0,0.2)' 
                            : '0 0 15px hsl(var(--primary) / 0.2), inset 0 -3px 10px rgba(0,0,0,0.2)'
                        }}
                      >
                        <Icon className="w-7 h-7 text-white drop-shadow-md" />
                      </div>

                      {/* Bottom Cards */}
                      {!isTop && (
                        <div className="absolute top-[58%] w-52">
                          {/* Connector - styled as a bridge/dock */}
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-full flex flex-col items-center">
                            <div className="w-0.5 h-6 bg-gradient-to-t from-primary/60 to-primary/20" />
                            <div className="w-3 h-3 rounded-full bg-primary/40 border-2 border-primary/60" />
                          </div>
                          <div className="p-4 rounded-xl border border-border bg-card/70 hover:border-primary/50 hover:bg-card/90 transition-all duration-300 backdrop-blur-sm group shadow-lg hover:shadow-xl hover:shadow-primary/10">
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

              {/* River source marker */}
              <div className="absolute top-1/2 left-2 -translate-y-1/2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-primary/50 flex items-center justify-center backdrop-blur-sm">
                  <Waves className="w-4 h-4 text-primary" />
                </div>
              </div>
              
              {/* River flows to... marker */}
              <div className="absolute top-1/2 right-2 -translate-y-1/2">
                <div 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 border-2 border-primary flex items-center justify-center backdrop-blur-sm"
                  style={{
                    boxShadow: pathProgress > 0.9 ? '0 0 35px hsl(var(--primary) / 0.6)' : '0 0 15px hsl(var(--primary) / 0.3)',
                    transition: 'box-shadow 0.5s ease'
                  }}
                >
                  <span className="text-lg">🌊</span>
                </div>
              </div>

              {/* Journey continues message */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <p className="text-muted-foreground text-sm italic flex items-center gap-2">
                  <Waves className="w-4 h-4" />
                  The river flows on...
                  <Waves className="w-4 h-4" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes swim {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          25% { transform: translateX(5px) rotate(5deg); }
          75% { transform: translateX(-5px) rotate(-5deg); }
        }
      `}</style>
    </Layout>
  );
};

export default Journey;
