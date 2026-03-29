/**
 * GÖRSEL VE VIDEO EKLEME REHBERI
 * 
 * ============================================
 * YÖNTEM 1: Statik Dosyalar (ÖNERİLEN)
 * ============================================
 * 
 * ADIM 1: Dosyaları /public veya /src/assets klasörüne koy
 *   - /public: Runtime'da değiştirilebilir, CDN'ye kolay uyarlanır
 *   - /src/assets: Vite bundle'da optimize edilir (resimler sıkıştırılır)
 * 
 * ADIM 2: Resimleri import et:
 *   import bovine1 from "@/assets/bovine-1.jpg";
 *   import videoThumb from "@/assets/video-thumb.jpg";
 * 
 * ADIM 3: Kullan:
 *   <img src={bovine1} alt="Suni Üreme" className="w-full h-auto" />
 *   <video src={videoSrc} controls className="w-full" />
 * 
 * ============================================
 * YÖNTEM 2: Nextgen Formatlar (Performans)
 * ============================================
 * 
 * WebP ve AVIF formatlarını kullan (Vite otomatik dönüştürür):
 *   - JPG/PNG → WebP: %30-50 daha küçük
 *   - WebP → AVIF: %20-30 daha küçük
 * 
 * <picture>
 *   <source srcSet={avif} type="image/avif" />
 *   <source srcSet={webp} type="image/webp" />
 *   <img src={jpg} alt="Kalite görsel" />
 * </picture>
 * 
 * ============================================
 * YÖNTEM 3: Lazy Loading (SEO + Performans)
 * ============================================
 * 
 * Kaydırıldığında yükleme:
 *   <img src={image} loading="lazy" alt="..." />
 * 
 * Vite image plugin kullan:
 *   npm install vite-plugin-image-optimization
 * 
 * ============================================
 * VIDEO İÇİN: MP4 (Uyumlu), WebM (Küçük)
 * ============================================
 * 
 * <video controls width="100%" className="rounded-lg">
 *   <source src={mp4} type="video/mp4" />
 *   <source src={webm} type="video/webm" />
 *   Tarayıcınız video desteğlemiyor
 * </video>
 * 
 * ============================================
 * DOSYA BOYUTLARI ÖNERILEN ÖLÇÜLER
 * ============================================
 * 
 * Hero Banner: 1920x1080 (WebP: 50-80KB)
 * Ürün: 800x600 (WebP: 30-50KB)
 * Thumbnail: 300x300 (WebP: 10-20KB)
 * Video: 1280x720 (MP4 H.264: 5-10MB)
 * 
 * ============================================
 * HIZLI KOMUTlar
 * ============================================
 * 
 * 1. Resimleri /src/assets'e koy
 * 2. Import: import img from "@/assets/file.jpg"
 * 3. Kullan: <img src={img} alt="açıklama" />
 * 4. Build: npm run build (otomatik optimize)
 * 5. Push: git add . && git commit && git push
 */

// Örnek Component
export const MediaExample = () => {
  // Resimleri buraya ekle:
  // import bovineCow from "@/assets/bovine-cow.jpg";
  // import animalGallery from "@/assets/animal-gallery.jpg";

  return (
    <div className="space-y-8">
      {/* RESIMLERI EKLE */}
      {/* 
      <section>
        <h2 className="text-2xl font-bold mb-4">Hayvanlarımız</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img 
            src={bovineCow} 
            alt="Besili sığır" 
            loading="lazy"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      */}

      {/* VİDEOLARI EKLE */}
      {/* 
      <section>
        <h2 className="text-2xl font-bold mb-4">Çiftlik Turu</h2>
        <video 
          controls 
          width="100%" 
          className="rounded-lg shadow-lg max-w-2xl mx-auto"
        >
          <source src={require("@/assets/farm-tour.mp4")} type="video/mp4" />
          Tarayıcınız video desteklemez
        </video>
      </section>
      */}
    </div>
  );
};

export default MediaGuide;
