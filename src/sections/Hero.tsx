import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1758448511322-8bfc73daf606?auto=format&fit=crop&w=2400&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "saturate(0.92) contrast(1.04) sepia(0.05) brightness(1.01)",
            transform: loaded ? "scale(1)" : "scale(1.12)",
            transition: "transform 2.4s cubic-bezier(0.16,0.8,0.25,1)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(42,36,29,0.28) 0%, rgba(42,36,29,0.05) 30%, rgba(42,36,29,0.55) 100%)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--charcoal)",
            transformOrigin: "top",
            transform: loaded ? "scaleY(0)" : "scaleY(1)",
            transition: "transform 1.3s cubic-bezier(0.65,0,0.15,1) 0.15s",
          }}
        />
      </div>

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          paddingBottom: "clamp(48px, 8vw, 96px)",
          paddingTop: 140,
        }}
      >
        <div style={{ overflow: "hidden", marginBottom: 6 }}>
          <div
            className="eyebrow"
            style={{
              color: "rgba(246,241,232,0.85)",
              transform: loaded ? "translateY(0)" : "translateY(120%)",
              transition: "transform 0.9s cubic-bezier(0.16,0.8,0.25,1) 0.9s",
            }}
          >
            Genç Kent — Dijital Showroom
          </div>
        </div>

        <h1
          style={{
            color: "var(--white)",
            fontSize: "clamp(46px, 9vw, 118px)",
            fontWeight: 500,
            lineHeight: 0.98,
          }}
        >
          {["YAŞAM", "ALANINIZI", "YENİDEN TASARLAYIN."].map((line, i) => (
            <span key={line} style={{ display: "block", overflow: "hidden" }}>
              <span
                style={{
                  display: "block",
                  transform: loaded ? "translateY(0)" : "translateY(110%)",
                  transition: `transform 1s cubic-bezier(0.16,0.8,0.25,1) ${0.35 + i * 0.12}s`,
                  fontStyle: i === 2 ? "italic" : "normal",
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 28,
            marginTop: 34,
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1s ease 1.1s, transform 1s ease 1.1s",
          }}
        >
          <p
            style={{
              color: "rgba(246,241,232,0.88)",
              fontSize: "clamp(15px, 1.6vw, 18px)",
              maxWidth: 420,
              lineHeight: 1.6,
            }}
          >
            Modern yaşam alanları için seçilmiş mobilyaları keşfedin.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#koleksiyon" className="btn btn-solid">
              Koleksiyonu Keşfet <span className="btn-arrow">→</span>
            </a>
            <a
              href="#magaza"
              className="btn"
              style={{
                borderColor: "rgba(246,241,232,0.55)",
                color: "var(--white)",
              }}
            >
              Mağazayı Ziyaret Et
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
