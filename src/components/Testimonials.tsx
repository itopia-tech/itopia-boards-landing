import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Project Manager",
      company: "TechFlow Solutions",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "ITopIA Boards transformed how our team manages projects. The intuitive interface and powerful features help us stay organized and meet deadlines consistently."
    },
    {
      name: "James Chen",
      role: "Software Engineer",
      company: "DevCorp Inc.",
      avatar: "/placeholder.svg", 
      rating: 5,
      text: "As a developer, I love how customizable ITopIA Boards is. The automation features save us hours every week, and the real-time collaboration is seamless."
    },
    {
      name: "Sarah Thompson",
      role: "Marketing Director",
      company: "Creative Agency",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Our marketing campaigns are complex with many moving parts. ITopIA Boards keeps everything organized and our team aligned from concept to execution."
    },
    {
      name: "Alex Kumar",
      role: "Startup Founder",
      company: "InnovateLab",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Running a startup means wearing many hats. ITopIA Boards helps me track everything from product development to investor relations in one place."
    },
    {
      name: "Emily Davis",
      role: "Operations Manager",
      company: "Global Logistics",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "Managing operations across multiple time zones was challenging until we found ITopIA Boards. The visibility and coordination it provides is incredible."
    },
    {
      name: "Michael Brown",
      role: "Design Lead",
      company: "UX Studio",
      avatar: "/placeholder.svg",
      rating: 5,
      text: "The visual approach of ITopIA Boards aligns perfectly with how designers think. It's become an essential tool for managing our creative projects."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Loved by Teams
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of teams who have transformed their productivity with ITopIA Boards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border-border hover:border-primary/20 transition-all duration-300 hover:shadow-card bg-card/80 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              
              <blockquote className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="bg-gradient-secondary text-white">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;