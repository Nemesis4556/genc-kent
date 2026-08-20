export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  blurb: string;
}

export const products: Product[] = [
  {
    id: "Genç Kent-sofa",
    name: "Genç Kent Sofa",
    category: "Oturma Odası",
    image:
      "https://images.unsplash.com/photo-1759691555010-7f3f8674d2f2?auto=format&fit=crop&w=1200&q=80",
    blurb:
      "Yumuşak dokusu ve sakin duruşuyla oturma alanınızın merkezine yerleşen bir seçim.",
  },
  {
    id: "Genç Kent-dining",
    name: "Genç Kent Yemek Masası",
    category: "Yemek Odası",
    image:
      "https://images.unsplash.com/photo-1764076327046-fe35f955cba1?auto=format&fit=crop&w=1200&q=80",
    blurb: "Sade hatları ve sıcak yüzeyiyle sofranıza doğallık katar.",
  },
  {
    id: "Genç Kent-bed",
    name: "Genç Kent Yatak Baza Takımı",
    category: "Yatak Odası",
    image:
      "https://images.unsplash.com/photo-1759691554884-914bd85837c8?auto=format&fit=crop&w=1200&q=80",
    blurb: "Yatak odanıza huzurlu ve dengeli bir hava katan minimal tasarım.",
  },
  {
    id: "Genç Kent-armchair",
    name: "Genç Kent Berjer",
    category: "Koltuklar",
    image:
      "https://images.unsplash.com/photo-1759691554837-be93ac47760b?auto=format&fit=crop&w=1200&q=80",
    blurb: "Tek başına bir köşeyi tamamlayan, karakterli bir oturma parçası.",
  },
  {
    id: "Genç Kent-console",
    name: "Genç Kent Konsol",
    category: "Dekorasyon",
    image:
      "https://images.unsplash.com/photo-1759691555285-74005fcf3ddf?auto=format&fit=crop&w=1200&q=80",
    blurb: "Giriş ya da salon duvarınıza sade bir karşılama noktası kazandırır.",
  },
  {
    id: "Genç Kent-sandalye",
    name: "Genç Kent Sandalye",
    category: "Masa & Sandalye",
    image:
      "https://images.unsplash.com/photo-1763890965387-5afe71908a70?auto=format&fit=crop&w=1200&q=80",
    blurb: "Yemek masanızla uyumlu, ince işçilikli bir tamamlayıcı parça.",
  },
];
