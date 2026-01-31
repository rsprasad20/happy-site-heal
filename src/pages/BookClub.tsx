import { useState } from "react";
import { Instagram, ExternalLink, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
  },
  { 
    id: 2, 
    image: bookclubPost2,
    title: "Independence",
  },
  { 
    id: 3, 
    image: bookclubPost3,
    title: "Archer's Voice",
  },
  { 
    id: 4, 
    image: bookclubPost1,
    title: "Rock Paper Scissors",
  },
  { 
    id: 5, 
    image: bookclubPost6,
    title: "Valmiki's Women",
  },
  { 
    id: 6, 
    image: bookclubPost5,
    title: "Fall Reading",
  },
];

const BookClub = () => {
  const instagramUrl = "https://www.instagram.com/the_little_bookclub/";
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

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
            A curated book review project celebrating stories across genres, from thrillers and historical fiction to literary fiction and romance. The Little Bookclub is a personal passion project built on diverse books, honest reviews, and a love of getting lost in reading.
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

          <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
            Recent Posts
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {instagramPosts.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedImage({ image: post.image, title: post.title })}
                className="group block text-left cursor-pointer"
              >
                <Card className="aspect-square bg-card/50 border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0 h-full relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </CardContent>
                </Card>
              </button>
            ))}
          </div>

          <p className="text-muted-foreground text-center">
            Follow my reading journey and join the conversation about books that shape our understanding of nature.
          </p>
        </div>
      </section>

      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default BookClub;
