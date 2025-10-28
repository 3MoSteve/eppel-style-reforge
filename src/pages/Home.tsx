import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Scissors, Users, Star, TrendingUp } from "lucide-react";

const Home = () => {
  const stats = [
    { icon: Users, value: "2", label: "Jahre im Betrieb" },
    { icon: Scissors, value: "520+", label: "Zufriedene Kunden" },
    { icon: Star, value: "85", label: "Stammkunden seit Eröffnung" },
  ];

  const values = [
    {
      icon: "☀️",
      title: "Höchste Qualität",
      description: "Wir arbeiten mit Premium-Produkten und neuesten Techniken für exzellente Ergebnisse."
    },
    {
      icon: "👨‍👩‍👧",
      title: "Familienfreundlich",
      description: "Wir kümmern uns um Ihre Familie und alle fühlen sich wohlfühlen und willkommen."
    },
    {
      icon: "🎀",
      title: "Modern & Handwerk",
      description: "Zeitgemäße Trends und klassisches Handwerk – wir vereinen beides mit Leidenschaft."
    },
    {
      icon: "😊",
      title: "Beratung mit Herz",
      description: "Wir hören zu, beraten ehrlich und finden den Stil, der zu Ihnen passt – ohne Stress, mit viel Herz."
    },
  ];

  const reviews = [
    {
      rating: 5,
      text: "Ich bin seit Jahren Stammkunde und immer zufrieden. Professionell, freundlich und immer ein perfektes Ergebnis!",
      author: "Dennis K."
    },
    {
      rating: 5,
      text: "Endlich ein Friseur, der genau weiß, was er tut. Fade ist immer on point!",
      author: "Mike H."
    },
    {
      rating: 5,
      text: "Tolles Team, angenehme Stimmung und faire Preise. Nur zu empfehlen!",
      author: "Laura S."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                EppelStyle
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Ihr Friseurmeister in Eppelborn – mit Herz und Handwerk.
              </p>
              <Link to="/services">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                  Termin vereinbaren
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="card-elegant p-4 bg-white/95">
                <img src="" alt="EppelStyle Team" className="w-full h-80 object-cover rounded-lg bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif text-primary">
            Herzlich Willkommen bei EppelStyle
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Präzise Haarschnitte, moderne Styles und fachkundige Beratung – seit vielen Jahren sind wir Ihre Experten für Haare, Herz und Stil. Ob klassischer Cut, moderner Look oder individuelle Farbberatung – wir nehmen uns Zeit für Sie.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 font-serif text-primary">
              Ihr Meisterbetrieb mit Herz & Stil
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Leidenschaft trifft auf Können – bei jedem Schnitt, jeder Farbe, jeder Rasur.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-elegant p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif text-primary">
            Momente, die begeistern
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-accent" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif text-primary">
            Unsere Expertise für Sie
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Für unsere Männer", img: "" },
              { title: "Für Stil & Eleganz", img: "" },
              { title: "Für Ihre Präzision & Pflege", img: "" }
            ].map((item, index) => (
              <div key={index} className="card-elegant overflow-hidden group">
                <div className="h-64 bg-muted relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline">
                Alle Leistungen ansehen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif text-primary">
            Stimmen unserer Kunden
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="card-elegant p-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-primary">– {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-serif text-primary">
            Wir freuen uns auf Ihren Besuch!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Buchen Sie jetzt Ihren Termin online oder kontaktieren Sie uns direkt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Jetzt Termin vereinbaren
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Kontakt aufnehmen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
