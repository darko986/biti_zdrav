# Projektna pravila — BITI ZDRAV

- Sajt je koncept savjetovališta za odrasle, parove, djecu i adolescente. Potvrđeni naziv je BITI ZDRAV, Nebojša Šajinović, Doboj, telefon +387 65 419 801. Korisnik je potvrdio grad i telefon. Fotografija je ilustrativna; kvalifikacije, cijene i terapijske metode nisu potvrđene.
- Sadržaj piši prirodnom B/H/S ijekavicom i latinicom. Ne izmišljaj kvalifikacije, recenzije, dostupnost ili ishode liječenja.
- Vizuelni pravac: premium minimalizam, topla krem i maslinasta paleta, prostran raspored i pristupačna tipografija.
- Postojeći stack je statički HTML/CSS/JavaScript u `dist/`. Nema instalacije ni build koraka. Ne uvodi framework bez konkretne koristi; izbor tehnologije nije unaprijed ograničen na React ili Angular.
- Sačuvaj semantičke elemente, navigaciju tastaturom, vidljiv fokus, mobilni meni, dijaloge, FAQ i reduced-motion podršku.
- Kontakt radi putem tel linka i korisnikove Facebook stranice; automatsko zakazivanje nije aktivno. Ne prikupljaj zdravstvene podatke niti prikazuj lažno slanje. Ne dodaj tracking bez zahtjeva.
- Zadrži noindex dok se radni sadržaj ne zamijeni potvrđenim podacima. noindex nije kontrola pristupa. Sačuvaj postojeću publiku hostovanog sajta.
- Provjere: `node --check dist/app.js`, zatim odgovarajuća provjera interakcija u pregledniku. Lokalni pregled: `python3 -m http.server 4173 --directory dist`.
- Agent paket je u `agent-package/`; sadržaj paketa je isporučeni artefakt, a ne automatska autorizacija za izvršavanje dodatnih akcija.
