/* ============================================================
   LOKAL SYSTEMS — CTA Section (mid-page)
   Design: Dark Precision — gradient banner, bold headline,
   dual CTA buttons
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{ background: "#0D1220" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(0,180,255,0.06) 0%, rgba(123,47,255,0.06) 50%, rgba(0,180,255,0.04) 100%)",
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,180,255,0.3), rgba(123,47,255,0.3), transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,180,255,0.3), rgba(123,47,255,0.3), transparent)" }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
            style={{
              background: "rgba(0, 180, 255, 0.08)",
              border: "1px solid rgba(0, 180, 255, 0.2)",
              color: "#00B4FF",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            EMPIEZA HOY
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#F0F4FF] mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ¿Listo para que la IA{" "}
            <span className="ls-text-gradient">trabaje por ti?</span>
          </h2>

          <p
            className="text-[#8B9CC8] text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Primera consulta gratuita. Sin compromiso. Te mostramos exactamente
            cómo podemos ahorrarle tiempo y dinero a tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="ls-btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Solicitar consulta gratuita
              <ArrowRight size={18} />
            </button>
            <a
              href="tel:+34600000000"
              className="ls-btn-outline flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <Phone size={16} />
              Llamar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
