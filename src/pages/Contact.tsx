import { useState } from "react";
import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Ready to ignite your brand's digital presence? Reach out and let's start the conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 accent-gradient-yellow rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-1">Email</h3>
                  <p className="font-body text-sm text-muted-foreground">hello@emergedigital.africa</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
                    <Input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="bg-muted border-border font-body"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="bg-muted border-border font-body"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Subject</label>
                  <Input
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className="bg-muted border-border font-body"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-muted border-border font-body resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;