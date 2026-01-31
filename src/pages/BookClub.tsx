import Layout from "@/components/Layout";

const BookClub = () => {
  return (
    <Layout>
      <section className="py-24 pt-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,hsl(158_65%_45%/0.05)_0%,transparent_50%)]" />
        
        <div className="container mx-auto px-6 lg:px-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            <span className="text-foreground">The Little </span>
            <span className="text-primary">Book Club</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Curating stories that bridge science, nature, and human experience. Each book offers new perspectives on our relationship with the natural world.
          </p>

          <blockquote className="border-l-4 border-primary pl-6 py-4 mb-12 max-w-2xl">
            <p className="text-lg italic text-muted-foreground">
              "Stories have the power to change how we see the world. Through books, I explore different lenses for understanding our place in nature's grand narrative."
            </p>
          </blockquote>

          <p className="text-muted-foreground text-center">
            Follow my reading journey and join the conversation about books that shape our understanding of nature.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default BookClub;
