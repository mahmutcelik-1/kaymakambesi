import { MessageCircle, Phone } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Call Button - Floating above */}
      <div className="animate-in fade-in slide-in-from-bottom-2">
        <a
          href="tel:+905XXXXXXXXX"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 block whitespace-nowrap"
        >
          <Phone className="w-5 h-5" />
          Hemen Ara
        </a>
      </div>

      {/* WhatsApp Menu */}
      <div className="bg-primary text-primary-foreground rounded-3xl shadow-2xl p-5 w-64 animate-in fade-in slide-in-from-bottom-2">
        <p className="text-sm font-semibold mb-3 text-center">WhatsApp'dan Ulaşın</p>
        <a
          href="https://wa.me/905XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-primary-foreground/25 hover:bg-primary-foreground/40 text-primary-foreground px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp ile Yaz
        </a>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
