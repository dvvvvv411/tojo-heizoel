
# Attendflow-Style auf alle Landingpage-Sektionen anwenden

## Problem
Nur die HeroSection und der Header wurden im Attendflow-Stil umgestaltet. Die ReviewsSection, CompanySection und der Footer sehen noch "standard" aus und passen nicht zum modernen, minimalistischen Look der HeroSection.

## Aenderungen

### 1. ReviewsSection.tsx - Attendflow-Stil
- Subtiles Grid-Muster im Hintergrund (bg-grid-subtle) hinzufuegen
- Curved Divider oben entfernen (zu verspielt fuer Attendflow)
- Badge-Styling an HeroSection angleichen (gleicher Stil wie "Heizoel-Experte" Badge)
- Headline: "Kunden" mit dem gleichen roten Unterstreich-SVG wie "bestellen" in der Hero
- Review-Karten noch schlichter: duennere Borders, kein Hover-Shadow, mehr Whitespace
- Rating-Badge cleaner gestalten

### 2. CompanySection.tsx - Attendflow-Stil
- Hintergrund von gray-50 auf weiss mit bg-grid-subtle aendern
- Section-Badge im gleichen Stil wie HeroSection
- "Valentin Heizoel" in der Headline mit rotem Unterstrich-SVG
- Bild mit subtilerem Rahmen (border statt nur rounded)
- Stats-Karten: einheitlicher mit dem Rest, subtilere Borders
- Werte-Bereich: cleaner, mit Karten statt border-left Stil
- Mehr Whitespace zwischen Elementen

### 3. Footer.tsx - Attendflow-Stil
- Hintergrund: von gray-950 auf gray-900 (etwas heller, moderner)
- Oberer Rand: subtile Trennlinie statt harter Uebergang
- Notfall-Service Box schlichter gestalten
- Mehr Whitespace, groessere Abstande
- Links schlichter ohne ArrowUpRight Hover-Effekt
- Insgesamt cleaner und minimalistischer

### 4. index.css - Ergaenzungen
- Sicherstellen dass bg-grid-subtle gut funktioniert
- Ggf. Section-Trenner Utility hinzufuegen

## Technische Details

**Betroffene Dateien:**
- `src/components/ReviewsSection.tsx` - Grid-Hintergrund, schlichtere Karten
- `src/components/CompanySection.tsx` - Weisser Hintergrund mit Grid, Bento-Karten
- `src/components/Footer.tsx` - Modernerer, cleanerer Footer

**Nicht betroffene Dateien:**
- Preisrechner, Header, HeroSection, Routing - alles bleibt
- Alle Texte und Inhalte bleiben identisch
