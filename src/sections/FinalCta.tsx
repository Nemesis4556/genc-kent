import Reveal from "../components/Reveal";
import { waLink } from "../data/business";

export default function FinalCta() {
  return (
    <section
      style={{
        padding: "clamp(90px, 12vw, 160px) 0",
        textAlign: "center",
        background:
          "radial-gradient(circle at 50% 0%, var(--beige) 0%, var(--ivory) 65%)",
      }}
    >
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Reveal>
          <h2
            style={{
              fontSize: "clamp(36px, 7vw, 76px)",
              maxWidth: 820,
              lineHeight: 1.02,
            }}
          >
            EVİNİZ İÇİN
            <br />
            <em style={{ fontStyle: "italic" }}>DOĞRU PARÇAYI BULUN.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p
            style={{
              marginTop: 26,
              color: "var(--charcoal-soft)",
              fontSize: 16,
              maxWidth: 480,
              lineHeight: 1.7,
            }}
          >
            Koleksiyonlarımızı keşfedin veya mağazamızı ziyaret ederek
            ürünleri yakından inceleyin.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div style={{ marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="#koleksiyon" className="btn btn-solid">
              Koleksiyonu İncele <span className="btn-arrow">→</span>
            </a>
            <a
              href={waLink("Merhaba, Genç Kent koleksiyonu hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
