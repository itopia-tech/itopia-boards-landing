import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageSquare, Phone, MapPin, Loader2 } from "lucide-react";
import { sendContactEmail, type ContactFormData } from "@/services/emailService";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const createContactSchema = (t: (key: string) => string) => z.object({
  name: z.string().min(2, t('contact.nameRequired')),
  email: z.string().email(t('contact.emailInvalid')),
  subject: z.string().min(3, t('contact.subjectRequired')),
  message: z.string().min(10, t('contact.messageRequired')),
});

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactSchema = createContactSchema(t);
  type ContactFormInputs = z.infer<typeof contactSchema>;
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);
    
    try {
      const formData: ContactFormData = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        product: "ITopIA Boards",
      };

      await sendContactEmail(formData);
      
      toast({
        title: t('contact.success'),
        description: t('contact.successDescription'),
      });
      
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t('contact.error'),
        description: t('contact.errorDescription'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('contact.title').split(' ').slice(0, -1).join(' ')}
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> {t('contact.title').split(' ').slice(-1)}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-border bg-card/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground">{t('contact.formTitle')}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-card-foreground">{t('contact.name')} *</Label>
                  <Input 
                    id="name"
                    {...register("name")}
                    placeholder={t('contact.namePlaceholder')} 
                    className="mt-2 border-border focus:border-primary"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="text-card-foreground">{t('contact.email')} *</Label>
                  <Input 
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder={t('contact.emailPlaceholder')} 
                    className="mt-2 border-border focus:border-primary"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-card-foreground">{t('contact.subject')} *</Label>
                <Input 
                  id="subject"
                  {...register("subject")}
                  placeholder={t('contact.subjectPlaceholder')} 
                  className="mt-2 border-border focus:border-primary"
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="text-destructive text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-card-foreground">{t('contact.message')} *</Label>
                <Textarea 
                  id="message"
                  {...register("message")}
                  placeholder={t('contact.messagePlaceholder')} 
                  rows={5}
                  className="mt-2 border-border focus:border-primary resize-none"
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                variant="default" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t('contact.sending')}
                  </>
                ) : (
                  <>
                    <MessageSquare className="mr-2 h-5 w-5" />
                    {t('contact.send')}
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">{t('contact.infoTitle')}</h3>
              <p className="text-muted-foreground mb-8">
                {t('contact.infoDescription')}
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{t('contact.emailSupport')}</h4>
                    <p className="text-muted-foreground">contacto.itopia@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{t('contact.phoneSupport')}</h4>
                    <p className="text-muted-foreground">+5989912345600000</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 transition-colors">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">{t('contact.officeLocation')}</h4>
                    <p className="text-muted-foreground">Montevideo City<br />Mvdeo City, TC 12345</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* <div className="bg-gradient-card backdrop-blur-md rounded-xl p-6 border border-white/10 text-white">
              <h4 className="font-semibold mb-2">Need Immediate Help?</h4>
              <p className="text-white/80 text-sm mb-4">
                Check out our comprehensive documentation or join our community forum for instant answers.
              </p>
              <div className="flex space-x-3">
                <Button variant="glass" size="sm">Documentation</Button>
                <Button variant="glass" size="sm">Community</Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;