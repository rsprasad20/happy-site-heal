import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "AI in Wildlife Conservation: A New Frontier",
    excerpt: "Exploring how machine learning algorithms are revolutionizing species monitoring and habitat preservation efforts across the globe.",
    category: "AI & Technology",
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["AI", "Conservation", "Technology"],
    featured: true
  },
  {
    title: "The Language of Trees: What Forests Tell Us",
    excerpt: "Insights from recent research on plant communication and how understanding these networks can inform conservation strategies.",
    category: "Research Insights",
    date: "March 8, 2024",
    readTime: "6 min read",
    tags: ["Research", "Ecology"]
  },
  {
    title: "Field Notes: Tracking Tigers in Ranthambore",
    excerpt: "Personal reflections from recent fieldwork documenting tiger behavior patterns and the challenges of modern wildlife research.",
    category: "Field Diary",
    date: "February 28, 2024",
    readTime: "5 min read",
    tags: ["Fieldwork", "Tigers"]
  },
  {
    title: "Data Storytelling for Conservation Impact",
    excerpt: "How effective data visualization and narrative techniques can bridge the gap between scientific research and public engagement.",
    category: "Communication",
    date: "February 20, 2024",
    readTime: "7 min read",
    tags: ["Data Science", "Communication"]
  },
  {
    title: "Book Review: The Hidden Reality of Animal Intelligence",
    excerpt: "A deep dive into recent publications exploring animal cognition and what they reveal about consciousness in the natural world.",
    category: "Book Reviews",
    date: "February 12, 2024",
    readTime: "4 min read",
    tags: ["Books", "Animal Cognition"]
  },
  {
    title: "Balancing Academia and Activism in Conservation",
    excerpt: "Navigating the intersection of rigorous scientific research and urgent conservation action in today's rapidly changing world.",
    category: "Perspective",
    date: "February 5, 2024",
    readTime: "6 min read",
    tags: ["Academia", "Activism"]
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,hsl(158_65%_45%/0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          <span className="text-foreground">Thoughts &</span>
          <span className="text-primary">Reflections</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          Sharing insights from the field, research discoveries, and reflections on the intersection of technology, nature, and storytelling.
        </p>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card 
              key={post.title} 
              className={`bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {post.featured && (
                    <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">Featured</Badge>
                  )}
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {post.category}
                  </Badge>
                </div>

                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-border text-muted-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <button className="flex items-center gap-1 text-sm text-primary hover:underline group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
