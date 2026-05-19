# Lauri Rekola — Portfolio

Henkilökohtainen portfolio-sivu. Plain HTML/CSS/JS, GitHub Pages -hosting.

- **Live:** https://mcrauli.github.io/
- **Repo:** https://github.com/Mcrauli/mcrauli.github.io
- **Kieli:** suomi (`<html lang="fi">`)
- **Tarkoitus:** työnhaku / rekrytoijat

## Rakenne

1-page portfolio anchor-navigaatiolla:

- **Hero** — kicker + h1 (gradient amber→orange) + subtitle + CTA
- **Tausta** — 3 about-blokkia (Mistä tulen / Mitä teen omalla ajalla / Mikä innostaa)
- **Työt** — 3 projektikorttia (dxf2ifc · AutoCAD LISP · Suunnittelutyökalut-sivusto)
- **Osaaminen** — 4 chip-ryhmää (Kielet · BIM&CAD · Web · Suunnitteluala)
- **Yhteys** — sähköposti (copy-to-clipboard) + GitHub + sijainti

## Visuaalinen identiteetti

- **Pohjapaletti:** sama kuin autocad-lisp-ohjeet-sivustolla (amber #f59e0b,
  sininen #60a5fa, slate-dark #020617) jotta henkilöbrändi pysyy koherenttina
- **Erottuva detalji:** hero-h1:n gradient (`#f97316 → #f59e0b → #fbbf24`) ja
  blueprint-grid kevennetty `64×64 @ 0.025 opacity` (tools-sivulla `40×40 @ 0.04`)
- **Crosshairit:** vain alanurkissa (yläkulmat vapaat hero-tilalle)
- **Fontit:** Inter / Space Grotesk / JetBrains Mono (sama trio)

## Jaetut komponentit kopioitu autocad-lisp-ohjeet:sta

`style.css`:n alkuosa on kopio shared-tyyleistä (topnav, crosshair,
scroll-progress, reveal, toast). `script.js`:n alkuosa myös. Portfolio-spesifit
ovat näiden jälkeen samassa tiedostossa. Ei riippuvuutta tools-reposta —
jokainen kopio elää itsenäisesti.

## Sisältö-iteraatio

Päivitettävät tekstit:
- Hero subtitle (kahden lauseen elevator pitch)
- About-blokkien sisältö
- Projektikorttien kuvaukset + tech-chipit
- Skills-chip-ryhmät

Päivitettävät kuvat (`assets/projects/`):
- `dxf2ifc.png` — GUI tai Solibri-näkymä
- `autocad-lisp.png` — AutoCAD-ribbon tai LISP-komennon outputti
- `suunnittelutyokalut.png` — autocad-lisp-ohjeet-etusivun screenshot

Kortti näyttää placeholderin kunnes kuva on paikallaan
(`onerror`-fallback `.project-thumb-placeholder`:lle).

## Periaatteet (samat kuin tools-sivussa)

- Ei JS-frameworkia — vanilla
- Ei tracking-scriptejä, ei analyticsia
- Ei uusia fontteja
- Cache-bust `?v=N` -parametri CSS/JS-linkkeihin muutosten yhteydessä

## Kehitys

```
cd "C:\Users\LauriRekola\OneDrive - RADIKA OY\Työpöytä\work\mcrauli.github.io"
npx --yes http-server -p 8765 -s
```

Avaa `http://localhost:8765/` — tee muutokset, push main-branchiin,
GitHub Pages päivittyy ~1–2 min.

## Roadmap (Vaihe 2 myöhemmin)

- Per-projekti deep-dive sivut `projects/dxf2ifc.html` jne.
- "Lue lisää →" -linkit korteista
- CV-PDF lataus contact-osioon
- Englanninkielinen versio jos kv-rekrytoijat
