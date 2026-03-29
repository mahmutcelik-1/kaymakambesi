import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroBull from "@/assets/hero-bull.jpg";

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
  if (!href) return;

  const sectionId = href.replace("#", "");
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[700px] flex items-end overflow-hidden">
      <img
        src={heroBull}
        alt="Premium kurbanlık boğa merada otluyor"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-foreground/20" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-20 pt-32">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gold font-medium tracking-[0.3em] text-sm mb-4"
        >
          KAYMAKAM BESİ ÇİFTLİĞİ
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-primary-foreground text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-2xl mb-5"
        >
          Seçkin Kurbanlıklar &<br />Hijyenik Hizmet.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-primary-foreground/70 text-lg mb-10"
        >
          2026 Kurbanlık Satışlarımız Başlamıştır.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#kurbanliklar"
            onClick={scrollToSection}
            className="inline-flex items-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3.5 rounded-lg font-medium text-sm tracking-wide transition-colors duration-300"
          >
            İncele & Rezerve Et
          </a>
          <a
            href="https://wa.me/905373025300"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-gold text-sm transition-colors duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Bize Ulaşın
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
