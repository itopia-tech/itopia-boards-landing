import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need help getting started? Our team is here to support you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-border bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-card-foreground">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="mt-2 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-card-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="mt-2 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-card-foreground">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What can we help you with?" 
                  className="mt-2 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-card-foreground">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project or question..." 
                  rows={5}
                  className="mt-2 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button variant="default" size="lg" className="w-full">
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of these channels. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Email Support</h4>
                    <p className="text-muted-foreground">support@itopiaboards.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Phone Support</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Office Location</h4>
                    <p className="text-muted-foreground">123 Innovation Drive<br />Tech City, TC 12345</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-gradient-card backdrop-blur-md rounded-xl p-6 border border-white/10 text-white">
              <h4 className="font-semibold mb-2">Need Immediate Help?</h4>
              <p className="text-white/80 text-sm mb-4">
                Check out our comprehensive documentation or join our community forum for instant answers.
              </p>
              <div className="flex space-x-3">
                <Button variant="glass" size="sm">Documentation</Button>
                <Button variant="glass" size="sm">Community</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;