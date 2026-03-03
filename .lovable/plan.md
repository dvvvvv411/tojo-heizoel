

# Alle Heizölpreise im Projekt aktualisieren

Neben den 3 Preisrechnern gibt es noch weitere Stellen mit alten Preisen:

## Änderungen

| Datei | Zeile | Alt | Neu |
|-------|-------|-----|-----|
| `src/components/ProductSelector.tsx` | 13 | `0.70` | `0.90` |
| `src/components/ProductSelector.tsx` | 26 | `0.73` | `0.93` |
| `src/pages/DesignSystem.tsx` | 141 | `0.70` | `0.90` |
| `src/pages/DesignSystem.tsx` | 153 | `0.73` | `0.93` |
| `src/components/PriceOverviewSection.tsx` | 17-23 | Alte Chart-Daten | Werte um +0.20 erhöhen |

### PriceOverviewSection Chart-Daten (Zeilen 17-23)
Die historischen Preisdaten im Chart werden ebenfalls um 20 Cent angehoben:

| Monat | Standard alt → neu | Premium alt → neu |
|-------|--------------------|-------------------|
| Jan | 0.68 → 0.88 | 0.71 → 0.91 |
| Feb | 0.69 → 0.89 | 0.72 → 0.92 |
| Mär | 0.67 → 0.87 | 0.70 → 0.90 |
| Apr | 0.70 → 0.90 | 0.73 → 0.93 |
| Mai | 0.72 → 0.92 | 0.75 → 0.95 |
| Jun | 0.70 → 0.90 | 0.73 → 0.93 |

Hinweis: Die Treffer in `HandelsblattBanner.tsx` sind SVG-Pfaddaten (keine Preise) und werden nicht geändert.

