import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Facebook, MapPin, Clock, Phone, Mail } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling will be implemented with backend
    alert("Nachricht würde gesendet (Backend erforderlich)");
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Nimm Kontakt auf</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Wir freuen uns auf deine Nachricht oder deinen Anruf für den nächsten Wohlfühl-Termin.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 font-serif text-primary">Schreib uns eine Nachricht</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Dein Name</label>
                <Input placeholder="Max Mustermann" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Deine E-Mail</label>
                <Input type="email" placeholder="max@example.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Deine Nachricht</label>
                <Textarea rows={6} placeholder="Worum geht es bei deiner Anfrage?" required />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                Nachricht senden
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Alternativ: 06881/9513618 oder info@eppelstyle.de
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Kontaktdaten</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">EppelStyle Friseur</p>
                    <p>Kirchplatz 11</p>
                    <p>66571 Eppelborn, Saarland</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <a href="tel:068819513618" className="hover:text-accent transition-colors">06881/9513618</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <a href="mailto:info@eppelstyle.de" className="hover:text-accent transition-colors">info@eppelstyle.de</a>
                </div>
              </div>
            </div>

            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Öffnungszeiten
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Montag - Samstag</span>
                  <span className="font-medium">09:00 - 19:00 Uhr</span>
                </div>
                <div className="flex justify-between">
                  <span>Sonntag</span>
                  <span className="font-medium">Geschlossen</span>
                </div>
              </div>
            </div>

            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Social Media</h3>
              <div className="flex gap-4">
                <a href="https://instagram.com/eppel_style" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-colors">
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-colors">
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              </div>
            </div>

            <div className="card-elegant p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">So findest du uns</h3>
              <div className="bg-muted h-48 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
