import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import servicesData from "@/data/data.json";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const categories = ["all", ...servicesData.categories];

  const filteredServices = selectedCategory === "all"
    ? servicesData.services
    : servicesData.services.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Dein Schnitt. Dein Stil. Auf den Punkt.
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Präzise Haarschnitte, saubere Konturen und Beratung, die zu dir passt – für alle: Damen, Herren und Kids.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif text-primary">Unsere Preisliste</h2>
          <p className="text-muted-foreground leading-relaxed">
            Wir legen Wert auf Transparenz und faire Preise für erstklassige Beratung und die Verwendung hochwertiger Produkte. Zusatzleistungen oder spezielle Wünsche besprechen wir gerne persönlich mit Ihnen.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "bg-accent hover:bg-accent/90" : ""}
              >
                {cat === "all" ? "Alle" : cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="card-elegant p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary">{service.category}</Badge>
                  {service.base_price && (
                    <span className="text-2xl font-bold text-accent">ab {service.base_price}€</span>
                  )}
                  {!service.base_price && (
                    <span className="text-sm text-muted-foreground">auf Anfrage</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{service.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <div className="text-sm text-muted-foreground mb-4">
                  Dauer: ~{service.duration_min} Min.
                </div>
                {service.addons.length > 0 && (
                  <div className="border-t pt-4">
                    <p className="text-xs font-semibold mb-2 text-muted-foreground">Zusatzleistungen:</p>
                    <div className="space-y-1">
                      {service.addons.map((addon, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span>{addon.name}</span>
                          <span className="text-accent">+{addon.price}€</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif text-primary">
            Fragen oder spezielle Wünsche?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Wir beraten Sie gerne individuell zu Ihrem Termin und eignen uns Fragen rund um Farbe, Styling und Pflege.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Jetzt Kontakt aufnehmen
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
