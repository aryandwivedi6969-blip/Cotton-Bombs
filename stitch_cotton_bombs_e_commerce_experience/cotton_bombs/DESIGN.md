---
name: Cotton Bombs
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#564052'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#897083'
  outline-variant: '#dcbed4'
  surface-tint: '#a900a9'
  primary: '#a900a9'
  on-primary: '#ffffff'
  primary-container: '#ff00ff'
  on-primary-container: '#510051'
  inverse-primary: '#ffabf3'
  secondary: '#006877'
  on-secondary: '#ffffff'
  secondary-container: '#00e0ff'
  on-secondary-container: '#005f6d'
  tertiary: '#9000de'
  on-tertiary: '#ffffff'
  tertiary-container: '#c168ff'
  on-tertiary-container: '#44006d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd7f5'
  primary-fixed-dim: '#ffabf3'
  on-primary-fixed: '#380038'
  on-primary-fixed-variant: '#810081'
  secondary-fixed: '#a5eeff'
  secondary-fixed-dim: '#00daf8'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#f3daff'
  tertiary-fixed-dim: '#e3b5ff'
  on-tertiary-fixed: '#2f004c'
  on-tertiary-fixed-variant: '#6e00ab'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Bricolage Grotesque
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.1'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
---

## Brand & Style
The design system balances a **Minimalist-Maximalist hybrid** aesthetic. It utilizes a high-utility, structured grid—reminiscent of premium streetwear "drops"—as a canvas for high-energy, tactile elements like holographic textures and "bouncy" interactions.

The target audience is Gen Z; the UI must feel urgent, collectible, and highly shareable. The personality is hyper-digital yet physical, mimicking the sensory explosion of a glitter-infused cotton candy bomb. Layouts should remain clean and "breathable" (Minimalism) to allow the vibrant iridescent accents and chunky typography (Maximalist) to pop without creating cognitive overload.

## Colors
The palette is built on a **Foundation of Purity** (Pure White/Off-White) to ensure the product photography and glitter textures remain the hero. 

- **Primary (Hot Pink):** Used for critical calls to action and urgent alerts.
- **Secondary (Sky Blue):** Used for supportive UI elements and trust indicators.
- **Tertiary (Electric Purple):** Used for secondary interactions and depth.
- **Holographic Gradient:** Applied exclusively to "High Value" elements like premium product cards, primary buttons, and special edition badges.
- **Dark Mode (Promotion Only):** Specific landing sections use a near-black (#050505) background to make neon accents and iridescent textures vibrate with higher intensity.

## Typography
Typography is a study in contrast. Headlines are **Chunky and Expressive**, using tight leading and negative letter spacing to create a high-impact "wall of text" effect. 

Body copy remains **Technically Clean**, ensuring that nutritional information and product descriptions are highly legible. Labels use a monospaced-adjacent grotesque to lean into the "streetwear/manufacturing" aesthetic. Always use all-caps for labels and secondary navigation items to maintain a sense of urgency.

## Layout & Spacing
This design system uses a **Strict 12-Column Fluid Grid** with exaggerated outer margins on desktop to create a centered, "lookbook" feel. 

- **Vertical Rhythm:** Use large gaps (`stack-lg`) between major content sections to maintain the minimalist structure.
- **The "Drop" Layout:** Product listings should use an asymmetrical grid where certain items span 2 columns while others span 1, creating a dynamic, non-repetitive browsing experience.
- **Mobile:** Transition to a 2-column grid with minimal gutters to maximize imagery size.

## Elevation & Depth
Depth is created through **Materiality rather than Shadow.** Avoid traditional drop shadows.

- **Iridescent Layers:** Use backdrop-filters (blur) combined with low-opacity holographic overlays to create a "frosted glitter" effect for modals and navigation bars.
- **Tactile Foil:** Use high-contrast inner glows (white, 40% opacity) on buttons to simulate a 3D metallic foil edge.
- **Hard Offsets:** For secondary cards, use a 4px solid black or primary-color offset border instead of a shadow to maintain the "streetwear" graphic style.

## Shapes
The shape language is **Playfully Geometric.** 

- **Cards & Inputs:** Use the `rounded-lg` (1rem) setting to mimic the soft appearance of cotton candy.
- **Interactive Elements:** Buttons should be slightly more rounded than containers to invite clicking.
- **The "Bomb" Shape:** Specific decorative elements (like the 'Add to Cart' floating action button) should be perfectly circular to represent the product form.

## Components
- **Bouncy Buttons:** Buttons must feature a CSS `transform: scale(0.95)` on active states and a subtle "wobble" animation on hover. Primary buttons use the Holographic Gradient with white text.
- **Iridescent Cards:** Product cards feature a 1px iridescent border. On hover, the border thickness increases, and a subtle glitter texture overlay fades in over the product image.
- **Horizontal Navigation:** A "sticky" top bar with a stark white background and thin black bottom-border. Links use `label-caps` typography.
- **Glitter Badges:** Small, pill-shaped tags used for "New Flavor" or "Sold Out." These should use a reflective foil texture.
- **Input Fields:** Minimalist underlines or soft-gray fills. On focus, the bottom border animates into a multi-color gradient.
- **Micro-interactions:** Use "elastic" easing functions for all transitions to reinforce the bouncy, high-energy brand vibe.