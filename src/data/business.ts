// ─────────────────────────────────────────────────────────────
// GERÇEK VERİ UYARISI
// Aşağıdaki işletme bilgileri henüz doğrulanmamıştır ve PLACEHOLDER'dır.
// Yayına almadan önce mutlaka gerçek bilgilerle güncelleyin.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: "Genç Kent",
  subName: "GENÇ KENT",
  phoneDisplay: "[Telefon numarası eklenecek]",
  phoneHref: "tel:+900000000000",
  whatsappNumber: "900000000000", // placeholder — gerçek numara ile değiştirin
  instagramHandle: "[instagram eklenecek]", // placeholder
  instagramUrl: "https://instagram.com/",
  address: "[Mağaza adresi eklenecek], Türkiye",
  hours: [
    { day: "Pazartesi – Cumartesi", time: "[Saat bilgisi eklenecek]" },
    { day: "Pazar", time: "[Saat bilgisi eklenecek]" },
  ],
  mapQuery: "Genç Kent",
  googleRating: null as number | null, // doğrulanınca sayı ile değiştirin, örn: 4.8
  googleReviewCount: null as number | null,
  year: 2026,
};

export function waLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${business.whatsappNumber}?text=${encoded}`;
}

export function productWaMessage(productName: string) {
  return `Merhaba, Genç Kent'da gördüğüm ${productName} hakkında bilgi almak istiyorum.`;
}
