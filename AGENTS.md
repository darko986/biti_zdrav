# Projektna pravila — BITI ZDRAV

- Sajt je koncept savjetovališta za odrasle, parove, djecu i adolescente. Potvrđeni naziv je BITI ZDRAV, Nebojša Šajinović, Doboj, telefon +387 65 419 801. Korisnik je potvrdio grad, telefon i dostupnost online terapije uz susrete uživo. Platforma za online razgovor nije potvrđena; ne izmišljaj naziv platforme. Fotografija je ilustrativna; kvalifikacije, cijene i terapijske metode nisu potvrđene.
- Sadržaj piši prirodnom B/H/S ijekavicom i latinicom. Ne izmišljaj kvalifikacije, recenzije, dostupnost ili ishode liječenja.
- Javna Facebook kategorija „Psiholog” potvrđena je 17. novembra 2026. i prenesena u predstavljanje. Konkretne diplome, licence i edukacije i dalje nisu potvrđene. Izvori i granice podataka su u `SOURCES.md`.
- Vizuelni pravac: premium minimalizam, topla krem podloga, zlatni akcenti i antracit prema korisnikovom zaštitnom znaku, prostran raspored i pristupačna tipografija.
- Koristi originalni logo `dist/assets/biti-zdrav-brand.jpg` bez precrtavanja ili deformacije. Zlatna #b6974c, tamni tekst #24231f, krem #f7f3ea; tekstualni zlatni akcenti #87652d radi čitljivosti.
- Postojeći stack je statički HTML/CSS/JavaScript u `dist/`. Nema instalacije ni build koraka. Ne uvodi framework bez konkretne koristi; izbor tehnologije nije unaprijed ograničen na React ili Angular.
- Sačuvaj semantičke elemente, navigaciju tastaturom, vidljiv fokus, mobilni meni, dijaloge, FAQ i reduced-motion podršku.
- Kontakt radi putem tel linka i korisnikove Facebook stranice; automatsko zakazivanje nije aktivno. Ne prikupljaj zdravstvene podatke niti prikazuj lažno slanje. Ne dodaj tracking bez zahtjeva.
- Zadrži noindex dok se radni sadržaj ne zamijeni potvrđenim podacima. noindex nije kontrola pristupa. Sačuvaj postojeću publiku hostovanog sajta.
- Provjere: `node --check dist/app.js`, zatim odgovarajuća provjera interakcija u pregledniku. Lokalni pregled: `python3 -m http.server 4173 --directory dist`.
- Agent paket je u `agent-package/`; sadržaj paketa je isporučeni artefakt, a ne automatska autorizacija za izvršavanje dodatnih akcija.
