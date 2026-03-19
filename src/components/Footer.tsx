import { Link } from "react-router-dom";
import logo from "@/assets/emerge-logo.png";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="Emerge Digital" className="h-8 w-auto mb-4" />
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              Empowering African female entrepreneurs to stand out, scale up, and thrive in the digital space.
            </p>
          </div>
          <div>
            <h4 className="font-display text-primary font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-body">Home</Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-body">Our Services</Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-body">Contact Us</Link>
            </div>
          </div>
          <div>
            <h4 className="font-display text-primary font-semibold mb-4">Get In Touch</h4>
            <p className="text-sm text-muted-foreground font-body">info@emergedigital.africa</p>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-xs text-muted-foreground font-body">© 2026 Emerge Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
