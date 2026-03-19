import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import videoImg from "@/assets/video-production.jpg";
import socialImg from "@/assets/social-media.jpg";
import brandImg from "@/assets/brand-design.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Video Editing & Production",
    desc: "We craft powerful videos that don't just tell your story — they spark emotion, captivate attention, and leave a lasting impact on your audience.",
    edge: "Our edge lies in storytelling that reflects the real journeys of African entrepreneurs. Through authentic, resonant narratives, we create content that forges genuine connections.",
    image: videoImg,
    accent: "border-primary",
  },
  {
    title: "Social Media Management",
    desc: "We strategically power your social media presence to grow awareness, drive authentic engagement, and keep your brand thriving in the fast-moving digital world.",
    edge: "We help your brand build genuine emotional connections, turning engagement into loyalty and loyalty into long-term growth.",
    image: socialImg,
    accent: "border-secondary",
  },
  {
    title: "Brand Design",
    desc: "Your brand deserves more than a logo — it deserves a story that stands out. We create distinctive brand identities that capture your vision and connect with your audience.",
    edge: "We ensure your brand doesn't just reach your audience — it resonates. Grounding every strategy in authenticity and local insights, we earn trust and inspire lasting loyalty.",
    image: brandImg,
    accent: "border-accent",
  },
  {
    title: "Email Marketing",
    desc: "We create powerful campaigns that capture attention, spark action, and transform leads into lifelong customers, all while strengthening your brand's connection with its audience.",
    edge: "Smart, automated email sequences that nurture leads and drive conversions. Weaving in local insights and cultural nuances for campaigns that feel personal.",
    accent: "border-primary",
  },
  {
    title: "Content Marketing",
    desc: "Purposeful content that attracts, engages, and retains your ideal audience. Every piece is guided by a tailored strategy aligned with your business goals.",
    edge: "We track performance, refine strategy, and double down on what works — creating content that connects and earns trust.",
    accent: "border-secondary",
  },
  {
    title: "Digital Marketing Strategy",
    desc: "We craft and execute strategies that turn leads into loyal customers. Every interaction strengthens relationships, builds trust, and inspires meaningful action.",
    edge: "Integrated, data-driven campaigns that work seamlessly across channels. Smart analytics with tailored strategies for maximum impact.",
    accent: "border-accent",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden mt-8">
            <img src={servicesHero} alt="Our services" className="w-full h-[350px] object-cover" />
            <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
              <div className="text-center">
                <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
                  Our <span className="text-primary">Services</span>
                </h1>
                <p className="font-body text-muted-foreground max-w-xl mx-auto">
                  Comprehensive digital solutions tailored for the unique needs of African businesses across the continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-6 space-y-16">
          {services.map((service, i) => (
            <div
              key={i}
              className={`grid ${service.image ? "lg:grid-cols-2" : "lg:grid-cols-1 max-w-3xl mx-auto"} gap-10 items-center ${
                i % 2 === 1 && service.image ? "lg:direction-rtl" : ""
              }`}
            >
              {service.image && (
                <div className={`rounded-2xl overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img src={service.image} alt={service.title} className="w-full h-[320px] object-cover" />
                </div>
              )}
              <div className={`space-y-4 ${i % 2 === 1 && service.image ? "lg:order-1" : ""}`}>
                <div className={`border-l-4 ${service.accent} pl-4`}>
                  <h2 className="font-display text-2xl md:text-3xl font-bold">{service.title}</h2>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">{service.desc}</p>
                <div className="bg-card border border-border rounded-xl p-5">
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-primary mb-2">What Sets Us Apart</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.edge}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Let's Work <span className="text-primary">Together</span></h2>
          <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
            Ready to transform your digital presence? Let's create something extraordinary.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
            <Link to="/contact">Get In Touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;