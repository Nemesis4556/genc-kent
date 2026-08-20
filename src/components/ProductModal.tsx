import { useEffect } from "react";
import type { Product } from "../data/products";
import { productWaMessage, waLink } from "../data/business";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        background: "rgba(24,20,15,0.72)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(12px, 4vw, 40px)",
        animation: "fadeIn 0.35s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--ivory)",
          maxWidth: 980,
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          borderRadius: 2,
          animation: "riseIn 0.45s cubic-bezier(0.16,0.8,0.25,1)",
        }}
        className="modal-grid"
      >
        <div style={{ position: "relative", minHeight: 320 }}>
          <img
            src={product.image}
            alt={product.name}
            className="photo"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
          />
        </div>

        <div
          style={{
            padding: "clamp(28px, 4vw, 48px)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button
            onClick={onClose}
            aria-label="Kapat"
            style={{
              alignSelf: "flex-end",
              background: "none",
              border: "none",
              fontSize: 26,
              lineHeight: 1,
              color: "var(--charcoal-soft)",
              marginBottom: 8,
            }}
          >
            ×
          </button>

          <div className="eyebrow">{product.category}</div>
          <h3 style={{ fontSize: "clamp(28px, 3vw, 38px)", marginTop: 10 }}>
            {product.name}
          </h3>

          <p
            style={{
              marginTop: 18,
              color: "var(--charcoal-soft)",
              lineHeight: 1.7,
              fontSize: 15,
            }}
          >
            {product.blurb}
          </p>

          <div
            style={{
              marginTop: 24,
              paddingTop: 20,
              borderTop: "1px solid var(--line)",
              fontSize: 13,
              color: "var(--charcoal-soft)",
              lineHeight: 1.8,
            }}
          >
            Ölçü, renk seçenekleri ve teslimat detayları için bizimle WhatsApp
            üzerinden iletişime geçebilirsiniz.
          </div>

          <div style={{ marginTop: "auto", paddingTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={waLink(productWaMessage(product.name))}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid"
            >
              WhatsApp'tan Bilgi Al <span className="btn-arrow">→</span>
            </a>
            <a href="#magaza" className="btn btn-ghost">
              Mağazayı Ziyaret Et
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes riseIn { from { opacity: 0; transform: translateY(24px) scale(0.98); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @media (max-width: 760px) {
          .modal-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
