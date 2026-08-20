import Reveal from "../components/Reveal";
import { instagramImages } from "../data/gallery";
import { business } from "../data/business";

export default function InstagramSection() {
  return (
    <section style={{ padding: "clamp(72px, 10vw, 140px) 0" }}>
      <div className="container">
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: "clamp(30px, 5vw, 50px)",
            }}
          >
            <div>
              <div className="eyebrow">Genç Kent</div>
              <h2 style={{ fontSize: "clamp(30px, 4.4vw, 48px)", marginTop: 8 }}>
                Instagram'da Keşfet
              </h2>
            </div>
            <a href={business.instagramUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Instagram'da Keşfet <span className="btn-arrow">→</span>
            </a>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: "clamp(10px, 1.6vw, 16px)",
          }}
          className="ig-grid"
        >
          <div style={{ gridRow: "1 / 3" }}>
            <IgTile src={instagramImages[0].image} />
          </div>
          <IgTile src={instagramImages[1].image} />
          <div style={{ gridRow: "1 / 3", gridColumn: "3" }}>
            <IgTile src={instagramImages[3].image} />
          </div>
          <IgTile src={instagramImages[4].image} />
          <IgTile src={instagramImages[2].image} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ig-grid { grid-template-columns: repeat(2, 1fr) !important; grid-template-rows: auto !important; }
          .ig-grid > div { grid-row: auto !important; grid-column: auto !important; }
        }
      `}</style>
    </section>
  );
}

function IgTile({ src }: { src: string }) {
  return (
    <Reveal y={16} className="ig-tile-wrap">
      <a href="#" style={{ display: "block", height: "100%", overflow: "hidden" }} className="ig-tile">
        <img
          src={src}
          alt="Genç Kent Instagram"
          className="ig-img photo"
          style={{
            width: "100%",
            height: "100%",
            minHeight: 160,
            objectFit: "cover",
            objectPosition: "center 40%",
            transition: "transform 0.9s cubic-bezier(0.16,0.8,0.25,1)",
          }}
        />
      </a>
      <style>{`
        .ig-tile-wrap { height: 100%; }
        .ig-tile:hover .ig-img { transform: scale(1.06); }
      `}</style>
    </Reveal>
  );
}
