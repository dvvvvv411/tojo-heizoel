

# Favicon und Branding-Update

## Aenderungen

### 1. Neues Favicon einrichten
- Hochgeladenes `tojofavicon.png` nach `public/favicon.png` kopieren (ueberschreibt das alte)
- Altes `public/favicon.ico` loeschen
- `index.html` Favicon-Referenz bleibt (`/favicon.png`) -- passt bereits

### 2. `index.html` -- Meta-Daten pruefen
- Title, Description, Keywords sind bereits auf "Tojo Heizoel" umgestellt -- keine Aenderung noetig
- Theme-Color von `#006b51` auf `#e30613` (Tojo-Rot) aendern, passend zum neuen Logo

### 3. Seitentitel und -beschreibungen aller Seiten pruefen
Die Helmet-Tags in den Seiten sind bereits auf "Tojo Heizoel" umgestellt (aus dem vorherigen Branding-Update). Keine weiteren Aenderungen noetig.

### Zusammenfassung
| Aktion | Datei |
|--------|-------|
| Neues Favicon kopieren | `public/favicon.png` (ueberschreiben) |
| Altes .ico loeschen | `public/favicon.ico` (entfernen) |
| Theme-Color anpassen | `index.html` Zeile 16 |

