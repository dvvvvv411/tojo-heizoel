
# Shop-ID in allen Preisrechnern aktualisieren

Die Checkout-URL ist bereits korrekt auf `checkout.tojo-heizoel.de` gesetzt. Die Shop-ID muss in 3 Dateien von `5cb5aa20-02d3-4297-a799-19cf1b238a1d` auf `bcca4ece-bada-4a73-9ac4-fa18805c5ad6` geaendert werden:

| Datei | Zeile | Aenderung |
|-------|-------|-----------|
| `src/components/PriceCalculator.tsx` | 22 | Shop-ID aktualisieren |
| `src/components/HorizontalPriceCalculator.tsx` | 19 | Shop-ID aktualisieren |
| `src/components/MobilePriceCalculator.tsx` | 40 | Shop-ID aktualisieren |

Alle drei Stellen: `5cb5aa20-02d3-4297-a799-19cf1b238a1d` wird zu `bcca4ece-bada-4a73-9ac4-fa18805c5ad6`.
