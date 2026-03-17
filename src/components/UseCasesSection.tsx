/* ============================================================
   LOKAL SYSTEMS — Use Cases Section
   Design: Dark Precision — tabbed interface, use case cards
   with industry examples for AI phone agents
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Utensils, Scissors, Stethoscope, Car, ShoppingBag, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Utensils,
    industry: "Restaurantes",
    title: "Reservas automáticas",
    description:
      "El agente IA atiende llamadas para reservar mesa, confirma disponibilidad en tiempo real y envía recordatorios automáticos. Reduce no-shows hasta un 40%.",
    metrics: ["Reservas 24/7", "-40% no-shows", "0 llamadas perdidas"],
    color: "#00B4FF",
  },
  {
    icon: Scissors,
    industry: "Peluquerías & Estética",
    title: "Gestión de citas",
    description:
      "Agenda, modifica y cancela citas de forma automática. El agente conoce la disponibilidad de cada profesional y gestiona la agenda sin intervención humana.",
    metrics: ["Agenda integrada", "Recordatorios SMS", "Gestión de cancelaciones"],
    color: "#7B2FFF",
  },
  {
    icon: Stethoscope,
    industry: "Clínicas & Salud",
    title: "Citas médicas y seguimiento",
    description:
      "Gestiona citas, responde preguntas frecuentes sobre servicios y realiza llamadas de seguimiento a pacientes que no han vuelto en un tiempo determinado.",
    metrics: ["Citas automatizadas", "Seguimiento de pacientes", "Preguntas frecuentes"],
    color: "#00B4FF",
  },
  {
    icon: Car,
    industry: "Talleres & Automoción",
    title: "Presupuestos y citas de taller",
    description:
      "El agente recoge los datos del vehículo, el problema y la disponibilidad del cliente para generar citas de taller y hacer seguimiento de presupuestos pendientes.",
    metrics: ["Citas de taller", "Seguimiento presupuestos", "Recordatorios de revisión"],
    color: "#7B2FFF",
  },
  {
    icon: ShoppingBag,
    industry: "Comercios locales",
    title: "Recuperación de clientes",
    description:
      "Llama proactivamente a clientes inactivos de tu base de datos con ofertas personalizadas, recordatorios de stock o invitaciones a eventos especiales.",
    metrics: ["Reactivación de clientes", "Ofertas personalizadas", "Campañas outbound"],
    color: "#00B4FF",
  },
  {
    icon: Building2,
    industry: "Inmobiliarias",
    title: "Cualificación de leads",
    description:
      "Llama a los leads que han visitado tu web, cualifica su interés, recoge sus requisitos y agenda visitas con el agente comercial adecuado.",
    metrics: ["Cualificación automática", "Agenda de visitas", "Seguimiento de leads"],
    color: "#7B2FFF",
  },
];

function UseCaseCard({ useCase, index, visible }: { useCase: typeof useCases[0]; index: number; visible: boolean }) {
  const Icon = useCase.icon;
  return (
    <div
      className={`ls-card rounded-2xl p-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div
          className="p-2.5 rounded-xl flex-shrink-0"
          style={{
            background: `${useCase.color}12`,
            border: `1px solid ${useCase.color}25`,
          }}
        >
          <Icon size={20} style={{ color: useCase.color }} />
        </div>
        <div>
          <div
            className="text-xs font-semibold mb-1 tracking-wide"
            style={{ color: useCase.color, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {useCase.industry}
          </div>
          <h3
            className="text-lg font-bold text-[#F0F4FF]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {useCase.title}
          </h3>
        </div>
      </div>

      <p
        className="text-[#8B9CC8] text-sm leading-relaxed mb-5"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {useCase.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {useCase.metrics.map((metric, i) => (
          <span
            key={i}
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{
              background: `${useCase.color}10`,
              border: `1px solid ${useCase.color}20`,
              color: useCase.color,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {metric}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function UseCasesSection() {
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
      id="casos"
      ref={sectionRef}
      className="py-24 lg:py-32"
      style={{ background: "#080C18" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
            style={{
              background: "rgba(0, 180, 255, 0.08)",
              border: "1px solid rgba(0, 180, 255, 0.2)",
              color: "#00B4FF",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            CASOS DE USO
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F4FF] max-w-xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Agentes IA para{" "}
              <span className="ls-text-gradient">cada sector</span>
            </h2>
            <p
              className="text-[#8B9CC8] text-base lg:text-lg max-w-md leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Nuestros agentes telefónicos IA se adaptan a cualquier tipo de negocio local.
              Aquí algunos ejemplos de lo que pueden hacer por ti.
            </p>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={index} useCase={useCase} index={index} visible={visible} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <p
            className="text-[#8B9CC8] text-base mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            ¿No ves tu sector? Nuestros agentes IA se adaptan a cualquier negocio.
          </p>
          <button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="ls-btn-primary px-8 py-4 rounded-xl text-base font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hablemos de tu caso
          </button>
        </div>
      </div>
    </section>
  );
}
