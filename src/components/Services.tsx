import { UtensilsCrossed, Moon } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Modern & Hijyenik Kesim",
    description: "Veteriner hekim gözetiminde, tamamen hijyenik ortamda profesyonel kesim hizmeti.",
  },
  {
    icon: Moon,
    title: "Tam İslami Usuller",
    description: "Tüm işlemler İslami kurallara uygun şekilde, ehil kasaplarımız tarafından gerçekleştirilir.",
  },
];

const Services = () => {
  return (
    <section id="hizmetler" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <h2 className="text-foreground text-3xl font-bold text-center mb-16 tracking-tight">
          Hizmetlerimiz
        </h2>

        <div className="space-y-14">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
