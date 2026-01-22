import Navigation from "@/components/Navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>{children}</main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center text-sm text-muted-foreground">
          <p>© 2024 Dr. Simran Prasad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
