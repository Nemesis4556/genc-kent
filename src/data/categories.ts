export interface Category {
  id: string;
  name: string;
  image: string;
  size: "lg" | "md" | "sm";
}

export const categories: Category[] = [
  {
    id: "oturma-odasi",
    name: "Oturma Odası",
    image:
      "https://images.unsplash.com/photo-1759691555105-17e609a3e46f?auto=format&fit=crop&w=1400&q=80",
    size: "lg",
  },
  {
    id: "yemek-odasi",
    name: "Yemek Odası",
    image:
      "https://images.unsplash.com/photo-1764076327046-fe35f955cba1?auto=format&fit=crop&w=1200&q=80",
    size: "md",
  },
  {
    id: "yatak-odasi",
    name: "Yatak Odası",
    image:
      "https://images.unsplash.com/photo-1759691554836-81ba129a75b7?auto=format&fit=crop&w=1200&q=80",
    size: "md",
  },
  {
    id: "koltuklar",
    name: "Koltuklar",
    image:
      "https://images.unsplash.com/photo-1759691554837-be93ac47760b?auto=format&fit=crop&w=1200&q=80",
    size: "sm",
  },
  {
    id: "masa-sandalye",
    name: "Masa & Sandalye",
    image:
      "https://images.unsplash.com/photo-1763890965387-5afe71908a70?auto=format&fit=crop&w=1200&q=80",
    size: "sm",
  },
  {
    id: "dekorasyon",
    name: "Dekorasyon",
    image:
      "https://images.unsplash.com/photo-1772211506039-8bd23fcc060a?auto=format&fit=crop&w=1200&q=80",
    size: "sm",
  },
];
