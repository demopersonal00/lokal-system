/* ============================================================
   LOKAL SYSTEMS — Testimonials / Social Proof Section
   Design: Dark Precision — quote cards, star ratings,
   client logos strip
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Propietario",
    business: "Restaurante El Rincón",
    quote:
      "El agente de IA gestiona todas las reservas. Antes perdíamos llamadas constantemente en hora punta, ahora no se nos escapa ninguna. Las reservas han subido un 30% en el primer mes.",
    rating: 5,
    accent: "#00B4FF",
    initial: "C",
  },
  {
    name: "Laura Sánchez",
    role: "Directora",
    business: "Clínica Dental Sánchez",
    quote:
      "El posicionamiento SEO ha transformado nuestra visibilidad online. Pasamos de la tercera página de Google a los primeros resultados en menos de 3 meses. Ahora recibimos el doble de consultas.",
    rating: 5,
    accent: "#7B2FFF",
    initial: "L",
  },
  {
    name: "Miguel Torres",
    role: "Gerente",
    business: "Taller Torres Automoción",
    quote:
      "El agente llama a los clientes con revisiones pendientes y agenda las citas automáticamente. Hemos recuperado clientes que llevaban más de un año sin venir. El ROI es brutal.",
    rating: 5,
    accent: "#00B4FF",
    initial: "M",
  },
];

const industries = [
  "Restauración", "Salud & Bienestar", "Automoción",
  "Comercio Local", "Inmobiliaria", "Estética & Belleza",
];

export default function TestimonialsSection() {
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
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#0D1220" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-4"
          style={{ background: "radial-gradient(circle, #7B2FFF 0%, transparent 70%)" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
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
            RESULTADOS REALES
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F4FF] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Lo que dicen{" "}
            <span className="ls-text-gradient">nuestros clientes</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`ls-card rounded-2xl p-6 lg:p-8 flex flex-col transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="mb-4 flex-shrink-0"
                style={{ color: testimonial.accent, opacity: 0.6 }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-current"
                    style={{ color: "#FFB800" }}
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[#C8D4F0] text-sm leading-relaxed flex-1 mb-6 italic"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: `${testimonial.accent}20`,
                    border: `1px solid ${testimonial.accent}40`,
                    color: testimonial.accent,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <div
                    className="text-sm font-bold text-[#F0F4FF]"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    className="text-xs text-[#8B9CC8]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {testimonial.role} · {testimonial.business}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries strip */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <p
            className="text-center text-xs text-[#8B9CC8] mb-6 tracking-widest font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            SECTORES EN LOS QUE TRABAJAMOS
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(13, 18, 32, 0.8)",
                  border: "1px solid rgba(0, 180, 255, 0.12)",
                  color: "#8B9CC8",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
