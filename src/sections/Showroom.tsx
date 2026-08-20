import Reveal from "../components/Reveal";
import { showroomImages } from "../data/gallery";
import { business } from "../data/business";

export default function Showroom() {
  return (
    <section
      style={{
        padding: "clamp(72px, 10vw, 140px) 0",
        background: "var(--charcoal)",
        color: "var(--ivory)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(30px, 6vw, 80px)",
            alignItems: "center",
          }}
          className="showroom-grid"
        >
          <Reveal>
            <div className="eyebrow" style={{ color: "rgba(246,241,232,0.6)" }}>
              Fiziksel Deneyim
            </div>
            <h2
              style={{
                fontSize: "clamp(34px, 5vw, 58px)",
                marginTop: 10,
                color: "var(--white)",
              }}
            >
              YAKINDAN
              <br />
              <em style={{ fontStyle: "italic" }}>KEŞFEDİN.</em>
            </h2>
            <p
              style={{
                marginTop: 22,
                color: "rgba(246,241,232,0.72)",
                fontSize: 16,
                lineHeight: 1.7,
                maxWidth: 460,
              }}
            >
              Mobilyaları yakından görmek, detaylarını incelemek ve size
              uygun seçenekleri keşfetmek için mağazamızı ziyaret edin.
            </p>
            <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="#magaza"
                className="btn"
                style={{ borderColor: "rgba(246,241,232,0.5)", color: "var(--white)" }}
              >
                Mağazaya Gel <span className="btn-arrow">→</span>
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  business.mapQuery
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ borderColor: "rgba(246,241,232,0.5)", color: "var(--white)" }}
              >
                Yol Tarifi Al <span className="btn-arrow">→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              <img
                src={showroomImages[0]}
                alt="Showroom"
                className="photo"
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  objectPosition: "center 35%",
                  marginTop: 32,
                }}
              />
              <img
                src={showroomImages[1]}
                alt="Showroom"
                className="photo"
                style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "center 35%" }}
              />
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .showroom-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
