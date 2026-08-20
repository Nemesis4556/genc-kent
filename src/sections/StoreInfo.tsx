import Reveal from "../components/Reveal";
import { business } from "../data/business";

export default function StoreInfo() {
  return (
    <section id="magaza" style={{ padding: "clamp(72px, 10vw, 140px) 0" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(30px, 6vw, 70px)",
          }}
          className="store-grid"
        >
          <Reveal>
            <div className="eyebrow">Mağaza Bilgileri</div>
            <h2 style={{ fontSize: "clamp(30px, 4vw, 44px)", marginTop: 10 }}>
              Bizi Ziyaret Edin
            </h2>

            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 22 }}>
              <InfoRow label="Adres" value={business.address} />
              <InfoRow label="Telefon" value={business.phoneDisplay} href={business.phoneHref} />
              <InfoRow
                label="Instagram"
                value={business.instagramHandle}
                href={business.instagramUrl}
              />
              <div>
                <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--charcoal-soft)" }}>
                  Çalışma Saatleri
                </div>
                <div style={{ marginTop: 8, display: "flex", flexDirection: "column", gap: 4 }}>
                  {business.hours.map((h) => (
                    <div
                      key={h.day}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: 15,
                        maxWidth: 320,
                        borderBottom: "1px solid var(--line)",
                        paddingBottom: 6,
                      }}
                    >
                      <span>{h.day}</span>
                      <span style={{ color: "var(--charcoal-soft)" }}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <GoogleReviews />
          </Reveal>

          <Reveal delay={0.15}>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                business.mapQuery
              )}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "block",
                position: "relative",
                width: "100%",
                aspectRatio: "4/5",
                background:
                  "repeating-linear-gradient(45deg, var(--beige), var(--beige) 12px, var(--ivory-deep) 12px, var(--ivory-deep) 24px)",
                border: "1px solid var(--line)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  background: "rgba(246,241,232,0.55)",
                }}
              >
                <span style={{ fontSize: 30 }}>📍</span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                  }}
                >
                  Yol Tarifi Al
                </span>
                <span style={{ fontSize: 13, color: "var(--charcoal-soft)" }}>
                  Google Haritalar'da aç
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .store-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function InfoRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div>
      <div
        style={{
          fontSize: 12,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--charcoal-soft)",
        }}
      >
        {label}
      </div>
      <div style={{ fontSize: 17, marginTop: 4 }}>{value}</div>
    </div>
  );
  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

function GoogleReviews() {
  const { googleRating, googleReviewCount } = business;
  return (
    <div
      style={{
        marginTop: 40,
        padding: "24px 26px",
        border: "1px solid var(--line)",
        display: "flex",
        alignItems: "center",
        gap: 20,
        maxWidth: 380,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 34,
        }}
      >
        {googleRating ? `${googleRating.toFixed(1)}/5` : "—"}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 500 }}>Google Değerlendirmeleri</div>
        <div style={{ fontSize: 12.5, color: "var(--charcoal-soft)", marginTop: 2 }}>
          {googleReviewCount
            ? `${googleReviewCount} değerlendirme`
            : "Değerlendirmeler yakında"}
        </div>
      </div>
    </div>
  );
}
