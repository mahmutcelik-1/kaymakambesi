import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Ahmet Y.",
    text: "Geçen yıl büyükbaş hisse aldık, et kalitesi mükemmeldi. Kesim ve teslimat çok profesyonel yapıldı.",
    rating: 5,
  },
  {
    name: "Fatma K.",
    text: "Kurbanlığımız sağlıklı ve bakımlıydı. İslami usullere tam uygun kesim yapıldı, teşekkürler.",
    rating: 5,
  },
  {
    name: "Mehmet A.",
    text: "3. yılımız Arslan Çiftliği ile. Her sene aynı kalite ve güven. Ailecek çok memnunuz.",
    rating: 5,
  },
  {
    name: "Yasin B.",
    text: "Çiftliğin tesislerini ziyaret ettim. Hayvanlar çok iyi bakılmış, temiz ve sağlıklı görünüyorlardı. Güvenle hisse aldım.",
    rating: 5,
  },
  {
    name: "İbrahim K.",
    text: "Arslan Çiftliği ile yılladır çalışıyorum. Her seferinde aynı profesyonellik ve kalite. Tavsiye ederim.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-foreground text-3xl font-bold text-center mb-16 tracking-tight"
        >
          Müşteri Yorumları
        </motion.h2>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden rounded-xl"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="relative h-64 sm:h-72 md:h-56">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 300 }}
                animate={{ 
                  opacity: i === current ? 1 : 0, 
                  x: i === current ? 0 : 300,
                  zIndex: i === current ? 10 : 0,
                }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 border border-border rounded-xl p-8 bg-card flex flex-col justify-center"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <p className="text-foreground font-semibold text-sm">{t.name}</p>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current 
                    ? "bg-primary w-8" 
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={() => goToSlide((current - 1 + testimonials.length) % testimonials.length)}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-colors"
            aria-label="Önceki yorum"
          >
            ←
          </button>
          <button
            onClick={() => goToSlide((current + 1) % testimonials.length)}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-primary/80 hover:bg-primary text-primary-foreground transition-colors"
            aria-label="Sonraki yorum"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
