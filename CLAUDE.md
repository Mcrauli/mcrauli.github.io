# Lauri Rekola — Portfolio

Henkilökohtainen portfolio-sivu työnhakua varten. Plain HTML/CSS/JS, GitHub Pages.

- **Live:** https://mcrauli.github.io/
- **Repo:** https://github.com/Mcrauli/mcrauli.github.io
- **Kieli:** suomi (`<html lang="fi">`)
- **Tavoite:** tietomallikoordinaattorin tehtävät

## Lauri (fakta-taso joka näkyy sivulla)

- Teknisen suunnittelun opiskelija
- Ollut työharjoittelussa — **firman nimeä EI mainita sivulla** (IP-rajaus)
- Tavoittelee teknisen suunnittelun / tietomallikoordinoinnin harjoittelu- tai junior-paikkaa
- Tekee CAD/BIM-automaatiota: Python, AutoCAD LISP, web
- Harrastaa: auton/moottorin rakentaminen, 3D-tulostus (Stratasys), tekniikka
- **Status:** opiskelee · etsii harjoittelu- tai junior-paikkaa

## KRIITTINEN IP-rajaus

Projektit on tehty työympäristössä / liittyvät firman sisäisiin prosesseihin.
Sivulla EI saa olla: lähdekoodia, GitHub-repo-linkkejä, asiakasdataa,
firman nimiä, tarkkoja sisäisiä yksityiskohtia. Projektit esitellään
yleisellä tasolla (idea → toteutus → lopputulos). Näyttöinä screenshotit
tai SVG-mockupit, ei koodia. "Radika Oy" ei saa esiintyä missään.

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

1. **Hero** (`#top`) — kicker "Tekninen suunnittelu × CAD/BIM-automaatio" + h1 LAURI REKOLA (glitch, keskitetty) + tagline polku + subtitle + CTA
2. **Vahvuudet** (`#vahvuudet`) — "Mitä tuon mukanani", 3 value-cardia (01/02/03) työnantaja-näkökulmasta
3. **Työt** (`#tyot`) — section-lead + 3 projektikorttia case-muodossa
4. **Tausta** (`#tausta`) — 3 about-blokkia: Mistä tulen / Mitä tykkään tehä / Mihin tähtään
5. **Stäkki** (`#stakki`) — 2 skill-tieria: Pääosaaminen (magenta-chipit) + Tukiosaaminen (himmeämmät)
6. **Yhteys** (`#yhteys`) — intro + email (copy) + status + sijainti + CTA-nappi
7. **Footer** — minimal

## Projektikortit

Per-projekti kortti sisältää:
- Kuva: inline-SVG-kuvitus (`.project-mock`) + pieni `.project-caption`
  -kuvateksti. EI oikeita screenshotteja (IP-rajaus) — SVG on lopullinen
  ratkaisu, ei placeholder. Kuvatekstit: "Työnkulun havainnollistus",
  "SVG-kuvitus työkalun ideasta", "Anonymisoitu yleiskuva".
- Status-badge kategoria (`PYTHON · BIM`, `CAD-AUTOMAATIO`, `WEB`)
- Year-badge ("2024 →")
- Case-rivit: `.case-line` joissa `.case-tag` (Ongelma / Ratkaisu / Hyöty);
  Hyöty-rivi käyttää `.case-tag--hyoty` cyan-varianttia (kortin myyntipointti)
- ROOLI-rivi
- Tech-chipit
- CTA: projektikohtainen mailto-linkki, esim. "Katso työnkulku →",
  "Katso yleiskuvaus →", "Tutustu projektiin →" (EI github, EI lataa)

Projektit (esitellään yleisellä tasolla, ei firmaa/koodia):
1. **DXF/DWG → IFC -konvertteri** — Python, IFC4
2. **AutoCAD-piirtotyökalut** — CAD-automaatio, LISP
3. **Työkalujen esittelysivusto** — web

## Sisältö-iteraatio

Projektikuvat ovat inline-SVG-kuvituksia, EI screenshotteja. Päätös:
työkalut liittyvät firman sisäisiin prosesseihin, joten oikeita
screenshotteja ei julkaista. SVG-kuvitukset ovat lopullinen ratkaisu —
älä ehdota screenshot-tiedostojen lisäämistä.

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
