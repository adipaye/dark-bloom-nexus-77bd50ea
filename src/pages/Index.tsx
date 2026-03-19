import { Link } from "react-router-dom";
import { ArrowRight, Megaphone, Palette, Video, Mail, BarChart3, FileText } from "lucide-react";
import heroImg from "@/assets/hero-woman.jpg";
import teamImg from "@/assets/team-collab.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const objectives = [
  { title: "Amplify Your Brand", desc: "Strengthen your online presence and ensure your brand is instantly recognizable.", color: "accent-gradient-yellow" },
  { title: "Fuel Business Growth", desc: "Execute proven marketing strategies that boost sales, revenue, and long-term success.", color: "accent-gradient-blue" },
  { title: "Build Sustainable Businesses", desc: "Design resilient models that adapt to change and thrive long-term.", color: "accent-gradient-red" },
  { title: "Foster Community", desc: "Build meaningful connections with like-minded entrepreneurs and potential customers.", color: "accent-gradient-yellow" },
];

const services = [
  { icon: Video, title: "Video Production", color: "text-primary" },
  { icon: Megaphone, title: "Social Media", color: "text-secondary" },
  { icon: Palette, title: "Brand Design", color: "text-accent" },
  { icon: Mail, title: "Email Marketing", color: "text-primary" },
  { icon: FileText, title: "Content Marketing", color: "text-secondary" },
  { icon: BarChart3, title: "Digital Strategy", color: "text-accent" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-6 animate-fade-in-up">
              <span className="inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                #African-Led
              </span>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
                Empowering African{" "}
                <span className="text-gradient">Entrepreneurs</span>
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-lg">
                We don't just market — we ignite growth. Equipping African businesses to stand out, scale up, and thrive in the digital space.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
                  <Link to="/services">Our Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5 font-body">
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative" style={{ animationDelay: "0.2s" }}>
              <div className="relative rounded-2xl overflow-hidden">
                <img src={heroImg} alt="African entrepreneurs" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 accent-gradient-yellow rounded-xl opacity-20" />
              <div className="absolute -top-4 -right-4 w-16 h-16 accent-gradient-blue rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img src={teamImg} alt="Emerge Digital team collaborating" className="w-full h-[400px] object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-bold">
                Who We <span className="text-primary">Are</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Emerge Digital is a vibrant digital marketing agency on a mission to power up entrepreneurs across Africa — especially women entrepreneurs. With expertise in digital strategy, creative design, storytelling, and technology, we ignite growth.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We believe African entrepreneurs are the backbone of Africa's future economy. Our passion lies in equipping African businesses to take their place on the global stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">What We <span className="text-secondary">Do</span></h2>
          <p className="font-body text-muted-foreground mb-12 max-w-xl mx-auto">Comprehensive services tailored to meet the unique needs of African businesses.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors group">
                <s.icon className={`h-8 w-8 ${s.color} mb-3 mx-auto group-hover:scale-110 transition-transform`} />
                <p className="font-body text-sm font-semibold">{s.title}</p>
              </div>
            ))}
          </div>
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-body font-semibold">
            <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            Our <span className="text-accent">Objectives</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all">
                <div className={`w-2 h-12 ${obj.color} rounded-full mb-4`} />
                <h3 className="font-display text-lg font-semibold mb-2">{obj.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-primary">Emerge</span>?
          </h2>
          <p className="font-body text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's ignite your brand's digital presence and take your business to the next level.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
            <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;