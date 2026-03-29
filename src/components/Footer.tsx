import { Shield, MessageCircle, Instagram, Facebook, Phone, MapPin, Youtube, Music } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", phone: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <footer id="iletisim" className="bg-emerald-darker text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Callback Form Section */}
        <div className="mb-16 lg:mb-20">
          <div className="max-w-2xl mx-auto bg-primary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="text-gold font-semibold text-xl mb-2 text-center tracking-wide">
              BİZ SİZİ ARAYALIM
            </h3>
            <p className="text-primary-foreground/70 text-sm text-center mb-6">
              Lütfen adınız ve telefon numaranızı bırakın, uzmanlarımız sizi en kısa sürede arayacaktır.
            </p>
            {submitted && (
              <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-sm text-center">
                ✓ Talebiniz başarıyla alındı. Kısa sürede arayacağız!
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Adınız"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-colors text-sm"
                required
              />
              <input
                type="tel"
                placeholder="Telefon Numarası (537 302 53 00)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                pattern="[0-9]{10}"
                className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/50 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/50 transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-foreground font-semibold py-2.5 rounded-lg transition-colors duration-300"
              >
                Beni Arayın.
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Left: Logo & Links */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-6 h-6 text-gold" strokeWidth={1.5} />
              <span className="font-semibold tracking-[0.25em] text-sm">KAYMAKAM BESI ÇİFTLİĞİ</span>
            </div>
            <div className="space-y-3">
              {["Ana Sayfa", "Kurbanlıklar", "Hizmetler", "İletişim"].map((l) => (
                <a
                  key={l}
                  href={`#${l === "Ana Sayfa" ? "hero" : l === "Kurbanlıklar" ? "kurbanliklar" : l === "Hizmetler" ? "hizmetler" : "iletisim"}`}
                  className="block text-primary-foreground/60 hover:text-gold text-sm transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Center: Contact Info */}
          <div className="flex flex-col items-center text-center">
            <a
              href="https://wa.me/905373025300"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium text-sm transition-colors duration-300 mb-6"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp ile Ulaşın
            </a>
            
            {/* Phone */}
            <div className="flex items-center gap-2 text-primary-foreground font-bold text-lg tracking-wide mb-6">
              <Phone className="w-5 h-5 text-gold" />
              537 302 53 00
            </div>

            {/* Address with Maps Link */}
            <a
              href="https://maps.app.goo.gl/k6BFjzebHQzDwFDRA?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors text-sm mb-2"
            >
              <MapPin className="w-4 h-4" />
              Konum
            </a>
            <p className="text-primary-foreground/60 text-xs">Kocaeli/Gebze Cumaköy mahallesi Fatih caddesi no:1</p>
          </div>

          {/* Right: Social */}
          <div className="md:text-right">
            <h4 className="text-gold font-medium text-sm tracking-[0.15em] uppercase mb-6">Bizi Takip Edin</h4>
            <div className="flex md:justify-end gap-4 flex-wrap">
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" title="TikTok">
                <Music className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" title="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://wa.me/905373025300" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors" title="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10">
          <div className="py-5 text-center">
            <p className="text-primary-foreground/40 text-xs tracking-wider">
              Tüm Hakları Saklıdır © 2026 Kaymakam Besi Çiftliği
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
