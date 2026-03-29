import { useState } from "react";
import { Menu, X, MessageCircle, Shield } from "lucide-react";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Kurbanlıklar", href: "#kurbanliklar" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "İletişim", href: "#iletisim" },
];

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

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <a href="#hero" onClick={scrollToSection} className="flex items-center gap-2 group">
          <Shield className="w-7 h-7 text-gold" strokeWidth={1.5} />
          <span className="text-primary-foreground font-semibold tracking-[0.25em] text-sm">KAYMAKAM BESI ÇİFTLİĞİ</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={scrollToSection}
              className="text-primary-foreground/70 hover:text-gold text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* WhatsApp + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/905XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground/80 hover:border-gold hover:text-gold rounded-full px-4 py-1.5 text-xs tracking-wider transition-colors duration-300"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary-foreground/80"
            aria-label="Menü"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md border-t border-border/10 px-6 py-6 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                scrollToSection(e);
                setOpen(false);
              }}
              className="block text-primary-foreground/70 hover:text-gold text-sm tracking-[0.15em] uppercase transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/905XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gold text-sm mt-4"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp ile Ulaşın
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
