import Reveal from "../components/Reveal";
import { inspirationImages } from "../data/gallery";

export default function Inspiration() {
  return (
    <section style={{ padding: "clamp(72px, 10vw, 140px) 0" }}>
      <div className="container">
        <Reveal>
          <div style={{ maxWidth: 620 }}>
            <div className="eyebrow">İlham Alın</div>
            <h2 style={{ fontSize: "clamp(34px, 5vw, 56px)", marginTop: 8 }}>
              Eviniz İçin İlham
            </h2>
            <p
              style={{
                marginTop: 18,
                color: "var(--charcoal-soft)",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              Mobilyalarımızı yalnızca vitrin görselleriyle değil, gerçek
              yaşam alanları içindeki halleriyle keşfedin.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            marginTop: "clamp(36px, 5vw, 56px)",
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr",
            gridTemplateRows: "260px 260px",
            gap: "clamp(12px, 2vw, 20px)",
          }}
          className="insp-grid"
        >
          <div style={{ gridRow: "1 / 3" }}>
            <InspTile img={inspirationImages[0]} />
          </div>
          <InspTile img={inspirationImages[1]} />
          <div style={{ gridRow: "1 / 3" }}>
            <InspTile img={inspirationImages[2]} />
          </div>
          <InspTile img={inspirationImages[3]} />
        </div>
      </div>

      <style>{`
        .insp-tile-wrap { height: 100%; }
        @media (max-width: 820px) {
          .insp-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          .insp-grid > div { grid-row: auto !important; }
        }
        @media (max-width: 520px) {
          .insp-grid { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .insp-img { min-height: 170px !important; }
        }
      `}</style>
    </section>
  );
}

function InspTile({ img }: { img: { image: string; label: string; id: string } }) {
  return (
    <Reveal className="insp-tile-wrap" y={20}>
      <div
        style={{
          position: "relative",
          height: "100%",
          overflow: "hidden",
          borderRadius: 2,
        }}
        className="insp-tile"
      >
        <img
          src={img.image}
          alt={img.label}
          className="insp-img photo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 38%",
            minHeight: 260,
            transition: "transform 1.1s cubic-bezier(0.16,0.8,0.25,1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 16,
            bottom: 14,
            color: "var(--white)",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            textShadow: "0 1px 6px rgba(0,0,0,0.4)",
          }}
        >
          {img.label}
        </div>
      </div>
      <style>{`.insp-tile:hover .insp-img { transform: scale(1.07); }`}</style>
    </Reveal>
  );
}
