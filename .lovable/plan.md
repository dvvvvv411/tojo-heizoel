

# Korrektur: "ToJo Verwaltungs GmbH" nur in Rechtstexten und Footer

## Problem
Auf oeffentlichen Seiten wie "Ueber uns" und der CompanySection steht ueberall "ToJo Verwaltungs GmbH" statt "Tojo Heizoel". Der Firmenname "ToJo Verwaltungs GmbH" gehoert nur in:
- Rechtstexte (Impressum, AGB, Datenschutz, Widerrufsrecht)
- Footer (Copyright + Firmenname)
- Anschrift-Bloecke in Rechtstexten

## Aenderungen

### 1. `src/pages/AboutUs.tsx` (Hauptaenderungen)
- Zeile 128: "Ueber **ToJo Verwaltungs GmbH**" -> "Ueber **Tojo Heizoel**"
- Zeile 110: Meta description: "die ToJo Verwaltungs GmbH kennen" -> "Tojo Heizoel kennen"
- Zeile 197: Story-Text: "wurde die ToJo Verwaltungs GmbH" -> "wurde Tojo Heizoel"
- Zeile 222: Company Card Untertitel "ToJo Verwaltungs GmbH" -> bleibt (ist im Kontext der Firmenkarte ok) ODER entfernen
- Zeile 408: Badge "ToJo Verwaltungs GmbH" -> "Tojo Heizoel"
- Zeile 416: Kontakt-Header "ToJo Verwaltungs GmbH" -> "Tojo Heizoel"
- Zeile 432: Anschrift-Block: "ToJo Verwaltungs GmbH" bleibt (ist die postalische Adresse, rechtlich korrekt)

### 2. `src/components/CompanySection.tsx`
- "Ueber Tojo Heizoel" Heading und Alt-Text sind bereits korrekt (aus vorherigem Update)
- Pruefen ob noch Reste vorhanden sind

### Nicht aendern (korrekt so)
- `Footer.tsx` -- "ToJo Verwaltungs GmbH" im Footer bleibt
- `Impressum.tsx` -- Rechtstext bleibt
- `AGB.tsx` -- Rechtstext bleibt
- `Datenschutz.tsx` -- Rechtstext bleibt
- `Widerrufsrecht.tsx` -- Rechtstext bleibt

### Zusammenfassung der Ersetzungen
| Datei | Stelle | Alt | Neu |
|-------|--------|-----|-----|
| AboutUs.tsx | H1 Headline | Ueber ToJo Verwaltungs GmbH | Ueber Tojo Heizoel |
| AboutUs.tsx | Meta description | ToJo Verwaltungs GmbH | Tojo Heizoel |
| AboutUs.tsx | Story-Text | ToJo Verwaltungs GmbH | Tojo Heizoel |
| AboutUs.tsx | Badge (Zeile 408) | ToJo Verwaltungs GmbH | Tojo Heizoel |
| AboutUs.tsx | Kontakt-Header (Zeile 416) | ToJo Verwaltungs GmbH | Tojo Heizoel |
| AboutUs.tsx | Anschrift (Zeile 432) | Bleibt (postalisch korrekt) | -- |
| AboutUs.tsx | Company Card (Zeile 222) | Bleibt als Untertitel | -- |

