import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { business, waLink } from "../data/business";

const links = [
  { label: "Koleksiyon", href: "#koleksiyon" },
  { label: "Oturma Odası", href: "#koleksiyon" },
  { label: "Yemek Odası", href: "#koleksiyon" },
  { label: "Yatak Odası", href: "#koleksiyon" },
  { label: "Dekorasyon", href: "#koleksiyon" },
  { label: "Hakkımızda", href: "#marka" },
  { label: "İletişim", href: "#magaza" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? "rgba(246,241,232,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 24px rgba(42,36,29,0.05)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? 68 : 92,
            transition: "height 0.4s ease",
          }}
        >
          <a href="#top" style={{ lineHeight: 1 }}>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: scrolled ? 19 : 22,
                letterSpacing: "0.06em",
                fontWeight: 500,
                transition: "font-size 0.4s ease",
              }}
            >
              Genç Kent
            </div>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.28em",
                color: "var(--charcoal-soft)",
                marginTop: 3,
              }}
            >

            </div>
          </a>

          <nav
            style={{
              display: "flex",
              gap: 30,
              fontSize: 13,
              letterSpacing: "0.02em",
            }}
            className="nav-desktop"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ color: "var(--charcoal-soft)", position: "relative" }}
                className="nav-link"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href={waLink("Merhaba, mağaza hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost nav-cta"
            >
              WhatsApp
            </a>
            <button
              aria-label="Menü"
              onClick={() => setOpen(true)}
              className="menu-btn"
              style={{
                display: "none",
                background: "none",
                border: "none",
                flexDirection: "column",
                gap: 5,
                padding: 6,
              }}
            >
              <span style={barStyle} />
              <span style={barStyle} />
            </button>
          </div>
        </div>
      </header>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "var(--ivory)",
          transform: open ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.5s cubic-bezier(0.16,0.8,0.25,1)",
          display: "flex",
          flexDirection: "column",
        }}
        className="mobile-menu"
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 92,
          }}
        >
          <div style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>
            Genç Kent
          </div>
          <button
            aria-label="Kapat"
            onClick={() => setOpen(false)}
            style={{
              background: "none",
              border: "none",
              fontSize: 28,
              lineHeight: 1,
              color: "var(--charcoal)",
            }}
          >
            ×
          </button>
        </div>
        <nav
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 26,
            marginTop: 20,
          }}
        >
          {links.map((l, i) => (
            <a
              key={l.label + i}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 32,
                borderBottom: "1px solid var(--line)",
                paddingBottom: 14,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="container" style={{ marginTop: "auto", marginBottom: 40 }}>
          <a
            href={waLink("Merhaba, mağaza hakkında bilgi almak istiyorum.")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid"
            style={{ width: "100%", justifyContent: "center" }}
          >
            WhatsApp'tan Yaz
          </a>
          <div style={{ marginTop: 16, fontSize: 13, color: "var(--charcoal-soft)" }}>
            {business.address}
          </div>
        </div>
      </div>

      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -4px;
          width: 0%; height: 1px;
          background: var(--walnut);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
        @media (max-width: 980px) {
          .nav-desktop { display: none !important; }
        }
        @media (max-width: 700px) {
          .nav-cta { display: none !important; }
          .menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

const barStyle: CSSProperties = {
  width: 24,
  height: 1.5,
  background: "var(--charcoal)",
  display: "block",
};
