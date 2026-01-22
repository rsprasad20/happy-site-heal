import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";
import Layout from "@/components/Layout";
import fieldwork1 from "@/assets/fieldwork-1.jpg";
import fieldwork2 from "@/assets/fieldwork-2.jpg";
import fieldwork3 from "@/assets/fieldwork-3.jpg";
import fieldwork4 from "@/assets/fieldwork-4.jpg";
import fieldwork5 from "@/assets/fieldwork-5.jpg";
import fieldwork6 from "@/assets/fieldwork-6.jpg";
import fieldwork7 from "@/assets/fieldwork-7.jpg";
import fieldwork8 from "@/assets/fieldwork-8.jpg";
import fieldwork9 from "@/assets/fieldwork-9.jpg";
import fieldwork10 from "@/assets/fieldwork-10.jpg";
import fieldwork11 from "@/assets/fieldwork-11.jpg";
import fieldwork12 from "@/assets/fieldwork-12.jpg";
import fieldwork13 from "@/assets/fieldwork-13.jpg";

const fieldworkImagesBase = [
  { src: fieldwork1, alt: "Sunset over the mountains of the Western Ghats" },
  { src: fieldwork2, alt: "Bandipur National Park, Karnataka India" },
  { src: fieldwork3, alt: "Fieldwork in the Shola Forest, Tamil Nadu India" },
  { src: fieldwork4, alt: "Fieldwork in Palakkad Forests, Kerala India" },
  { src: fieldwork5, alt: "Tea plantation landscape in the Nilgiris, Tamil Nadu India" },
  { src: fieldwork6, alt: "Hickory Nut collection by local communities Mannarkkad, Kerala India" },
  { src: fieldwork7, alt: "Elephant in Nagarahole National Park, Karnataka India" },
  { src: fieldwork8, alt: "A herd of elephants in Bandipur National Park, Karnataka India" },
  { src: fieldwork9, alt: "Elephant in Nagarahole National Park, Karnataka India" },
  { src: fieldwork10, alt: "Tiger spotting in Nagarahole National Park, Karnataka India" },
  { src: fieldwork11, alt: "Speaking engagement at Imperial College London Event, Bengaluru India" },
  { src: fieldwork12, alt: "Nitrox Scuba dive at Magic point (Wobbegong Shark Nursery) Sydney, Australia" },
  { src: fieldwork13, alt: "Poster Award ATBC Meeting Kigali, Rwanda" },
];

// Shuffle array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const fieldworkImages = shuffleArray(fieldworkImagesBase);

const fieldworkVideos = [
  { src: "/videos/fieldwork-video-1.mp4", title: "Wildlife in the Field", thumbnail: fieldwork7 },
  { src: "/videos/fieldwork-video-2.mp4", title: "Research Expedition", thumbnail: fieldwork4 },
  { src: "/videos/fieldwork-video-3.mp4", title: "Conservation Work", thumbnail: fieldwork3 },
];

const projects = [
  {
    title: "Examining Spatio-Temporal Compensation Patterns of Human–Wildlife Conflict Across India",
    location: "Across India",
    year: "2025-2026",
    status: "Ongoing",
    institute: { name: "Centre for Wildlife Studies (CWS)", url: "https://cwsindia.org" },
    description: "This project analyzes spatio-temporal patterns of human–wildlife conflict and associated ex-gratia compensation across India using a comprehensive dataset spanning 20 years and 28 States. By integrating large-scale compensation records from forest departments, the study examines trends, regional disparities, and temporal changes in compensation payments to communities affected by wildlife conflict. Quantitative and econometric methods are employed to assess how compensation patterns vary across space and time, with implications for equity, policy effectiveness, and conservation governance.",
    impact: "Worked with 700+ Forest Divisions across 28 States in India for data collection",
    tags: ["Quantitative Analyses", "Econometric Methods", "R", "Conservation Science Methods"]
  },
  {
    title: "Investigating Environmental & Socio-Economic Drivers of Human-Elephant Conflict",
    location: "Location: Bandipur National Park, Nagarahole National Park, Palakkad and Mannarkkad Forest Divisions",
    year: "2020-2025",
    status: "Ongoing",
    institute: { name: "Centre for Wildlife Studies (CWS)", url: "https://cwsindia.org" },
    description: "The Asian elephant (Elephas maximus) is distributed over thirteen range states across Asia. Classified as 'Endangered' on the IUCN Red List of Threatened Species, elephants face particular challenges, as habitat ranges have contracted significantly over the last 50 years. This is mainly due to human influence in natural spaces, resulting in increased human–elephant interactions, many of which evolve into negative interactions (termed conflict). In India, elephants are the primary conflict-prone species, causing substantial damages to people through crop loss, property damage and even injury or loss of life. As a result of these occurrences, this project focuses on understanding important drivers that lead to injury and death of people and elephants. Drivers of conflict can vary and involve factors influenced by local agrarian economies, socio-economic variables, and ecological parameters. By identifying different socio-economic and ecological drivers through detailed field surveys with local community members, this project will focus on human and elephant casualty and mortality patterns and the solutions that can mitigate conflict incidences.",
    impact: "500+ Field Interviews, 4 Publications",
    tags: ["Field Surveys", "Mixed Methods", "GIS", "R", "Thematic Analysis"]
  },
  {
    title: "Assessing Drivers Affecting the Presence of the Sunda Pangolin",
    scientificName: "Manis javanica",
    titleSuffix: "in Contrasting Thailand Landscapes",
    location: "London, UK",
    year: "2020",
    status: "Completed",
    institute: { name: "Imperial College London (ICL)", url: "https://www.imperial.ac.uk/natural-sciences/" },
    description: "The critically endangered Sunda pangolin represents the most illegally traded mammal in the world. As a result of long-term overexploitation for traditional medicine and meat consumption, these cryptic animals are on the brink of extinction. The project combined socioeconomic and ecological factors using community and ranger surveys to assess anthropogenic effects on the presence of Sunda pangolins. The primary goal was to support management plans that effectively conserve pangolins in different ecological landscapes.",
    impact: "Demand reduction project report with ZSL Thailand, TRAFFIC and the Wildlife Trade Monitoring Network",
    tags: ["Illegal Wildlife Trade", "Socio-economic Research", "Quantitative Data Analysis"]
  },
  {
    title: "Investigating the Electromagneto Reception in Homing Pigeons",
    location: "Bangor, Wales",
    year: "2019",
    status: "Completed",
    institute: { name: "Bangor University", url: "https://www.bangor.ac.uk/sens" },
    description: "The project was designed to establish a behavioural approach demonstrating the use of geomagnetic field for navigation in homing pigeons, a model species for navigational studies. For the project, we used a novel experimental approach - GPS tracking with high frequency (one fix per second) loggers attached on the birds during homing flights (all prior studies relied on visual observations at release sites) - and the state-of-the-art data analysis approach to handle big amount of data. The project involved a critical review of the relevant literature in the last 60 years, fieldwork with pigeons around Bangor (North Wales), and a comprehensive analysis of datasets generated by the trackers using custom written R scripts and application of circular statistics using specialized software.",
    impact: "Identified future directions for Avian navigation abilities",
    tags: ["Avian Navigation", "Oriana", "R"]
  }
];

const stats = [
  { value: "4+", label: "Active Projects" },
  { value: "600+", label: "Publications Read" },
  { value: "8", label: "Publications" },
  { value: "3", label: "Conservation Awards" },
];

const Research = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,hsl(158_65%_45%/0.05)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-primary">Research</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Utilizing robust, interdisciplinary methods to answer novel questions and tackle conservation challenges across diverse landscapes and ecosystems.
          </p>

          {/* Fieldwork Image Carousel */}
          <div className="relative mb-16">
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {fieldworkImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden group bg-card/30 flex items-center justify-center">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-[400px] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                        <p className="text-foreground font-medium text-center">{image.alt}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-serif font-bold text-foreground">Fieldwork in Action</h3>
              <p className="text-muted-foreground">Documenting my research activities</p>
            </div>
          </div>

          {/* Fieldwork Videos */}
          <h3 className="text-2xl font-semibold text-foreground mb-8">Field Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {fieldworkVideos.map((video, index) => (
              <div 
                key={index}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedVideo(video.src)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-[200px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center group-hover:bg-background/30 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                  <p className="text-foreground font-medium">{video.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video Dialog */}
          <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
            <DialogContent className="max-w-4xl p-0 bg-background border-border">
              {selectedVideo && (
                <video 
                  src={selectedVideo} 
                  controls 
                  autoPlay 
                  className="w-full rounded-lg"
                />
              )}
            </DialogContent>
          </Dialog>

          {/* Research Projects */}
          <h3 className="text-2xl font-semibold text-foreground mb-8">Research Projects</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {projects.map((project) => (
              <Card key={project.title} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                        {project.scientificName && <em> ({project.scientificName})</em>}
                        {project.titleSuffix && ` ${project.titleSuffix}`}
                      </h4>
                      <p className="text-sm text-muted-foreground">{project.location} • {project.year}</p>
                      {project.institute && (
                        <p className="text-sm text-muted-foreground">
                          Institute: <a href={project.institute.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{project.institute.name}</a>
                        </p>
                      )}
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <p className="text-sm text-accent font-medium mb-3">Impact: {project.impact}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-border text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 rounded-xl border border-border bg-card/30">
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Research;
