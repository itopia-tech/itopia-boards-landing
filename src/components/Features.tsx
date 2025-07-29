import { Card } from "@/components/ui/card";
import { Layers, Users, Zap, Shield, Calendar, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Layers,
      title: "Multi-Board Management",
      description: "Create unlimited boards for different projects, teams, or workflows. Each board is a separate workspace tailored to your needs."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Invite team members, assign tasks, and collaborate in real-time. Comments, mentions, and notifications keep everyone aligned."
    },
    {
      icon: Zap,
      title: "Automation & Templates",
      description: "Automate repetitive tasks with custom rules and start projects faster with pre-built templates for common workflows."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, SSO integration, and granular permission controls to keep your data safe."
    },
    {
      icon: Calendar,
      title: "Timeline & Deadlines",
      description: "Set due dates, create milestones, and visualize project timelines. Never miss important deadlines again."
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Track team productivity, identify bottlenecks, and make data-driven decisions with comprehensive analytics."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Powerful Features for
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Every Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ITopIA Boards combines simplicity with powerful features to help teams of all sizes 
            stay organized and productive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card group bg-card/50 backdrop-blur-sm">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;