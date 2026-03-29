import { MessageCircle, Phone } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Call Button - Smaller */}
      <div className="animate-in fade-in slide-in-from-bottom-2">
        <a
          href="tel:+905373025300"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-full font-semibold text-xs transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 block whitespace-nowrap"
        >
          <Phone className="w-4 h-4" />
          Hemen Ara
        </a>
      </div>

      {/* WhatsApp Icon Button with Text */}
      <div className="animate-in fade-in slide-in-from-bottom-2">
        <a
          href="https://wa.me/905373025300"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full font-semibold text-xs transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap"
          title="WhatsApp ile Ulaşın"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
