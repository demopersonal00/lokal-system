/* ============================================================
   LOKAL SYSTEMS — Services Section
   Design: Dark Precision — asymmetric grid, glow cards,
   service images with hover effects
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Phone, Search, Globe, Megaphone, ArrowRight } from "lucide-react";

const SERVICE_AI_PHONE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448076989/kjocXrXhS6LcXSPoXz6MPe/service_ai_phone_a0e69791.png";
const SERVICE_SEO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448076989/kjocXrXhS6LcXSPoXz6MPe/service_seo_fd1ae682.png";
const SERVICE_WEB = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448076989/kjocXrXhS6LcXSPoXz6MPe/service_web_412f0277.png";
const SERVICE_ADS = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448076989/kjocXrXhS6LcXSPoXz6MPe/service_ads_44e54ecd.png";

const services = [
  {
    id: "agentes-ia",
    icon: Phone,
    image: SERVICE_AI_PHONE,
    tag: "IA Conversacional",
    title: "Agentes Telefónicos IA",
    description:
      "Implementamos agentes de voz con IA que atienden llamadas entrantes y realizan llamadas salientes de forma autónoma, con una conversación natural e indistinguible de un humano.",
    features: [
      "Reservas y citas automáticas",
      "Recuperación de clientes inactivos (CRM)",
      "Atención 24/7 sin coste de personal",
      "Integración con tu sistema actual",
    ],
    accent: "#00B4FF",
    accentLight: "rgba(0, 180, 255, 0.08)",
  },
  {
    id: "seo-sem",
    icon: Search,
    image: SERVICE_SEO,
    tag: "Posicionamiento",
    title: "SEO & SEM Profesional",
    description:
      "Posicionamos tu negocio en los primeros resultados de Google con estrategias de SEO orgánico y campañas de publicidad pagada (SEM) optimizadas para maximizar el retorno.",
    features: [
      "Auditoría SEO completa",
      "Optimización de contenido y estructura",
      "Campañas Google Ads y Meta Ads",
      "Informes mensuales de rendimiento",
    ],
    accent: "#7B2FFF",
    accentLight: "rgba(123, 47, 255, 0.08)",
  },
  {
    id: "web",
    icon: Globe,
    image: SERVICE_WEB,
    tag: "Presencia Digital",
    title: "Desarrollo & Mantenimiento Web",
    description:
      "Creamos y mantenemos sitios web rápidos, seguros y optimizados. Nos encargamos del dominio, el código, la seguridad y las actualizaciones periódicas para que tú no tengas que preocuparte.",
    features: [
      "Diseño web profesional y responsive",
      "Gestión de dominio y hosting",
      "Seguridad y copias de seguridad",
      "Actualizaciones y soporte continuo",
    ],
    accent: "#00B4FF",
    accentLight: "rgba(0, 180, 255, 0.08)",
  },
  {
    id: "publicidad",
    icon: Megaphone,
    image: SERVICE_ADS,
    tag: "Marketing Digital",
    title: "Gestión de Publicidad Digital",
    description:
      "Diseñamos, lanzamos y optimizamos campañas publicitarias en Google, Meta, Instagram y otras plataformas para atraer clientes potenciales a tu negocio de forma constante.",
    features: [
      "Creación de creatividades y copys",
      "Segmentación de audiencias",
      "Optimización continua de campañas",
      "Análisis de resultados y ROI",
    ],
    accent: "#7B2FFF",
    accentLight: "rgba(123, 47, 255, 0.08)",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className={`ls-card rounded-2xl overflow-hidden transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Image area */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(to bottom, transparent 40%, rgba(8,12,24,0.95) 100%)`
        }} />
        {/* Tag */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
          style={{
            background: `${service.accentLight}`,
            border: `1px solid ${service.accent}40`,
            color: service.accent,
            fontFamily: "'Space Grotesk', sans-serif",
            letterSpacing: "0.06em",
          }}
        >
          {service.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 lg:p-8">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="p-2.5 rounded-xl flex-shrink-0"
            style={{ background: service.accentLight, border: `1px solid ${service.accent}30` }}
          >
            <Icon size={20} style={{ color: service.accent }} />
          </div>
          <h3
            className="text-xl font-bold text-[#F0F4FF] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {service.title}
          </h3>
        </div>

        <p className="text-[#8B9CC8] text-sm leading-relaxed mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm text-[#8B9CC8]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: service.accent }}
              />
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/btn"
          style={{ color: service.accent, fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Saber más
          <ArrowRight size={14} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="py-24 lg:py-32" style={{ background: "#080C18" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={titleRef}
          className={`mb-16 lg:mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
            NUESTROS SERVICIOS
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F4FF] max-w-xl"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Todo lo que tu negocio{" "}
              <span className="ls-text-gradient">necesita para crecer</span>
            </h2>
            <p
              className="text-[#8B9CC8] text-base lg:text-lg max-w-md leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Soluciones integradas de IA y marketing digital, personalizadas para cada negocio.
              Sin tecnicismos, con resultados medibles.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
