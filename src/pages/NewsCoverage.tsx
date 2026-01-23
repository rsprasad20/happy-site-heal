import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";

const newsCoverage = [
  {
    title: "Rainfall, acreage influence community adoption of elephant mitigation measures, says study",
    outlet: "Mongabay",
    url: "https://india.mongabay.com/short-article/2025/10/rainfall-acreage-influence-community-adoption-of-elephant-mitigation-measures-says-study/"
  },
  {
    title: "Study finds trenches are leading cause of elephant injuries and solar fences account for quarter of elephant deaths in Karnataka",
    outlet: "The Hindu",
    url: "https://www.thehindu.com/sci-tech/energy-and-environment/study-finds-trenches-are-leading-cause-of-elephant-injuries-and-solar-fences-account-for-quarter-of-elephant-deaths-in-karnataka/article70135603.ece"
  },
  {
    title: "Man-elephant conflict depends upon environment, socio-economic factors",
    outlet: "New Indian Express",
    url: "https://www.newindianexpress.com/states/karnataka/2025/Oct/08/man-elephant-conflict-depends-upon-environment-socio-economic-factors"
  },
  {
    title: "Trenches leading cause for elephant injuries: Study",
    outlet: "The Times of India",
    url: "https://timesofindia.indiatimes.com/city/mangaluru/trenches-leading-cause-for-elephant-injuries-study/articleshow/124395031.cms"
  }
];

const NewsCoverage = () => {
  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(158_65%_45%/0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            <span className="text-foreground">Scientific </span>
            <span className="text-primary">Communications</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary mb-4">
            News Coverage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Media coverage and press mentions highlighting research on human-wildlife conflict and conservation efforts.
          </p>

          <div className="grid gap-4">
            {newsCoverage.map((news, index) => (
              <a
                key={index}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
              >
                <div>
                  <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">{news.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{news.outlet}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
              </a>
            ))}
          </div>

          {/* Webinars Section */}
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary mt-16 mb-8">
            Webinars
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Webinars and online presentations on conservation research and human-wildlife coexistence.
          </p>
          <div className="grid gap-4">
            <a
              href="https://www.youtube.com/watch?v=Qmwgof2As5c"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">CWS Wildlife Chronicles #18 - The Role of Economics in Conserving Nature</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=KsMK5t5zIts"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">CWS Wildlife Chronicles #26 - Illegal Trafficking & Wildlife Trade Markets</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=OJsiSrVpk3Y"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">CWS Wildlife Chronicles #36 - Collaborative Conservation Action: Participatory techniques to engage with stakeholders</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=syk-XMdpCZc"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">CWS Wildlife Chronicles #43 - Into troubled waters: Exploring the impact of trawling on marine ecosystems</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=CjBFPzcDhhg&list=PLBKlT-SXjCRMDz6rwbOOP03VxKGygxi1V&index=51"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">CWS Wildlife Chronicles #51 - Delving into Amphibian Ecology for Conservation</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
          </div>

          {/* Blog Articles Section */}
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary mt-16 mb-8">
            Blog Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Written articles and blog posts on conservation topics, research insights, and field experiences.
          </p>
          <div className="grid gap-4">
            <a
              href="https://cwsindia.org/tracing-the-disappearances-of-mammals-in-india/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">Tracing the disappearances of mammals in India</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
            <a
              href="https://cwsindia.org/impacts-of-hydropower-projects/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">Impacts of small hydropower projects on freshwater fish communities in the Western Ghats</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
            <a
              href="https://cwsindia.org/the-state-of-fisheries-management-in-india-utilising-fishermens-perceptions-to-identify-trends-of-sustainability/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">The state of fisheries management in India: utilising fishermen's perceptions to identify trends of sustainability</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
            <a
              href="https://cwsindia.org/voluntary-resettlement-in-india-important-learnings-to-support-communities/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">Voluntary Resettlement in India: Important learnings to support communities</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
            <a
              href="https://cwsindia.org/connectivity-through-corridors-habitat-composition-interactions-with-humans-and-ecological-limitations-shape-tiger-conservation-centre-for-wildlife-studies/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">Connectivity through corridors: Habitat composition, interactions with humans, and ecological limitations shape tiger conservation</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
            <a
              href="https://cwsindia.org/protected-areas-and-their-surrounding-landscapes-exploring-interactions-in-wildlife-reserves/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 rounded-xl border border-border bg-card/30 hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div>
                <p className="text-lg text-foreground font-medium group-hover:text-primary transition-colors">Protected Areas and their surrounding landscapes: Exploring interactions in wildlife reserves</p>
              </div>
              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsCoverage;
