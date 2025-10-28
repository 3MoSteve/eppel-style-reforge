const Gallery = () => {
  const images = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: "",
    alt: `Hairstyle ${i + 1}`,
    tags: ["Fade", "Beard", "Modern"][Math.floor(Math.random() * 3)]
  }));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-20 px-4">
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            Galerie – Inspiration für deinen nächsten Schnitt
          </h1>
          <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
            Präzise Fades, saubere Konturen und Hairstyles, die sitzen. Alle Looks wurden bei EppelStyle in Eppelborn kreiert.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id} className="card-elegant overflow-hidden aspect-square">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover bg-muted hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
