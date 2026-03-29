import { Beef, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import inek1 from "@/assets/inek1.jpeg";
import inek2 from "@/assets/inek2.jpeg";
import inekler3 from "@/assets/inekler3.jpeg";

const images = [
  {
    id: 1,
    src: inekler3,
  },
  {
    id: 2,
    src: inek1,
  },
  {
    id: 3,
    src: inek2,
  },
];

const CattleIcon = () => (
  <Beef className="w-8 h-8 text-primary" strokeWidth={1.5} />
);

const ServiceCards = () => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
    setAutoPlay(false);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
    setAutoPlay(false);
  };

  return (
    <section id="kurbanliklar" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-foreground text-3xl font-bold mb-4 tracking-tight">Besili Ineklerimiz</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kaymakam Besi Ciftliginin en iyi kalitedeki ineklerini buradan secebilirsiniz.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-500 w-full max-w-2xl"
          >
            {/* Image Carousel */}
            <div className="relative h-96 overflow-hidden bg-secondary">
              {images.map((img, idx) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === current ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}

              {/* Navigation Buttons */}
              <button
                onClick={prev}
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-foreground/80 hover:bg-foreground text-primary-foreground p-2 rounded-full transition-all z-10"
                aria-label="Onceki"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-foreground/80 hover:bg-foreground text-primary-foreground p-2 rounded-full transition-all z-10"
                aria-label="Sonraki"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrent(idx);
                      setAutoPlay(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === current ? "bg-white w-8" : "bg-white/50"
                    }`}
                    aria-label={`Resim ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="mb-4">
                <CattleIcon />
              </div>
              <div>
                <h3 className="text-foreground font-semibold text-2xl mb-2">
                  Besili Ineklerimiz
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Kaymakam Besi Ciftliginin en iyi kalitedeki, dogal beslenme ve veteriner kontrolunden gecmis inekleri. Halal kesim ve hizli teslimatla birlikte.
                </p>
              </div>

              <div className="space-y-3 border-t border-border pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Fiyat Araligi</span>
                  <span className="text-foreground font-semibold">₺85.000 – ₺150.000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Agirlik</span>
                  <span className="text-foreground font-medium">350 – 600 kg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Hisse</span>
                  <span className="text-foreground font-medium">1, 2, 3 veya 7 Hisse</span>
                </div>
              </div>

              <a
                href="https://wa.me/905XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium text-base transition-colors duration-300"
              >
                Bilgi Al
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
