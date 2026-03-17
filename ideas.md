# Ideas de Diseño — Lokal Systems

## Filosofía elegida: "Dark Precision" — Tecnología de precisión oscura

**Movimiento de diseño:** Dark Tech Minimalism con influencias de Brutalism funcional

**Principios fundamentales:**
1. Fondo oscuro profundo (#080C18) como lienzo base — transmite seriedad, profesionalismo y tecnología avanzada
2. Acentos eléctricos azul (#00B4FF) y violeta (#7B2FFF) para jerarquía visual y llamadas a la acción
3. Tipografía asimétrica: títulos en "Space Grotesk" (bold, display) + cuerpo en "DM Sans" (legible, moderno)
4. Espaciado generoso — el espacio en blanco (oscuro) es un elemento activo de diseño

**Filosofía de color:**
- Base: #080C18 (navy profundo) — autoridad, tecnología, confianza
- Superficie: #0D1220 / #111827 — capas de profundidad
- Acento primario: #00B4FF (azul eléctrico) — innovación, claridad, velocidad
- Acento secundario: #7B2FFF (violeta) — creatividad, IA, diferenciación
- Texto: #F0F4FF (blanco frío) y #8B9CC8 (gris azulado para texto secundario)

**Paradigma de layout:**
- Asimétrico: secciones con contenido desplazado a la izquierda o derecha, no centrado
- Hero de pantalla completa con imagen de fondo tech y texto superpuesto
- Cards de servicios en grid 2x2 con hover effects
- Sección de proceso con timeline horizontal
- Testimonios en carrusel horizontal

**Elementos distintivos:**
1. Líneas de circuito sutiles como separadores de sección
2. Glow effects en botones y cards al hacer hover
3. Partículas animadas en el hero (CSS puro)

**Filosofía de interacción:**
- Hover: glow suave + ligero scale-up en cards
- Scroll: fade-in con slide-up para secciones
- Botones: efecto de luz que recorre el borde al hover

**Animaciones:**
- Entrada de hero: fade-in + slide-up del texto (0.8s ease-out)
- Cards de servicios: stagger animation al entrar en viewport
- Navbar: blur backdrop al hacer scroll
- Números de estadísticas: counter animation al entrar en viewport

**Sistema tipográfico:**
- Display/H1: Space Grotesk 700, 3.5-5rem
- H2: Space Grotesk 600, 2-2.5rem
- H3: Space Grotesk 500, 1.25-1.5rem
- Body: DM Sans 400, 1rem/1.6 line-height
- Caption/Labels: DM Sans 500, 0.875rem, letter-spacing 0.05em
