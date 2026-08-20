import { business } from "../data/business";

const menuCols = [
  {
    title: "Koleksiyon",
    links: ["Oturma Odası", "Yemek Odası", "Yatak Odası", "Dekorasyon"],
  },
  {
    title: "Kurumsal",
    links: ["Hakkımızda", "İletişim"],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--charcoal)",
        color: "rgba(246,241,232,0.85)",
        padding: "clamp(56px, 8vw, 90px) 0 32px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
            gap: "clamp(30px, 5vw, 50px)",
            paddingBottom: 50,
            borderBottom: "1px solid rgba(246,241,232,0.14)",
          }}
          className="footer-grid"
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 24,
                color: "var(--white)",
              }}
            >
              Genç Kent
            </div>
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.28em",
                marginTop: 6,
                color: "rgba(246,241,232,0.55)",
              }}
            >

            </div>
            <p style={{ marginTop: 20, fontSize: 14, lineHeight: 1.7, maxWidth: 260, color: "rgba(246,241,232,0.6)" }}>
              Modern yaşam alanları için seçilmiş mobilya koleksiyonları.
            </p>
          </div>

          {menuCols.map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(246,241,232,0.5)" }}>
                {col.title}
              </div>
              <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <a key={l} href="#koleksiyon" style={{ fontSize: 14 }}>
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(246,241,232,0.5)" }}>
              İletişim
            </div>
            <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10, fontSize: 14 }}>
              <a href={business.phoneHref}>{business.phoneDisplay}</a>
              <a href={business.instagramUrl} target="_blank" rel="noreferrer">
                {business.instagramHandle}
              </a>
              <span style={{ color: "rgba(246,241,232,0.6)" }}>{business.address}</span>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: 24,
            fontSize: 12.5,
            color: "rgba(246,241,232,0.45)",
          }}
        >
          © {business.year} Genç Kent
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
