import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-card backdrop-blur-md rounded-full p-4 border border-white/20">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Transform
            <span className="text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text"> Your Workflow?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of teams who have revolutionized their project management. 
            Start your free trial today and experience the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="hero" size="lg" className="group text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="bg-gradient-card backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold mb-2">14 Days</div>
              <div className="text-white/70">Free Trial</div>
            </div>
            <div className="bg-gradient-card backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold mb-2">No Setup</div>
              <div className="text-white/70">Ready in Minutes</div>
            </div>
            <div className="bg-gradient-card backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/70">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;