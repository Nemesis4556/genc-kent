import Reveal from "../components/Reveal";
import { materials } from "../data/gallery";

export default function MaterialStrip() {
  return (
    <section
      style={{
        background: "var(--charcoal)",
        color: "var(--ivory)",
        padding: "clamp(28px, 4vw, 40px) 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(24px, 5vw, 64px)",
          flexWrap: "wrap",
        }}
      >
        <Reveal>
          <div style={{ minWidth: 160 }}>
            <div className="eyebrow" style={{ color: "rgba(246,241,232,0.6)" }}>
              Detaylara bakın
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 20,
                fontStyle: "italic",
                marginTop: 4,
              }}
            >
              Doku &amp; Malzeme
            </div>
          </div>
        </Reveal>

        <div
          style={{
            display: "flex",
            gap: "clamp(18px, 3vw, 36px)",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          {materials.map((m, i) => (
            <Reveal key={m.id} delay={0.1 + i * 0.1}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    background: m.image
                      ? undefined
                      : "linear-gradient(135deg, #b7996f, #6f5a3c 60%, #a98a5e)",
                    border: "1px solid rgba(246,241,232,0.18)",
                  }}
                >
                  {m.image && (
                    <img
                      src={m.image}
                      alt={m.label}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  )}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{m.label}</div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "rgba(246,241,232,0.55)",
                      maxWidth: 190,
                    }}
                  >
                    {m.desc}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
