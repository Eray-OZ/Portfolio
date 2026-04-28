---
name: Obsidian Flux
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#c6c6c6'
  on-secondary: '#303030'
  secondary-container: '#474747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
  mono:
    fontFamily: monospace
    fontSize: 13px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  gutter: 24px
  margin: 32px
---

## Brand & Style

The design system is engineered for high-performance software environments where focus and clarity are paramount. It draws inspiration from the precise, developer-centric aesthetics of modern productivity tools, emphasizing a "dark mode first" philosophy.

The style is a blend of **Minimalism** and **Glassmorphism**, utilizing deep blacks to create an infinite canvas feel, punctuated by sharp, high-contrast typography and a singular vibrant accent. The emotional response is one of technical mastery, premium quality, and sophisticated utility. Every element is designed to feel like a physical piece of hardware—tactile yet digital—achieved through subtle grain textures and micro-interactions that respond with precision.

## Colors

The palette is anchored in absolute black (`#000000`) to maximize OLED efficiency and visual depth. This design system avoids mid-tone grays, opting instead for a tiered hierarchy of charcoal and ink shades.

- **Primary Accent:** Indigo (`#6366f1`) is used sparingly for critical actions, active states, and brand moments.
- **Surface Strategy:** Surfaces use a subtle gradient from `#0a0a0a` to `#111111`.
- **Contrast:** Text maintains a high contrast ratio, with primary content in pure white and secondary metadata in a muted zinc-gray to reduce visual noise.
- **Texture:** All large surfaces should feature a 2% opacity monochromatic noise overlay to prevent banding and add a tactile, premium feel.

## Typography

This design system utilizes **Inter** for its mathematical precision and exceptional readability at small sizes. The typographic scale is built on a tight rhythm, favoring tighter letter-spacing for headlines to create a "dense" and authoritative look.

- **Headlines:** Large, bold, and tight. Used to anchor the page.
- **Body:** Generous line-height to ensure long-form technical documentation remains legible.
- **Monospace:** Reserved for code snippets, IDs, and terminal-style outputs, reinforcing the tech-forward nature of the system.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is primarily contained within a 1200px max-width central container, while sidebar navigation and auxiliary panels utilize fluid widths.

- **The 4px Rule:** All spacing must be a multiple of 4.
- **Gaps:** Use `16px` for standard component gaps and `24px` for section spacing.
- **Grid:** A 12-column system is used for dashboard layouts, allowing for 1/2, 1/3, and 1/4 width card distributions.
- **Margins:** Large outer margins (`32px+`) are encouraged to create a sense of focus and exclusivity.

## Elevation & Depth

Hierarchy in this design system is achieved through **Tonal Layering** and **Subtle Glows** rather than heavy shadows.

- **Level 0 (Base):** Pure black `#000000`.
- **Level 1 (Cards/Sidebar):** `#0a0a0a` with a 1px solid border of `#1f1f1f`.
- **Level 2 (Popovers/Modals):** `#111111` with a soft 15% opacity Indigo ambient shadow (`blur: 40px`).
- **Glass Effects:** Overlays use `backdrop-filter: blur(12px)` with a semi-transparent `#000000` fill.
- **Inner Borders:** High-end components use a top-aligned inner highlight (1px, 10% white) to simulate a light source from above.

## Shapes

The shape language is characterized by "Hyper-Smooth" corners. A base radius of **16px** (1rem) is applied to all primary containers and cards, creating a friendly contrast against the otherwise stark dark aesthetic.

- **Cards:** 16px corner radius.
- **Buttons/Inputs:** 8px corner radius for a more precise, tool-like feel.
- **Chips/Badges:** Fully rounded (pill-shaped) for maximum distinction from interactive inputs.

## Components

### Buttons
Primary buttons use the Indigo accent (`#6366f1`) with white text. Secondary buttons are "Ghost" style: a transparent background with a 1px border (`#1f1f1f`) that brightens on hover.

### Cards
Cards are the core organizational unit. They feature the `#0a0a0a` background, a `1px` border, and the 16px radius. On hover, the border color should transition to the primary indigo at 30% opacity.

### Input Fields
Inputs are dark and recessed. Use a background of `#050505` and a focus state that adds a 1px Indigo ring with a soft outer glow.

### Chips & Tags
Small, low-profile elements using a subtle `#1f1f1f` background and `12px` font size. Active tags use a dim version of the indigo accent to indicate selection without over-powering the layout.

### Subtle Noise Overlays
Apply a noise texture (SVG or small PNG) to all interactive components at a very low alpha (0.02) to create a "physical hardware" finish.