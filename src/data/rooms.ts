export type Room = {
  slug: string;
  name: string;
  desc: string;
  longDesc: string;
  price: string;
  size: string;
  capacity: string;
  amenities: string[];
  image: string;
  gallery: string[];
};

export const rooms: Room[] = [
  {
    slug: "deluxe-oda",
    name: "Deluxe Oda",
    desc: "Şehir manzaralı, modern donanımlı konfor odası.",
    longDesc:
      "Deluxe Oda, şehrin panoramik manzarasına açılan geniş camları, modern mobilyaları ve konforlu yatağıyla hem iş hem de tatil seyahatlerinde misafirlerimize huzurlu bir konaklama sunar.",
    price: "₺3.200 / gece",
    size: "32 m²",
    capacity: "2 Yetişkin",
    amenities: [
      "Ücretsiz Wi-Fi",
      "Akıllı Klima",
      "55\" Smart TV",
      "Minibar",
      "Şehir Manzarası",
      "Yağmur Duşu",
    ],
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1611906655828-3030649fb01b?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1582719478148-9e3b09e1be3f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "executive-suit",
    name: "Executive Süit",
    desc: "İş seyahatleri için geniş çalışma alanı ve salon.",
    longDesc:
      "Executive Süit, iş seyahati yapan misafirlerimiz için ayrı oturma alanı, geniş çalışma masası ve toplantı için uygun düzeniyle hem üretkenliği hem de konforu bir arada sunar.",
    price: "₺5.800 / gece",
    size: "48 m²",
    capacity: "2 Yetişkin + 1 Çocuk",
    amenities: [
      "Ayrı Oturma Alanı",
      "Çalışma Masası",
      "Ücretsiz Wi-Fi",
      "Nespresso Makinesi",
      "Kase Banyo",
      "Şehir / Deniz Manzarası",
    ],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    slug: "presidential-suit",
    name: "Presidential Süit",
    desc: "Panoramik manzara, özel hizmet ve premium donanım.",
    longDesc:
      "Presidential Süit, otelimizin en üst katında konumlanan, panoramik manzarası, özel misafir hizmeti ve premium donanımıyla en üstün konaklama deneyimini arayan misafirlerimiz için tasarlandı.",
    price: "₺12.500 / gece",
    size: "85 m²",
    capacity: "4 Yetişkin",
    amenities: [
      "Özel Misafir Hizmeti",
      "Panoramik Teras",
      "Jakuzi",
      "Özel Şef Hizmeti",
      "Ayrı Yemek Salonu",
      "Limuzin Transfer",
    ],
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];
