import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
// import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      {/* <Testimonials /> */}
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
