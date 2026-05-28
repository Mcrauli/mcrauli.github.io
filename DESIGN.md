# Design System

## Theme

Dark, high contrast. Physical scene: a Finnish technical hiring manager, early evening, comparing candidates on a work laptop; the screen is the only light source. Dark background with neon accents reads crisply and signals technical competence without theatrics.

## Colors

Strategy: Full palette. Magenta carries primary identity (~30% of visual weight), cyan carries secondary structure, amber used sparingly for role distinction.

All current values are hex/rgba; migration to OKLCH is a future improvement.

| Token | Value | Role |
|---|---|---|
| --bg | #08020e | Page background |
| --bg-elev | #15071f | Elevated surface |
| --bg-card | rgba(20, 8, 32, 0.7) | Card background |
| --magenta | #ff2a6d | Primary accent: headings, badges, CTAs, borders |
| --cyan | #05d9e8 | Secondary: links, kickers, chips, flow steps |
| --amber | #ffd93d | Rare: role tags only |
| --green | #5cf28e | Availability dot only |
| --text | #e8e6ff | Primary text (purple-tinted) |
| --text-dim | #8b8aa8 | Secondary text |
| --text-faint | #5e5d78 | Decorative / muted metadata |

## Typography

Three-font system:

- **Space Grotesk** (500–700): Display headings (h1, h2, h3 in cards). Uppercase, tight letter-spacing.
- **Inter** (400–700): Body prose. Feature settings: cv11, ss01, ss03.
- **JetBrains Mono** (400–700): Navigation, kickers, badges, chips, labels, CTAs, all UI-adjacent text.

Scale: h1 clamp(48px, 9vw, 96px) → h2 clamp(32px, 5vw, 48px) → h3 17–24px → body 14–15px. Ratio ≥1.5 between display and body.

Body prose max-width: 640–680px. Chips and grids break the container.

## Backgrounds

Three layered effects on body:
1. CRT scan-lines: 3px repeating horizontal gradient (magenta at 1.8% opacity)
2. Dot grid: 32×32px radial-gradient at 1px magenta dot (5% opacity)
3. Radial vignette: dark purple at top fading to --bg

## Layout

Single-page scroll. Max-width container: 1080px. Section padding: 56px vertical. Spacing varies by context (hero: 80px bottom; grids: 20–22px gap) to create rhythm.

## Components

### Topnav
Fixed, 60px height, backdrop-filter blur(8px). Brand mark `<LR/>` in Mono. Links in `/route` convention. Active state: cyan underline with glow. Availability indicator: pulsing green dot.

### Buttons
`btn-primary`: solid magenta fill, dark bg text. `btn-secondary`: outlined cyan. Both: uppercase Mono 13px, 0.1em tracking, 4px radius. Hover: -2px lift.

### Value / About cards
rgba(bg-card) fill, 1px border-dim, 6–8px radius. Hover: border animates to magenta-dim, -2px lift. No icons; leading numbers (01 02 03) in magenta at 40% opacity.

### Project cards
Same card base. Gradient border overlay on hover (magenta-dim → transparent → cyan-dim via pseudo-element mask). 16:9 thumbnail area with inline SVG illustrations.

### Case studies
Full-border article blocks. ⚠ Currently uses border-left: 3px magenta (violates side-stripe-border ban in shared design laws). A future pass should replace with full border + background tint.

### Chips
Mono font, 10–13px, 2–3px radius. Primary: magenta-bg + magenta border-dim. Support: transparent + border-dim (hover cyan). Tech: cyan-bg + cyan-dim border.

### Flow steps
Flex-wrap horizontal process diagram. Numbered circles (cyan for steps, magenta for final). Arrow → separators. On ≤780px: vertical stack with rotated arrows.

### Toast
Mono uppercase, magenta-dim left border, blur backdrop. Slide-up + scale-up enter animation.

## Motion

- Scroll reveal: translateY(18px) → 0, opacity 0 → 1, 0.6s ease (IntersectionObserver-driven)
- Hero h1 glitch: steps(2) keyframe at 6s interval, ±2–3px translate on magenta/cyan pseudo-elements via mix-blend-mode screen
- Hover transitions: 0.18–0.25s ease (no bounce, no elastic)
- Scroll progress bar: scaleX driven by scroll event, will-change: transform
- Prefers-reduced-motion: all animation and transition disabled, glitch pseudo-elements hidden

## Breakpoints

- ≤720px: topnav loses brand text and availability indicator
- ≤780px: flow steps reflow to vertical column
- ≤600px: contact list unstacks, crosshairs hidden, case study padding reduced
