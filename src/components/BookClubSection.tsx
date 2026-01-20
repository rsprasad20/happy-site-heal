import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const books = [
  {
    title: "The Sixth Extinction",
    author: "Elizabeth Kolbert",
    category: "Conservation",
    featured: true,
    review: "A profound exploration of humanity's impact on biodiversity. Kolbert's investigative journalism brings clarity to complex ecological concepts.",
    readDate: "March 2024"
  },
  {
    title: "Lab Girl",
    author: "Hope Jahren",
    category: "Science Memoir",
    review: "Jahren beautifully weaves personal narrative with botanical science. A must-read for anyone passionate about plant life.",
    readDate: "February 2024"
  },
  {
    title: "The Hidden Life of Trees",
    author: "Peter Wohlleben",
    category: "Nature",
    review: "Fascinating insights into forest ecosystems and tree communication. Changes how you view forest walks forever.",
    readDate: "January 2024"
  },
  {
    title: "Braiding Sweetgrass",
    author: "Robin Wall Kimmerer",
    category: "Indigenous Knowledge",
    review: "Kimmerer bridges indigenous wisdom and scientific knowledge beautifully. Essential reading for modern conservationists.",
    readDate: "December 2023"
  },
  {
    title: "The Soul of an Octopus",
    author: "Sy Montgomery",
    category: "Marine Biology",
    review: "Montgomery's intimate portraits of octopi reveal incredible intelligence and emotional depth in marine life.",
    readDate: "November 2023"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Anthropology",
    review: "Thought-provoking analysis of human evolution and our relationship with the natural world.",
    readDate: "October 2023"
  }
];

const BookClubSection = () => {
  return (
    <section id="books" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,hsl(158_65%_45%/0.05)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          <span className="text-foreground">The Little</span>
          <span className="text-primary">Book Club</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          Curating stories that bridge science, nature, and human experience. Each book offers new perspectives on our relationship with the natural world.
        </p>

        <blockquote className="border-l-4 border-primary pl-6 py-4 mb-12 max-w-2xl">
          <p className="text-lg italic text-muted-foreground">
            "Stories have the power to change how we see the world. Through books, I explore different lenses for understanding our place in nature's grand narrative."
          </p>
        </blockquote>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {books.map((book) => (
            <Card key={book.title} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {book.featured && (
                        <Badge className="bg-accent/20 text-accent border-accent/30 text-xs">Featured</Badge>
                      )}
                      <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                        {book.category}
                      </Badge>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {book.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">{book.author}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{book.review}</p>
                    <p className="text-xs text-accent mt-3">Read in {book.readDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-muted-foreground text-center">
          Follow my reading journey and join the conversation about books that shape our understanding of nature.
        </p>
      </div>
    </section>
  );
};

export default BookClubSection;
