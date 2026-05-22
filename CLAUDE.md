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

Lämmin ja persoonallinen, minä-muotoinen — mutta viimeistelty työnhakuun.
"Moi!" säilyy, mutta kirjakieli: **"olen" (ei "oon"), "minä" (ei "mä")**.
Otsikot puhuttelevia ("Mitä olen tehnyt", "Kuka olen"). EI korporaatiojargonia.

## Rakenne (1-page)

1. **Hero** (`#top`) — kicker "Tekninen suunnittelu × CAD/BIM-automaatio" + h1 LAURI REKOLA (glitch, keskitetty) + tagline polku + `.hero-pitch` (vahva myyntilause) + subtitle + CTA
2. **Vahvuudet** (`#vahvuudet`) — "Mitä tuon mukanani", 3 value-cardia (01/02/03) työnantaja-näkökulmasta
3. **Työt** (`#tyot`) — `.privacy-note` (tarkoituksellinen anonymisointi-huomio) + 3 projektikorttia case-muodossa
4. **Caset** (`#caset`) — 3 case-study-osiota. Jokaisessa: `.case-summary`
   (3 rivin Ongelma/Ratkaisu/Lopputulos -tiivistelmä) + työnkulku-
   diagrammi (`.flow`, CSS-pohjainen 5-vaiheinen prosessikaavio) +
   `.case-grid` (Lähtötilanne / Ratkaisu / Hyöty / Rajaus) + `.case-foot`
   (teknologiat + mailto-CTA). Ankkurit: `#dxf2ifc-case`,
   `#autocad-lisp-case`, `#suunnittelutyokalut-case`. EI omaa nav-linkkiä
   (vältetään topnavin ahtautta) — saavutetaan projektikorttien CTA:sta.
5. **Tausta** (`#tausta`) — 3 about-blokkia: Mistä tulen / Mitä tykkään tehdä / Mihin tähtään
6. **Osaaminen** (`#osaaminen`) — 2 skill-tieria: Pääosaaminen (magenta-chipit) + Tukiosaaminen (himmeämmät)
7. **Yhteys** (`#yhteys`) — intro + email (copy) + status + sijainti +
   `.contact-actions` (kaksi nappia: "Lataa CV (PDF)" btn-primary →
   `assets/Lauri_Rekola_CV.pdf`, "Laita viestiä" btn-secondary → mailto)
8. **Footer** — minimal

## Projektikortit

Per-projekti kortti sisältää:
- Kuva: inline-SVG-kuvitus (`.project-mock`) + pieni `.project-caption`
  -kuvateksti. EI oikeita screenshotteja (IP-rajaus) — SVG on lopullinen
  ratkaisu, ei placeholder. Kuvatekstit: "Työnkulun havainnollistus",
  "SVG-kuvitus työkalun ideasta", "Anonymisoitu yleiskuva".
- Status-badge kategoria (`PYTHON · BIM`, `CAD-AUTOMAATIO`, `WEB`)
- Year-badge ("2024 →")
- Case-rivit: `.case-line` + `.case-tag`, neljä kpl: Ongelma & Ratkaisu
  (magenta), Hyöty (`.case-tag--hyoty`, cyan), Rooli (`.case-tag--role`,
  amber). Tagimainen ulkoasu = nopeasti silmäiltävä.
- Tech-chipit
- CTA: ankkurilinkki saman sivun case-osioon (`#dxf2ifc-case` jne.),
  esim. "Katso työnkulku →", "Katso yleiskuvaus →", "Tutustu projektiin →".
  EI mailto kortissa — sähköposti-CTA on vasta case-osion lopussa
  ("Kysy työnkulusta →" jne.). Sääntö: "Katso…" vie aina sisältöön,
  "Kysy…" vie sähköpostiin. (EI github, EI lataa)

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

CV: `assets/Lauri_Rekola_CV.pdf` = **julkinen 1-sivuinen versio ILMAN
puhelinnumeroa** (spämmiriski). Lähde + 2-sivuinen varaversio +
puhelinnumerollinen hakemusversio ovat repon ULKOPUOLELLA kansiossa
`work/cv/` — katso muisti `project_cv_lauri`. Sivulle linkataan vain
julkinen 1-sivuinen.

## Periaatteet

- Vanilla HTML/CSS/JS — ei frameworkia
- Ei tracking-scriptejä eikä analyticsia
- Ei GitHub-linkkejä. Ainoa lataus on CV-PDF yhteysosiossa; projektit
  esitellään, ei jaeta (ei koodia/repoja/lataus-paketteja)
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
- Read-only kopio Suunnittelutyökalut-sivusta jossa lataa-napit on poistettu
