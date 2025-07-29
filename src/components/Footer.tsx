import { Button } from "@/components/ui/button";
import { Trello, Twitter, Github, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Trello className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">ITopIA Boards</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Transform your project management with intuitive boards, lists, and cards. 
              Built for teams who demand simplicity without sacrificing power.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Templates</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Status</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 ITopIA Boards. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;