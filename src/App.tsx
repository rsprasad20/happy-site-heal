import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Research from "./pages/Research";
import NewsCoverage from "./pages/NewsCoverage";
import Journey from "./pages/Journey";
import BookClub from "./pages/BookClub";
import Creative from "./pages/Creative";
import Blog from "./pages/Blog";
import Collaborate from "./pages/Collaborate";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/research" element={<Research />} />
          <Route path="/news-coverage" element={<NewsCoverage />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/book-club" element={<BookClub />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/collaborate" element={<Collaborate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
