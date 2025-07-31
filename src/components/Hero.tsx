import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Organize Your
            <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text"> Projects </span>
            Like Never Before
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            ITopIA Boards transforms the way you manage tasks with intuitive boards, lists, and cards. 
            Experience project management that adapts to your workflow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="https://tasks.itopia.tech/" target="_blank" rel="noopener noreferrer">
                Try Demo Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="glass" size="lg" className="group">
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>

          {/* Feature preview cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-gradient-card backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 bg-accent rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Visual Boards</h3>
              <p className="text-white/70 text-sm">Organize projects with intuitive Kanban-style boards</p>
            </div>
            
            <div className="bg-gradient-card backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-4 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Lists</h3>
              <p className="text-white/70 text-sm">Create flexible lists that adapt to your workflow</p>
            </div>
            
            <div className="bg-gradient-card backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-3 bg-secondary rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Dynamic Cards</h3>
              <p className="text-white/70 text-sm">Rich cards with attachments, due dates, and more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;