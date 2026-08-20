import { waLink } from "../data/business";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Merhaba, Genç Kent'da gördüğüm ürünler hakkında bilgi almak istiyorum.")}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      style={{
        position: "fixed",
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 90,
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        background: "var(--charcoal)",
        color: "var(--ivory)",
        padding: "15px 20px",
        borderRadius: 3,
        fontSize: 14,
        boxShadow: "0 10px 30px rgba(42,36,29,0.35)",
      }}
    >
      WhatsApp'tan Bilgi Al
      <style>{`
        @media (max-width: 700px) {
          .wa-float { display: flex !important; }
        }
      `}</style>
    </a>
  );
}
