import { Beef } from "lucide-react";
import { motion } from "framer-motion";
import cattleImg from "@/assets/cattle.jpg";

const cards = [
  {
    title: "Büyükbaş Kurbanlık",
    image: cattleImg,
    details: "Doğal Besleme · Veteriner Kontrolü · Hisse Seçenekleri",
    iconType: "cattle" as const,
    price: "₺85.000 – ₺150.000",
    weight: "350 – 600 kg",
    shares: "1, 2, 3 veya 7 Hisse",
  },
];

const CattleIcon = () => (
  <Beef className="w-8 h-8 text-primary" strokeWidth={1.5} />
);

const ServiceCards = () => {
  return (
    <section id="kurbanliklar" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-center">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-500 w-full max-w-xl"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  {card.iconType === "cattle" ? <CattleIcon /> : null}
                </div>
                <h3 className="text-foreground font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{card.details}</p>

                <div className="space-y-2 border-t border-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Fiyat Aralığı</span>
                    <span className="text-foreground font-semibold">{card.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ağırlık</span>
                    <span className="text-foreground font-medium">{card.weight}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Hisse</span>
                    <span className="text-foreground font-medium">{card.shares}</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/905XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300"
                >
                  Bilgi Al
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
