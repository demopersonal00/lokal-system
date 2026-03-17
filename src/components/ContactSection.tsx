/* ============================================================
   LOKAL SYSTEMS — Contact Section
   Design: Dark Precision — split layout, form with glow inputs,
   contact info cards
   ============================================================ */

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hola@lokalsystems.com",
    href: "mailto:hola@lokalsystems.com",
    accent: "#00B4FF",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+34 600 000 000",
    href: "tel:+34600000000",
    accent: "#7B2FFF",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "España — Atención nacional",
    href: null,
    accent: "#00B4FF",
  },
];

const services = [
  "Agente Telefónico IA",
  "SEO / SEM",
  "Desarrollo Web",
  "Mantenimiento Web",
  "Publicidad Digital",
  "Consulta general",
];

export default function ContactSection() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    service: "",
    message: "",
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Por favor, completa los campos obligatorios.");
      return;
    }
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    toast.success("¡Mensaje enviado! Te contactaremos en menos de 24 horas.");
  };

  const inputStyle = {
    background: "rgba(13, 18, 32, 0.8)",
    border: "1px solid rgba(0, 180, 255, 0.15)",
    color: "#F0F4FF",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "#080C18" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-5"
          style={{ background: "radial-gradient(ellipse, #00B4FF 0%, transparent 70%)" }}
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
              background: "rgba(0, 180, 255, 0.08)",
              border: "1px solid rgba(0, 180, 255, 0.2)",
              color: "#00B4FF",
              fontFamily: "'Space Grotesk', sans-serif",
              letterSpacing: "0.08em",
            }}
          >
            CONTACTO
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F0F4FF] mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Hablemos de tu{" "}
            <span className="ls-text-gradient">próximo proyecto</span>
          </h2>
          <p
            className="text-[#8B9CC8] text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Primera consulta gratuita y sin compromiso. Cuéntanos tu negocio
            y te proponemos la solución más adecuada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <h3
              className="text-xl font-bold text-[#F0F4FF] mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Información de contacto
            </h3>

            <div className="space-y-4 mb-10">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="ls-card rounded-xl p-4 flex items-center gap-4"
                  >
                    <div
                      className="p-2.5 rounded-lg flex-shrink-0"
                      style={{
                        background: `${info.accent}12`,
                        border: `1px solid ${info.accent}25`,
                      }}
                    >
                      <Icon size={18} style={{ color: info.accent }} />
                    </div>
                    <div>
                      <div
                        className="text-xs text-[#8B9CC8] mb-0.5"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium text-[#F0F4FF] hover:text-[#00B4FF] transition-colors"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span
                          className="text-sm font-medium text-[#F0F4FF]"
                          style={{ fontFamily: "'DM Sans', sans-serif" }}
                        >
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Response time */}
            <div
              className="ls-gradient-border rounded-xl p-5"
              style={{ background: "rgba(13, 18, 32, 0.8)" }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#00B4FF] flex-shrink-0 mt-0.5" />
                <div>
                  <div
                    className="text-sm font-bold text-[#F0F4FF] mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Respuesta en menos de 24h
                  </div>
                  <div
                    className="text-xs text-[#8B9CC8] leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Revisamos todos los mensajes y respondemos con una propuesta
                    inicial en el mismo día hábil.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {submitted ? (
              <div className="ls-card rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "rgba(0, 180, 255, 0.12)", border: "1px solid rgba(0, 180, 255, 0.3)" }}
                >
                  <CheckCircle size={32} className="text-[#00B4FF]" />
                </div>
                <h3
                  className="text-2xl font-bold text-[#F0F4FF] mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  ¡Mensaje recibido!
                </h3>
                <p
                  className="text-[#8B9CC8] text-base leading-relaxed max-w-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Gracias por contactar con Lokal Systems. Te responderemos en menos de 24 horas
                  con una propuesta personalizada para tu negocio.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="ls-card rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#8B9CC8] mb-2 tracking-wide"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      NOMBRE *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="w-full px-4 py-3 rounded-xl focus:border-[#00B4FF] focus:shadow-[0_0_12px_rgba(0,180,255,0.2)]"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#8B9CC8] mb-2 tracking-wide"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl focus:border-[#00B4FF] focus:shadow-[0_0_12px_rgba(0,180,255,0.2)]"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#8B9CC8] mb-2 tracking-wide"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      TELÉFONO
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      className="w-full px-4 py-3 rounded-xl focus:border-[#00B4FF] focus:shadow-[0_0_12px_rgba(0,180,255,0.2)]"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold text-[#8B9CC8] mb-2 tracking-wide"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      NEGOCIO
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Nombre de tu negocio"
                      className="w-full px-4 py-3 rounded-xl focus:border-[#00B4FF] focus:shadow-[0_0_12px_rgba(0,180,255,0.2)]"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-[#8B9CC8] mb-2 tracking-wide"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    SERVICIO DE INTERÉS
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl focus:border-[#00B4FF] focus:shadow-[0_0_12px_rgba(0,180,255,0.2)]"
                    style={{ ...inputStyle, appearance: "none" }}
                  >
                    <option value="" style={{ background: "#0D1220" }}>Selecciona un servicio</option>
                    {services.map((s) => (
                      <option key={s} value={s} style={{ background: "#0D1220" }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold text-[#8B9CC8] mb-2 tracking-wide"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    MENSAJE *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente tu negocio y qué necesitas mejorar..."
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl focus:border-[#00B4FF] focus:shadow-[0_0_12px_rgba(0,180,255,0.2)] resize-none"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="ls-btn-primary w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold disabled:opacity-60"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar consulta gratuita
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p
                  className="text-xs text-[#8B9CC8] text-center"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Sin compromiso. Primera consulta completamente gratuita.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
