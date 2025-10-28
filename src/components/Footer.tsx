import { Link } from "react-router-dom";
import { Instagram, Facebook, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">
              <span className="text-primary-foreground">Eppel</span>
              <span className="text-accent">Style</span>
            </h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Ihr Friseurmeister in Eppelborn – mit Herz und Handwerk.
            </p>
            <div className="flex space-x-3">
              <a href="https://instagram.com/eppel_style" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">KONTAKT</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Kirchplatz 11</p>
              <p>66571 Eppelborn</p>
              <p>06881/9513618</p>
              <p>info@eppelstyle.de</p>
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-semibold mb-4">INFOS</h4>
            <div className="space-y-2 text-sm">
              <Link to="/contact" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Kontakt
              </Link>
              <Link to="/impressum" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© 2025 EppelStyle. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
