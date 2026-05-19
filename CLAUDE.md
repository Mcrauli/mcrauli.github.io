# Lauri Rekola — Portfolio

Henkilökohtainen portfolio-sivu työnhakua varten. Plain HTML/CSS/JS, GitHub Pages.

- **Live:** https://mcrauli.github.io/
- **Repo:** https://github.com/Mcrauli/mcrauli.github.io
- **Kieli:** suomi (`<html lang="fi">`)
- **Tavoite:** tietomallikoordinaattorin tehtävät

## Lauri (fakta-taso joka näkyy sivulla)

- Teknisen suunnittelun opiskelija
- Työharjoittelussa Radika Oy:llä — ei vakituinen työ
- Tavoittelee tietomallikoordinaattorin paikkaa
- Koodaa omalla ajalla Pythonia ja AutoCAD LISPiä
- **Status:** opiskelee · etsii harjoittelu/työpaikkaa

## Visuaalinen identiteetti — cyberpunk-neon

Paletti:
- Tausta: tumma purple-black `#08020e`
- Magenta accent: `#ff2a6d` (primary, h-otsikot, badge:t)
- Cyan accent: `#05d9e8` (sekundääri, linkit, kicker)
- Amber: `#ffd93d` (harvinainen highlight)
- Vihreä availability dot: `#5cf28e`
- Text: `#e8e6ff` (vaalea purple-white)

Tehosteita:
- Hero-h1:llä glitch-efekti (CSS pseudo-element + animaatio joka 6 s)
- CRT scan-line tausta (subtle, 2px raidat)
- Dot grid 32×32 magenta-saumat
- Topnav `<LR/>` -tyylinen brand-merkki
- Kaikki tekstit kickkereissä ja chip-elementeissä Mono-fontilla
- Bracket-tyyli `[ KICKER ]`, `// section`, `> heading`, `/route`

Fontit: Inter / Space Grotesk / JetBrains Mono — sama trio kuin tools-sivulla,
mutta Mono-fonttia paljon enemmän koodaaja-vibea varten.

## Ääni / tyyli

Rento ja persoonallinen, slangia. "Moi! Oon Lauri", "kuluttavaa", "kavereille",
"tykkään tehdä". Suomenkielinen, käyttäjän omalla puheentyylillä.

## Rakenne (1-page)

1. **Hero** — kicker [ Tuleva tietomallikoordinaattori ] + h1 LAURI REKOLA (glitch) + tagline polku + subtitle + CTA
2. **Tausta** (`#tausta`) — 3 about-blokkia: Mistä tulen / Mitä tykkään tehä / Mihin tähtään
3. **Työt** (`#tyot`) — 3 projektikorttia
4. **Stäkki** (`#stakki`) — 4 chip-ryhmää: Kielet / BIM&CAD / Web / Suunnitteluala
5. **Yhteys** (`#yhteys`) — email (copy-to-clipboard) + status + sijainti
6. **Footer** — minimal

## Projektit ja IP-rajat

**Tärkeää:** portfolio EI sisällä GitHub-linkkejä eikä lataa-painikkeita.
Käyttäjä haluaa esitellä työnsä mutta ei jakaa lähdekoodia tai latauksia.

Per-projekti kortti sisältää:
- Screenshot (lazyload + fallback placeholder)
- Status-badge kategoria (`PYTHON · BIM`, `AUTOCAD · LISP`, `WEB · DESIGN`)
- Year-badge ("2024 →")
- Kuvaus (3-4 lauseen pituinen)
- ROOLI-rivi (mitä rooli oli, ei mainita avointa koodia)
- Tech-chipit (Mono cyan-outline)
- CTA: `kysy lisää →` mailto-linkki (ei github tai lataa)

Projektit:
1. **dxf2ifc** — Python DXF/DWG → IFC4 -konvertteri
2. **AutoCAD-piirtotyökalut** — 9 LISP-komentoa + ribbon
3. **Suunnittelutyökalut-sivusto** — staattinen ohje- ja jakelupaketin sivu

## Sisältö-iteraatio

Päivitettävät kuvat (`assets/projects/`):
- `dxf2ifc.png`
- `autocad-lisp.png`
- `suunnittelutyokalut.png`

OG-image (`assets/og-image.png`, 1200×630) sosiaalisten medioiden esikatselua varten.

## Periaatteet

- Vanilla HTML/CSS/JS — ei frameworkia
- Ei tracking-scriptejä eikä analyticsia
- Ei latauspainikkeita eikä GitHub-linkkejä — vain esittely, "kysy lisää" → email
- Cache-bust `?v=N` -parametri CSS/JS-linkkeihin muutosten yhteydessä
- ASCII-only ei vaadittu (toisin kuin installer-skripteissä) — tämä on HTML/CSS

## Kehitys

```
cd "C:\Users\LauriRekola\OneDrive - RADIKA OY\Työpöytä\work\mcrauli.github.io"
npx --yes http-server -p 8766 -s
```
Avaa http://localhost:8766/ (eri portti kuin bbitumi 8765, jos pyörii).

Push main-branchiin → GitHub Pages päivittyy ~1–2 min.

## Vaihe 2 (myöhemmin)

- Per-projekti case-study sivut: `projects/dxf2ifc.html` jne. — read-only,
  ilman GitHub- tai lataa-linkkejä, screenshot-galleria
- CV-PDF lataus contact-osioon
- Read-only kopio Suunnittelutyökalut-sivusta jossa lataa-napit on poistettu
