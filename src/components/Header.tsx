import { Button } from "@/components/ui/button";
import { Menu, Trello } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-card backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trello className="h-8 w-8 text-accent" />
          <span className="text-2xl font-bold text-white">ITopIA Boards</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
            Pricing
          </a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {/* <Button variant="glass" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button> */}
          <Button variant="hero" size="sm" asChild>
            <a href="https://tasks.itopia.tech/" target="_blank" rel="noopener noreferrer">
              Try Demo
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;