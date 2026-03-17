/* ============================================================
   LOKAL SYSTEMS — Navbar
   Design: Dark Precision — blur backdrop on scroll, glow CTA
   ============================================================ */

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448076989/kjocXrXhS6LcXSPoXz6MPe/logo_lokalsystems_dark_bg_142e989b.png";
const LOGO_LIGHT_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663448076989/kjocXrXhS6LcXSPoXz6MPe/logo_lokalsystems_4d5689f2.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#proceso" },
  { label: "Casos de uso", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#080C18]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
            className="flex items-center gap-2 group"
          >
            <img
              src={LOGO_URL}
              alt="Lokal Systems"
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-sm font-medium text-[#8B9CC8] hover:text-[#F0F4FF] transition-colors duration-200 relative group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#00B4FF] to-[#7B2FFF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
              className="ls-btn-primary px-5 py-2.5 rounded-lg text-sm font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Solicitar consulta
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-[#8B9CC8] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(8, 12, 24, 0.98)", backdropFilter: "blur(20px)" }}
      >
        <div className="px-4 py-4 space-y-1 border-t border-white/5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="block px-4 py-3 text-sm font-medium text-[#8B9CC8] hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
              className="ls-btn-primary block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Solicitar consulta
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
