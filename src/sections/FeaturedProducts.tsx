import { useState } from "react";
import Reveal from "../components/Reveal";
import ProductModal from "../components/ProductModal";
import { products } from "../data/products";
import type { Product } from "../data/products";

export default function FeaturedProducts() {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <section
      id="one-cikanlar"
      style={{ padding: "clamp(60px, 9vw, 120px) 0", background: "var(--ivory-deep)" }}
    >
      <div className="container">
        <Reveal>
          <div className="eyebrow">Seçkimiz</div>
          <h2 style={{ fontSize: "clamp(34px, 5vw, 56px)", marginTop: 8, maxWidth: 640 }}>
            Öne Çıkanlar
          </h2>
        </Reveal>

        <div
          style={{
            marginTop: "clamp(36px, 5vw, 60px)",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(20px, 3vw, 40px)",
          }}
          className="product-grid"
        >
          {products.map((p, i) => (
            <Reveal key={p.id} delay={0.08 * (i % 3)}>
              <button
                onClick={() => setActive(p)}
                className="product-card"
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  textAlign: "left",
                  width: "100%",
                }}
              >
                <div
                  className="photo-frame"
                  style={{ marginBottom: 18 }}
                >
                  <div className="photo-inner" style={{ aspectRatio: "4/5" }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      className="photo product-img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 35%",
                        transition: "transform 0.9s cubic-bezier(0.16,0.8,0.25,1)",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 20,
                      }}
                    >
                      {p.name}
                    </div>
                    <div
                      style={{
                        fontSize: 12.5,
                        color: "var(--charcoal-soft)",
                        marginTop: 4,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {p.category}
                    </div>
                  </div>
                </div>
                <div
                  className="product-link"
                  style={{
                    marginTop: 12,
                    fontSize: 13,
                    color: "var(--walnut-deep)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  Ürünü İncele
                  <span className="btn-arrow" style={{ display: "inline-block" }}>
                    →
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProductModal product={active} onClose={() => setActive(null)} />}

      <style>{`
        .product-card:hover .product-img { transform: scale(1.05); }
        .product-card:hover .product-link .btn-arrow { transform: translateX(4px); }
        @media (max-width: 900px) {
          .product-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .product-grid { grid-template-columns: 1fr 1fr !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  );
}
