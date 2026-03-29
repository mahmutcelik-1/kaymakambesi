import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Tesisimiz",
    image: "https://images.unsplash.com/photo-1500595046891-93df74c63999?w=500&h=400&fit=crop",
    category: "Tesis",
  },
  {
    id: 2,
    title: "Hayvan Bakımı",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=500&h=400&fit=crop",
    category: "Hayvan",
  },
  {
    id: 3,
    title: "Veteriner Kontrolü",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop",
    category: "Hizmet",
  },
  {
    id: 4,
    title: "Hijyenik Kesim Alanı",
    image: "https://images.unsplash.com/photo-1595435934249-5df582848db3?w=500&h=400&fit=crop",
    category: "Kesim",
  },
  {
    id: 5,
    title: "Doğal Beslenme Alanı",
    image: "https://images.unsplash.com/photo-1500494f900e0ce24ad00797f91f53f6c4f06b4d9?w=500&h=400&fit=crop",
    category: "Tesis",
  }
  
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="galeri" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-foreground text-3xl font-bold mb-4 tracking-tight">Tesisimizden Görüntüler</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kaymakam Besi Çiftliğimizin modern tesislerini ve profesyonel hizmet alanlarını yakından tanıyın.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedImage(img)}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-64 sm:h-56 md:h-64"
            >
              <img
                src={img.image}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-primary-foreground font-semibold text-sm">{img.title}</p>
                  <p className="text-primary-foreground/70 text-xs">{img.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-2 transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="mt-4 bg-card rounded-lg p-4">
                <h3 className="text-foreground font-semibold text-lg">{selectedImage.title}</h3>
                <p className="text-muted-foreground text-sm">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
