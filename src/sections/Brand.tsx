import Reveal from "../components/Reveal";

export default function Brand() {
  return (
    <section id="marka" style={{ padding: "clamp(72px, 10vw, 140px) 0", background: "var(--ivory-deep)" }}>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(30px, 6vw, 80px)",
          alignItems: "center",
        }}
        id="brand-grid"
      >
        <Reveal>
          <img
            src="https://images.unsplash.com/photo-1759691555285-74005fcf3ddf?auto=format&fit=crop&w=1200&q=80"
            alt="Genç Kent iç mekan"
            className="photo"
            style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", objectPosition: "center 35%" }}
          />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="eyebrow">Marka</div>
          <h2 style={{ fontSize: "clamp(30px, 4.4vw, 50px)", marginTop: 10 }}>
            YAŞAM ALANLARI
            <br />
            <em style={{ fontStyle: "italic" }}>İÇİN TASARLANDI.</em>
          </h2>
          <p
            style={{
              marginTop: 22,
              color: "var(--charcoal-soft)",
              fontSize: 16,
              lineHeight: 1.75,
              maxWidth: 460,
            }}
          >
            Genç Kent, mobilyayı yalnızca bir eşya değil, gündelik hayatın
            bir parçası olarak görür. Her parça, evinizin karakterine katkı
            sunacak şekilde seçilir.
          </p>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 780px) {
          #brand-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
