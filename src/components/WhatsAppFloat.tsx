import { MessageCircle, Phone } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Call Button - Floating above */}
      <div className="animate-in fade-in slide-in-from-bottom-2">
        <a
          href="tel:+905XXXXXXXXX"
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 block whitespace-nowrap"
        >
          <Phone className="w-6 h-6" />
          Hemen Ara
        </a>
      </div>

      {/* WhatsApp Icon Button - Similar size to Call Button */}
      <div className="animate-in fade-in slide-in-from-bottom-2">
        <a
          href="https://wa.me/905XXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          title="WhatsApp ile Ulaşın"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
