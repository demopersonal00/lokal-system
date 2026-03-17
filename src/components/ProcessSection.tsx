/* ============================================================
   LOKAL SYSTEMS — Process Section
   Design: Dark Precision — horizontal timeline, step cards,
   numbered steps with gradient connectors
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { MessageSquare, Settings, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta inicial",
    description:
      "Analizamos tu negocio, tus objetivos y los procesos que más tiempo te consumen. Sin compromiso y completamente gratuita.",
    accent: "#00B4FF",
  },
  {
    number: "02",
    icon: Settings,
    title: "Diseño de la solución",
    description:
      "Creamos una propuesta personalizada con las herramientas de IA y marketing más adecuadas para tu caso específico.",
    accent: "#7B2FFF",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Implementación",
    description:
      "Ponemos en marcha las soluciones de forma rápida y sin interrumpir tu operativa diaria. Nos encargamos de todo el proceso técnico.",
    accent: "#00B4FF",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Seguimiento y mejora",
    description:
      "Monitorizamos los resultados, optimizamos continuamente y te informamos con métricas claras del impacto real en tu negocio.",
    accent: "#7B2FFF",
  },
];

export default function ProcessSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proceso"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0D1220" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #00B4FF 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: "rgba(123, 47, 255, 0.08)",
              border: "1px solid rgba(123, 47, 255, 0.2)",
              color: "#7B2FFF",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            CÓMO FUNCIONA
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F4FF] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            De la idea a los resultados,{" "}
            <span className="ls-text-gradient">en 4 pasos</span>
          </h2>
          <p
            className="text-[#8B9CC8] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Un proceso claro, ágil y sin complicaciones técnicas.
            Tú te centras en tu negocio, nosotros en la tecnología.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(0,180,255,0.3), rgba(123,47,255,0.3), transparent)",
              top: "3rem",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Step number + icon */}
                  <div className="flex flex-col items-center lg:items-start mb-6">
                    <div
                      className="relative w-24 h-24 rounded-2xl flex items-center justify-center mb-4 ls-gradient-border"
                      style={{
                        background: `linear-gradient(135deg, ${step.accent}15 0%, rgba(8,12,24,0.9) 100%)`,
                        border: `1px solid ${step.accent}30`,
                      }}
                    >
                      <Icon size={32} style={{ color: step.accent }} />
                      {/* Step number badge */}
                      <div
                        className="absolute -top-3 -right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background: step.accent,
                          color: "#080C18",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left">
                    <div
                      className="text-xs font-bold mb-2 tracking-widest"
                      style={{ color: step.accent, fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      PASO {step.number}
                    </div>
                    <h3
                      className="text-xl font-bold text-[#F0F4FF] mb-3"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#8B9CC8] text-sm leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
