import { Card } from "@/components/ui/card";
import { Layers, Users, Zap, Shield, Calendar, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Layers,
      title: t('features.multiBoard'),
      description: t('features.multiBoardDesc')
    },
    {
      icon: Users,
      title: t('features.teamCollab'),
      description: t('features.teamCollabDesc')
    },
    {
      icon: Zap,
      title: t('features.automation'),
      description: t('features.automationDesc')
    },
    {
      icon: Shield,
      title: t('features.security'),
      description: t('features.securityDesc')
    },
    {
      icon: Calendar,
      title: t('features.timeline'),
      description: t('features.timelineDesc')
    },
    {
      icon: BarChart3,
      title: t('features.analytics'),
      description: t('features.analyticsDesc')
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('features.title').split(' ').slice(0, -2).join(' ')}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> {t('features.title').split(' ').slice(-2).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
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