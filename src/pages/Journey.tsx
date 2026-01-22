import Layout from "@/components/Layout";

const timeline = [
  { year: "2026", title: "Post Doctoral Researcher - Centre for Wildlife Studies, Remotely based in Dubai UAE" },
  { year: "2020", title: "Doctoral Researcher - Centre for Wildlife Studies, Bengaluru, India" },
  { year: "2020", title: "Master of Science Ecology, Evolution & Conservation - Imperial College London, London UK" },
  { year: "2016", title: "Bachelor of Science (Hons.) Zoology with Marine Zoology - Bangor University, Wales UK" },
];

const Journey = () => {
  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(158_65%_45%/0.05)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-foreground">Journey </span>
            <span className="text-primary">Timeline</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            A chronological overview of my academic and professional journey in wildlife conservation and research.
          </p>

          <div className="relative max-w-3xl">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-primary/30" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 transition-all duration-300">
                    <p className="text-accent font-bold text-xl mb-2">{item.year}</p>
                    <p className="text-foreground text-lg">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Journey;
