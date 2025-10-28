import { Button } from "@/components/ui/button";

const About = () => {
  const team = [
    { name: "Mohsin", role: "Inhaber & Meister", specialty: "Klassische Haarschnitte, präzise Fades", img: "" },
    { name: "Alan", role: "Stylist & Fachkraft", specialty: "Moderne Styles, Färbetechniken", img: "" },
    { name: "Berzan", role: "Barber Spezialist", specialty: "Beard Styling, Konturen", img: "" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">Wer wir sind</h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Leidenschaft für Haare, Herz für Menschen – willkommen bei EppelStyle.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="card-elegant overflow-hidden">
              <img src="" alt="Keanu Ibrahim" className="w-full h-96 object-cover bg-muted" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 font-serif text-primary">Die Vision von EppelStyle</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Inhaber Keanu Ibrahim, Friseurmeister mit über 15 Jahren Erfahrung, verbindet moderne Techniken mit alter Handwerkskunst. Zeit ist bei uns kein Gut, an dem man spart. Jeder Kunde bekommt die Aufmerksamkeit, die er verdient.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Wir stehen für perfekte Haarschnitte, saubere Konturen, individuelle Farbberatung – und vor allem: Typberatung – wir nehmen uns Zeit und hören genau zu.
              </p>
              <div className="flex gap-4">
                <Button className="bg-accent hover:bg-accent/90 text-white">Termin anfragen</Button>
                <Button variant="outline">Bei Google Maps</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif text-primary">
            Unsere Werte – dein Erlebnis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "☀️", title: "Höchste Qualität", text: "Premium-Produkte & neueste Techniken" },
              { icon: "👨‍👩‍👧", title: "Familienfreundlich", text: "Wohlfühlatmosphäre für alle" },
              { icon: "🎀", title: "Modern & Handwerk", text: "Trends + klassisches Können" },
              { icon: "😊", title: "Beratung mit Herz", text: "Ehrlich, persönlich, entspannt" }
            ].map((value, index) => (
              <div key={index} className="card-elegant p-6 text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 font-serif text-primary">
            Lerne unser Team kennen
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-elegant overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-80 object-cover bg-muted" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1 text-primary">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
