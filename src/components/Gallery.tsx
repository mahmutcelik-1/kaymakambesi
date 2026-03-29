import { motion } from "framer-motion";
import { useState } from "react";
import { X, Play } from "lucide-react";
import inek1 from "@/assets/inek1.jpeg";
import inek2 from "@/assets/inek2.jpeg";
import inekler3 from "@/assets/inekler3.jpeg";

const galleryItems = [
  {
    id: 1,
    title: "Besili Ineklerimiz - 1",
    image: inek1,
    category: "Hayvan",
    type: "image" as const,
  },
  {
    id: 2,
    title: "Besili Ineklerimiz - 2",
    image: inek2,
    category: "Hayvan",
    type: "image" as const,
  },
  {
    id: 3,
    title: "Modern Tesislerimiz",
    image: inekler3,
    category: "Tesis",
    type: "image" as const,
  },
  {
    id: 4,
    title: "Kesim Alani - 1",
    image: inekler3,
    videoSrc: "/assets/kesim-alani-video.mp4",
    category: "Hizmet",
    type: "video" as const,
  },
  {
    id: 5,
    title: "Kesim Islemi",
    image: inek1,
    videoSrc: "/assets/kesim-islemi-video.mp4",
    category: "Hizmet",
    type: "video" as const,
  },
  {
    id: 6,
    title: "Kurbanlik Hayvanlar",
    image: inek2,
    videoSrc: "/assets/kurbanlıklarımız-mp4.mp4",
    category: "Urun",
    type: "video" as const,
  },
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

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
          <h2 className="text-foreground text-3xl font-bold mb-4 tracking-tight">Tesisimizden Goruntular</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kaymakam Besi Ciftligimizin modern tesislerini ve profesyonel hizmet alanlarini yakindan taninyin.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelectedItem(item)}
              className="group relative overflow-hidden rounded-xl cursor-pointer h-64 sm:h-56 md:h-64"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/40 group-hover:bg-foreground/60 transition-colors">
                  <Play className="w-16 h-16 text-white fill-white" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <p className="text-primary-foreground font-semibold text-sm">{item.title}</p>
                  <p className="text-primary-foreground/70 text-xs">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 bg-foreground/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <video
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg bg-black"
                >
                  <source src={selectedItem.videoSrc} type="video/mp4" />
                  Tarayiciniz videyo destemez
                </video>
              )}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-2 transition-colors"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="mt-4 bg-card rounded-lg p-4">
                <h3 className="text-foreground font-semibold text-lg">{selectedItem.title}</h3>
                <p className="text-muted-foreground text-sm">{selectedItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
