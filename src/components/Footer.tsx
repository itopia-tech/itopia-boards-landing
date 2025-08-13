import { Button } from "@/components/ui/button";
import { Trello, Twitter, Github, Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
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
              {t('footer.tagline')}
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
            <h4 className="text-lg font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('footer.features')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('footer.pricing')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('footer.templates')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('footer.api')}</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.support')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('footer.help')}</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">{t('footer.status')}</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">{t('footer.contactUs')}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/80 text-sm mb-4 md:mb-0">
              © 2025 ITopIA Boards. {t('footer.allRights')}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">{t('footer.terms')}</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;