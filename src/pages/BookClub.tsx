import { Instagram, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

import bookclubPost1 from "@/assets/bookclub-post-1.jpg";
import bookclubPost2 from "@/assets/bookclub-post-2.png";
import bookclubPost3 from "@/assets/bookclub-post-3.png";
import bookclubPost4 from "@/assets/bookclub-post-4.png";
import bookclubPost5 from "@/assets/bookclub-post-5.png";
import bookclubPost6 from "@/assets/bookclub-post-6.png";

const instagramPosts = [
  { 
    id: 1, 
    image: bookclubPost4,
    title: "Book Haul",
    url: "https://www.instagram.com/the_little_bookclub/"
  },
  { 
    id: 2, 
    image: bookclubPost2,
    title: "Independence",
    url: "https://www.instagram.com/the_little_bookclub/"
  },
  { 
    id: 3, 
    image: bookclubPost3,
    title: "Archer's Voice",
    url: "https://www.instagram.com/the_little_bookclub/"
  },
  { 
    id: 4, 
    image: bookclubPost1,
    title: "Rock Paper Scissors",
    url: "https://www.instagram.com/the_little_bookclub/"
  },
  { 
    id: 5, 
    image: bookclubPost5,
    title: "Fall Reading",
    url: "https://www.instagram.com/the_little_bookclub/"
  },
  { 
    id: 6, 
    image: bookclubPost6,
    title: "Valmiki's Women",
    url: "https://www.instagram.com/the_little_bookclub/"
  },
];

const BookClub = () => {
  const instagramUrl = "https://www.instagram.com/the_little_bookclub/";

  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,hsl(158_65%_45%/0.05)_0%,transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-foreground">The Little </span>
            <span className="text-primary">Book Club</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-4">
            Curating stories that bridge science, nature, and human experience. Each book offers new perspectives on our relationship with the natural world.
          </p>

          {/* Instagram Link */}
          <a 
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mb-8 group"
          >
            <Instagram className="w-5 h-5" />
            <span className="font-medium">@the_little_bookclub</span>
            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>

          <blockquote className="border-l-4 border-primary pl-6 py-4 mb-12 max-w-2xl">
            <p className="text-lg italic text-muted-foreground">
              "Stories have the power to change how we see the world. Through books, I explore different lenses for understanding our place in nature's grand narrative."
            </p>
          </blockquote>

          {/* Instagram Posts Grid */}
          <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
            Recent Posts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="aspect-square bg-card/50 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0 h-full relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-center">
            Follow my reading journey and join the conversation about books that shape our understanding of nature.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BookClub;
