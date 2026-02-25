
# Hero Section im Attendflow-Style

## Attendflow Design-Merkmale (aus der Referenz)
- Zentriertes Layout mit sehr grosser, fetter Headline
- Ein Schluesselwort dekorativ hervorgehoben (mit gestricheltem Rahmen und Sternchen-Dekorationen)
- Subtiles Gitter-Muster im Hintergrund (leichte Linien)
- Extrem viel Whitespace, minimalistisch
- Vertrauens-Badges unterhalb des CTA-Bereichs
- Dezente, abgerundete Hintergrundform (leichter Farbverlauf oben)

## Anpassung fuer Valentin Heizoel (rote Akzente, helles Theme)

### HeroSection.tsx -- Komplett-Redesign

**Layout-Aenderungen:**
- Von 2-Spalten-Grid zu zentriertem, einspaltigen Layout wechseln
- USP-Karussell und Trust-Stats-Karten entfernen (zu viel visuelles Gewicht)
- Stattdessen: Badge oben, grosse zentrierte Headline, Subtext, Checkliste, dann Preisrechner

**Hintergrund:**
- Weisser Hintergrund mit subtiler abgerundeter Form oben (leichter roter Gradient, z.B. `bg-gradient-to-b from-red-50/40 to-white`)
- Feines Gitter-Muster im Attendflow-Stil (gestrichelte/feine Linien, leicht sichtbar)
- Dezente rote Gradient-Orbs mit erhoehter Sichtbarkeit

**Headline-Bereich (zentriert):**
- Badge: "Heizoel-Experte seit ueber 20 Jahren" (wie bisher, aber zentriert)
- Grosse Headline zentriert: "Heizoel guenstig" / "bestellen" (mit dekorativem Rahmen um "bestellen" im Attendflow-Stil -- gestrichelte Linie + kleine Stern-Dekorationen in Rot) / "Deutschlandweit"
- Subtext zentriert: "Vertrauen Sie auf ueber 20 Jahre Erfahrung"
- Checkliste zentriert (3 Punkte mit roten Checks)

**Dekorative Elemente:**
- Das Wort "bestellen" bekommt einen gestrichelten Rahmen (dashed border) in Rot mit kleinen Sparkle-Icons, aehnlich wie bei Attendflow "simple"
- Kleine dekorative Sterne/Sparkles neben dem hervorgehobenen Wort

**Trust-Bereich:**
- Statt der grossen Trust-Stats-Karten: eine schlichte Zeile mit 3 kompakten Stats (100.000+ Kunden | 20+ Jahre | 24h Service) als dezente Badges unter der Checkliste

**Preisrechner:**
- Bleibt technisch identisch, wird weiterhin darunter angezeigt
- HorizontalPriceCalculator und MobilePriceCalculator werden nicht veraendert

### index.css -- Neue Utility-Klasse
- `.attendflow-grid` fuer das subtile Gitter-Muster (feine Linien, kaum sichtbar)
- `.dashed-highlight` fuer den gestrichelten Rahmen um das Schluesselwort

### Betroffene Dateien
- `src/components/HeroSection.tsx` -- Hauptaenderung: Layout, Hintergrund, Struktur
- `src/index.css` -- Neue Utility-Klassen fuer Grid-Muster und Highlight-Rahmen

### Nicht betroffene Dateien
- `src/components/HorizontalPriceCalculator.tsx` -- keine Aenderung
- `src/components/MobilePriceCalculator.tsx` -- keine Aenderung
- `src/components/Header.tsx` -- keine Aenderung in diesem Schritt
