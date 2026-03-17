/* ============================================================
   LOKAL SYSTEMS — Footer
   Design: Dark Precision — minimal dark footer with links,
   gradient divider, social links
   ============================================================ */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448076989/kjocXrXhS6LcXSPoXz6MPe/logo_lokalsystems_dark_bg_142e989b.png";

const footerLinks = {
  Servicios: [
    { label: "Agentes Telefónicos IA", href: "#servicios" },
    { label: "SEO & SEM", href: "#servicios" },
    { label: "Desarrollo Web", href: "#servicios" },
    { label: "Publicidad Digital", href: "#servicios" },
  ],
  Empresa: [
    { label: "Cómo funciona", href: "#proceso" },
    { label: "Casos de uso", href: "#casos" },
    { label: "Por qué nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ],
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#050810", borderTop: "1px solid rgba(0,180,255,0.08)" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
              className="inline-block mb-6"
            >
              <img
                src={LOGO_URL}
                alt="Lokal Systems"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p
              className="text-[#8B9CC8] text-sm leading-relaxed max-w-sm mb-6"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Implementamos soluciones de Inteligencia Artificial para negocios locales.
              Ahorramos tiempo, personalizamos cada caso y entregamos resultados medibles.
            </p>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#00B4FF" }}
              />
              <span
                className="text-xs text-[#8B9CC8]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Disponible para nuevos proyectos
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="text-xs font-bold text-[#F0F4FF] mb-4 tracking-widest"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {category.toUpperCase()}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="text-sm text-[#8B9CC8] hover:text-[#F0F4FF] transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-xs text-[#8B9CC8]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              © {new Date().getFullYear()} Lokal Systems. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-[#8B9CC8] hover:text-[#F0F4FF] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-xs text-[#8B9CC8] hover:text-[#F0F4FF] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Aviso legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
