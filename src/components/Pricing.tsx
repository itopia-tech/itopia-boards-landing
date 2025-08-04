import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface BenefitProps {
  text: string;
  checked: boolean;
}

const Benefit = ({ text, checked }: BenefitProps) => {
  return (
    <div className="flex items-center gap-4">
      {checked ? (
        <span className="grid size-5 place-content-center rounded-full bg-gradient-secondary text-white shadow-glow">
          <Check className="size-3" />
        </span>
      ) : (
        <span className="grid size-5 place-content-center rounded-full bg-muted text-muted-foreground">
          <X className="size-3" />
        </span>
      )}
      <span className="text-foreground font-medium">{text}</span>
    </div>
  );
};

interface PricingCardProps {
  tier: string;
  price: string;
  bestFor: string;
  CTA: string;
  benefits: Array<{ text: string; checked: boolean }>;
  className?: string;
  featured?: boolean;
}

const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
  featured = false,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)", y: 20, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="h-full"
    >
      <Card
        className={cn(
          "relative h-full w-full overflow-hidden border",
          "bg-gradient-card backdrop-blur-md shadow-card hover:shadow-glow transition-all duration-300",
          "p-8 hover:scale-[1.02]",
          featured && "ring-2 ring-primary/50 scale-105 border-primary/30",
          className
        )}
      >
        <div className="flex flex-col items-center border-b pb-8 border-border">
          <span className="mb-6 inline-block text-lg font-semibold text-primary uppercase tracking-wide">
            {tier}
          </span>
          <span className="mb-4 inline-block text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-center text-muted-foreground font-medium">
            {bestFor}
          </span>
        </div>
        <div className="space-y-5 py-8">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
        <Button
          className={cn(
            "w-full py-3 text-base font-semibold transition-smooth",
            featured
              ? "variant-hero"
              : "variant-glass"
          )}
          variant={featured ? "hero" : "glass"}
        >
          {CTA}
        </Button>
      </Card>
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="relative overflow-hidden bg-gradient-hero text-white min-h-screen py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-16 space-y-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl bg-gradient-primary bg-clip-text text-transparent"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-white/80 md:text-xl max-w-2xl mx-auto"
          >
            Choose the perfect plan for your team. Start free and scale as you grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <PricingCard
            tier="Free"
            price="$0/mo"
            bestFor="Perfect for individuals"
            CTA="Get Started Free"
            benefits={[
              { text: "Up to 3 boards", checked: true },
              { text: "Unlimited personal lists", checked: true },
              { text: "Basic templates", checked: true },
              { text: "Email support", checked: true },
              { text: "Team collaboration", checked: false },
              { text: "Advanced integrations", checked: false },
            ]}
          />
          
          <PricingCard
            tier="Pro"
            price="$12/mo"
            bestFor="Best for small teams"
            CTA="Start Free Trial"
            featured={true}
            benefits={[
              { text: "Unlimited boards", checked: true },
              { text: "Team collaboration", checked: true },
              { text: "Advanced templates", checked: true },
              { text: "Priority support", checked: true },
              { text: "Custom workflows", checked: true },
              { text: "Analytics dashboard", checked: false },
            ]}
          />
          
          <PricingCard
            tier="Enterprise"
            price="Custom"
            bestFor="For large organizations"
            CTA="Contact Sales"
            benefits={[
              { text: "Everything in Pro", checked: true },
              { text: "Advanced integrations", checked: true },
              { text: "Analytics dashboard", checked: true },
              { text: "Custom branding", checked: true },
              { text: "SSO & security", checked: true },
              { text: "Dedicated support", checked: true },
            ]}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;