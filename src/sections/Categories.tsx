import Reveal from "../components/Reveal";
import { categories } from "../data/categories";

export default function Categories() {
  const big = categories.filter((c) => c.size === "lg");
  const mid = categories.filter((c) => c.size === "md");
  const small = categories.filter((c) => c.size === "sm");

  return (
    <section id="koleksiyon" style={{ padding: "clamp(72px, 10vw, 140px) 0" }}>
      <div className="container">
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 20,
              marginBottom: "clamp(36px, 5vw, 64px)",
            }}
          >
            <div>
              <div className="eyebrow">Koleksiyon</div>
              <h2 style={{ fontSize: "clamp(34px, 5vw, 56px)", marginTop: 8 }}>
                Koleksiyonu Keşfet
              </h2>
            </div>
            <p
              style={{
                maxWidth: 340,
                color: "var(--charcoal-soft)",
                fontSize: 15,
                lineHeight: 1.6,
              }}
            >
              Her kategori kendi karakterini taşır. Evinizin hangi köşesini
              yenilemek istediğinizi seçin.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr",
            gap: "clamp(14px, 2vw, 22px)",
          }}
          className="cat-top-grid"
        >
          {big.map((c) => (
            <CategoryTile key={c.id} name={c.name} image={c.image} aspect="5/4" big />
          ))}
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              gap: "clamp(14px, 2vw, 22px)",
            }}
            className="cat-mid-grid"
          >
            {mid.map((c) => (
              <CategoryTile key={c.id} name={c.name} image={c.image} aspect="16/9" />
            ))}
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(14px, 2vw, 22px)",
            marginTop: "clamp(14px, 2vw, 22px)",
          }}
          className="cat-bottom-grid"
        >
          {small.map((c, i) => (
            <CategoryTile
              key={c.id}
              name={c.name}
              image={c.image}
              aspect="4/5"
              delay={0.1 * i}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .cat-top-grid { grid-template-columns: 1fr !important; }
          .cat-mid-grid { grid-template-rows: unset !important; grid-template-columns: 1fr 1fr !important; }
          .cat-bottom-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 520px) {
          .cat-bottom-grid { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .cat-mid-grid { gap: 10px !important; }
        }
      `}</style>
    </section>
  );
}

function CategoryTile({
  name,
  image,
  aspect,
  big = false,
  delay = 0,
}: {
  name: string;
  image: string;
  aspect: string;
  big?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <a
        href="#one-cikanlar"
        className="cat-tile"
        style={{
          position: "relative",
          display: "block",
          aspectRatio: aspect,
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        <img
          src={image}
          alt={name}
          className="cat-img photo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
            transition: "transform 1s cubic-bezier(0.16,0.8,0.25,1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(20,16,10,0.55) 100%)",
            opacity: 0,
            transition: "opacity 0.5s ease",
          }}
          className="cat-overlay"
        />
        <div
          style={{
            position: "absolute",
            left: big ? 28 : 20,
            bottom: big ? 28 : 20,
            right: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            color: "var(--white)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: big ? "clamp(24px,2.6vw,34px)" : "clamp(18px,1.8vw,24px)",
              letterSpacing: "0.01em",
            }}
          >
            {name}
          </span>
          <span
            className="cat-arrow"
            style={{
              fontSize: 20,
              transform: "translateX(0)",
              transition: "transform 0.4s ease",
              display: "inline-block",
            }}
          >
            →
          </span>
        </div>
      </a>
      <style>{`
        .cat-tile:hover .cat-img { transform: scale(1.06); }
        .cat-tile:hover .cat-overlay { opacity: 1; }
        .cat-tile:hover .cat-arrow { transform: translateX(6px); }
      `}</style>
    </Reveal>
  );
}
