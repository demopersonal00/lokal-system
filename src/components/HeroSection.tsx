/* ============================================================
   LOKAL SYSTEMS — Hero Section
   Design: Dark Precision — full-screen hero with circuit bg,
   animated text, particle effects, asymmetric layout
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448076989/kjocXrXhS6LcXSPoXz6MPe/hero_bg_9e44ad9c.png";

const stats = [
  { value: 40, suffix: "%", label: "Ahorro de tiempo medio" },
  { value: 24, suffix: "/7", label: "Disponibilidad del agente IA" },
  { value: 3, suffix: "x", label: "Más conversiones con IA" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCounter({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCountUp(value, 1800, start);
  return (
    <div className="text-center lg:text-left">
      <div className="flex items-baseline gap-0.5 justify-center lg:justify-start">
        <span
          className="text-3xl lg:text-4xl font-bold ls-text-gradient"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {count}
        </span>
        <span
          className="text-2xl lg:text-3xl font-bold ls-text-gradient"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {suffix}
        </span>
      </div>
      <p className="text-xs lg:text-sm text-[#8B9CC8] mt-1 font-medium">{label}</p>
    </div>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    const statsTimer = setTimeout(() => setStatsVisible(true), 1200);
    return () => { clearTimeout(timer); clearTimeout(statsTimer); };
  }, []);

  const handleScrollToServices = () => {
    document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContact = () => {
    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#080C18" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-60"
          aria-hidden="true"
        />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(8,12,24,0.85) 0%, rgba(8,12,24,0.6) 50%, rgba(8,12,24,0.85) 100%)"
        }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48" style={{
          background: "linear-gradient(to bottom, transparent, #080C18)"
        }} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: i % 2 === 0 ? "#00B4FF" : "#7B2FFF",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.4,
              animation: `float ${4 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              background: "rgba(0, 180, 255, 0.08)",
              border: "1px solid rgba(0, 180, 255, 0.25)",
              color: "#00B4FF",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.08em",
              transitionDelay: "0ms",
            }}
          >
            <Zap size={12} className="fill-current" />
            SOLUCIONES IA PARA NEGOCIOS LOCALES
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              transitionDelay: "150ms",
              color: "#F0F4FF",
            }}
          >
            Tu negocio,{" "}
            <span className="ls-text-gradient">más inteligente.</span>
            <br />
            Tu tiempo,{" "}
            <span style={{ color: "#F0F4FF" }}>más valioso.</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg lg:text-xl text-[#8B9CC8] leading-relaxed mb-10 max-w-2xl transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              transitionDelay: "300ms",
            }}
          >
            Implementamos soluciones de Inteligencia Artificial personalizadas para negocios locales.
            Agentes telefónicos IA, posicionamiento web, mantenimiento técnico y publicidad digital.
            Todo lo que necesitas para escalar, en un solo lugar.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            <button
              onClick={handleScrollToContact}
              className="ls-btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Solicitar consulta gratuita
              <ArrowRight size={18} />
            </button>
            <button
              onClick={handleScrollToServices}
              className="ls-btn-outline flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Ver servicios
            </button>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-col sm:flex-row gap-8 lg:gap-12 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="ls-divider hidden sm:block w-px h-12 self-center" style={{
              background: "linear-gradient(to bottom, transparent, rgba(0,180,255,0.3), transparent)",
              width: "1px",
              height: "48px",
            }} />
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4 sm:gap-0 sm:block">
                <StatCounter {...stat} start={statsVisible} />
                {i < stats.length - 1 && (
                  <div className="hidden sm:block w-px h-12 mx-6 lg:mx-8 self-center" style={{
                    background: "linear-gradient(to bottom, transparent, rgba(0,180,255,0.2), transparent)",
                  }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-[#8B9CC8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Descubre más
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#00B4FF] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
