

# Landingpage Redesign im Attendflow-Style

## Ziel
Die Startseite (Index) wird optisch im modernen, cleanen Attendflow-Stil umgestaltet. Helles Theme, rote Akzentfarbe bleibt. Alle Texte und der Preisrechner bleiben technisch/inhaltlich identisch.

## Attendflow Design-Merkmale (die wir adaptieren)
- Sehr cleaner, weisser Hintergrund mit subtilen Gitter-Mustern
- Grosse, zentrierte Headlines mit farblich hervorgehobenen Worten
- Viel Whitespace, minimalistisch
- Dezente Badge-Elemente oberhalb der Headline
- Schlichte Navigation ohne Top-Bar
- Feature-Sections mit Bento-Grid-artigen Karten
- Sanfte Rundungen, subtile Borders, kaum Schatten
- Logos/Trust-Elemente in einer scrollenden Leiste
- Farbige Curved Sections als Trenner (bei uns in Rot statt Lila)

## Was sich NICHT aendert
- Preisrechner-Logik (HorizontalPriceCalculator & MobilePriceCalculator) bleibt komplett gleich
- Alle Texte, Inhalte, Daten bleiben identisch
- Rote Akzentfarbe (#e03c20) bleibt
- Helles Theme bleibt
- Routing und Seitenstruktur bleiben gleich

---

## Umsetzungsschritte

### 1. Header vereinfachen (Header.tsx)
- Top-Bar mit Telefon/E-Mail entfernen
- Schlichter, cleaner Header: Logo links, Navigation rechts
- Transparenter Header bei Scroll-Top, weiss bei Scroll
- CTA-Button mit rotem Hintergrund, abgerundet
- Mobile Header bleibt aehnlich, aber cleaner

### 2. HeroSection redesignen (HeroSection.tsx)
- Hintergrund: reines Weiss mit sehr subtilen Gitter-Linien (wie Attendflow)
- Grosse, zentrierte Headline statt links ausgerichtet (Attendflow-Stil)
- Farbiges Keyword hervorgehoben (z.B. "bestellen" in Rot mit dekorativem Rahmen)
- Subtile Badge oben ("Heizoel-Experte seit ueber 20 Jahren")
- USP-Punkte als einfache Check-Liste unter der Headline, zentriert
- USP-Karussell und Trust-Statistik-Karten entfernen (stattdessen schlichter)
- Preisrechner bleibt darunter, technisch unveraendert
- Mehr Whitespace, weniger visuelle Elemente

### 3. ReviewsSection cleaner gestalten (ReviewsSection.tsx)
- Hintergrund vereinfachen: weiss, kein Gradient
- Section Header im Attendflow-Stil: zentriert, grosser Titel, dezenter Badge
- Review-Karten: schlichtere Borders, weniger Schatten, cleaner Look
- Optional: dezenter roter Curved Divider oben als Section-Trenner

### 4. CompanySection modernisieren (CompanySection.tsx)
- Cleaner Hintergrund (weiss)
- Bento-Grid-artige Karten fuer die Statistiken statt aktueller premium-card Style
- Grosse Zahlen mit minimalistischem Design
- Werte-Bereich cleaner mit einfacheren Karten
- Weniger Gradient-Elemente, mehr Whitespace

### 5. Footer auffrischen (Footer.tsx)
- Bleibt dunkel, aber cleaner
- Weniger Gradient-Orbs im Hintergrund
- Schlichteres Layout, mehr Whitespace
- Behaelt alle Links und Kontaktinfos bei

### 6. Globale CSS-Anpassungen (index.css)
- Subtiles Gitter-Muster als Utility-Klasse hinzufuegen
- "Curved Section Divider" Utility in Rot
- Premium-card Styles vereinfachen (weniger Schatten, cleaner)

---

## Technische Details

**Betroffene Dateien:**
- `src/components/Header.tsx` - Navigation vereinfachen
- `src/components/HeroSection.tsx` - Zentriertes Layout, cleaner Look
- `src/components/ReviewsSection.tsx` - Schlichtere Karten
- `src/components/CompanySection.tsx` - Bento-Grid Stats
- `src/components/Footer.tsx` - Minimale Anpassungen
- `src/index.css` - Neue Utility-Klassen

**Nicht betroffene Dateien:**
- `src/components/HorizontalPriceCalculator.tsx` - keine Aenderung
- `src/components/MobilePriceCalculator.tsx` - keine Aenderung
- `src/pages/Index.tsx` - keine Aenderung (Komposition bleibt gleich)
- `tailwind.config.ts` - keine Aenderung noetig

