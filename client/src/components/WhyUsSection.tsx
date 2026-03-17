/* ============================================================
   LOKAL SYSTEMS — Why Us Section
   Design: Dark Precision — asymmetric layout, value props,
   gradient accent cards
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Target, Clock, Users, Shield, Zap, BarChart3 } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Personalización total",
    description: "Cada solución se diseña específicamente para tu negocio. No usamos plantillas genéricas ni soluciones de caja.",
    accent: "#00B4FF",
  },
  {
    icon: Clock,
    title: "Resultados rápidos",
    description: "Implementamos en días, no en meses. Empiezas a ver resultados desde la primera semana de funcionamiento.",
    accent: "#7B2FFF",
  },
  {
    icon: Users,
    title: "Trato cercano",
    description: "Somos un equipo pequeño y comprometido. Tienes acceso directo a quien trabaja en tu proyecto, sin intermediarios.",
    accent: "#00B4FF",
  },
  {
    icon: Shield,
    title: "Sin tecnicismos",
    description: "Te explicamos todo en lenguaje claro. Tú decides con información real, sin jerga tecnológica innecesaria.",
    accent: "#7B2FFF",
  },
  {
    icon: Zap,
    title: "Tecnología de vanguardia",
    description: "Usamos las herramientas de IA más avanzadas del mercado, adaptadas a la escala y presupuesto de un negocio local.",
    accent: "#00B4FF",
  },
  {
    icon: BarChart3,
    title: "Métricas transparentes",
    description: "Informes claros y periódicos con el impacto real de cada solución. Sabrás exactamente qué está funcionando y por qué.",
    accent: "#7B2FFF",
  },
];

export default function WhyUsSection() {
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
      id="nosotros"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0D1220" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #7B2FFF 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #00B4FF 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
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
              POR QUÉ LOKAL SYSTEMS
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F4FF] mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              La IA no es solo para{" "}
              <span className="ls-text-gradient">grandes empresas</span>
            </h2>

            <p
              className="text-[#8B9CC8] text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Creamos Lokal Systems con un objetivo claro: hacer accesible la tecnología de IA
              a los negocios locales que más la necesitan. Restaurantes, clínicas, talleres,
              comercios... todos merecen las mismas herramientas que usan las grandes corporaciones,
              adaptadas a su escala y presupuesto.
            </p>

            <p
              className="text-[#8B9CC8] text-lg leading-relaxed mb-10"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              No somos una gran agencia con procesos lentos. Somos un equipo ágil, especializado
              y comprometido con el éxito de cada cliente. Tu problema es nuestro problema.
            </p>

            {/* Key metric */}
            <div
              className="ls-gradient-border rounded-2xl p-6"
              style={{ background: "rgba(13, 18, 32, 0.8)" }}
            >
              <div className="flex items-center gap-6">
                <div>
                  <div
                    className="text-4xl font-bold ls-text-gradient mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    100%
                  </div>
                  <div
                    className="text-sm text-[#8B9CC8]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Soluciones personalizadas
                  </div>
                </div>
                <div className="w-px h-12" style={{ background: "rgba(0,180,255,0.2)" }} />
                <div>
                  <div
                    className="text-4xl font-bold ls-text-gradient mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    0
                  </div>
                  <div
                    className="text-sm text-[#8B9CC8]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Plantillas genéricas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Value props grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="ls-card rounded-xl p-5 transition-all duration-700"
                  style={{ transitionDelay: `${200 + index * 80}ms` }}
                >
                  <div
                    className="p-2 rounded-lg w-fit mb-3"
                    style={{
                      background: `${value.accent}12`,
                      border: `1px solid ${value.accent}25`,
                    }}
                  >
                    <Icon size={18} style={{ color: value.accent }} />
                  </div>
                  <h4
                    className="text-sm font-bold text-[#F0F4FF] mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {value.title}
                  </h4>
                  <p
                    className="text-xs text-[#8B9CC8] leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
