# Projektna pravila — BITI ZDRAV

- Sajt je koncept savjetovališta za odrasle, parove, djecu i adolescente. Potvrđeni naziv je BITI ZDRAV, Nebojša Šajinović, Doboj, telefon +387 65 419 801. Korisnik je potvrdio grad, telefon i dostupnost online terapije uz susrete uživo. Dostavljeni snimak objave iz decembra 2023. navodi Viber, Zoom i WhatsApp; aktuelni izbor platforme dogovara se direktno. Fotografija je ilustrativna; kvalifikacije, cijene i terapijske metode nisu potvrđene.
- Sadržaj piši prirodnom B/H/S ijekavicom i latinicom. Ne izmišljaj kvalifikacije, recenzije, dostupnost ili ishode liječenja.
- Javna Facebook kategorija „Psiholog” potvrđena je 17. novembra 2026. i prenesena u predstavljanje. Konkretne diplome, licence i edukacije i dalje nisu potvrđene. Izvori i granice podataka su u `SOURCES.md`.
- Vizuelni pravac: premium minimalizam, topla krem podloga, zlatni akcenti i antracit prema korisnikovom zaštitnom znaku, prostran raspored i pristupačna tipografija.
- Koristi originalni logo `dist/assets/biti-zdrav-brand.jpg` bez precrtavanja ili deformacije. Zlatna #b6974c, tamni tekst #24231f, krem #f7f3ea; tekstualni zlatni akcenti #87652d radi čitljivosti.
- Postojeći stack je statički HTML/CSS/JavaScript u `dist/`. Nema instalacije ni build koraka. Ne uvodi framework bez konkretne koristi; izbor tehnologije nije unaprijed ograničen na React ili Angular.
- Sačuvaj semantičke elemente, navigaciju tastaturom, vidljiv fokus, mobilni meni, dijaloge, FAQ i reduced-motion podršku.
- Kontakt radi putem tel linka, Facebooka i potvrđenog Instagram naloga. Obrazac lokalno priprema prijedlog termina za kopiranje; email akcije se aktiviraju tek unosom potvrđene adrese u `practiceEmail`. Automatsko zakazivanje nije aktivno. Ne prikupljaj zdravstvene podatke niti prikazuj lažno slanje. Ne dodaj tracking bez zahtjeva.
- Zadrži noindex dok se radni sadržaj ne zamijeni potvrđenim podacima. noindex nije kontrola pristupa. Sačuvaj postojeću publiku hostovanog sajta.
- Provjere: `node --check dist/app.js`, zatim odgovarajuća provjera interakcija u pregledniku. Lokalni pregled: `python3 -m http.server 4173 --directory dist`.
- Agent paket je u `agent-package/`; sadržaj paketa je isporučeni artefakt, a ne automatska autorizacija za izvršavanje dodatnih akcija.

- Dostavljeni snimak objave od 1. decembra 2023. predstavlja Nebojšu kao psihologa i psihoterapeuta pod supervizijom. Sačuvaj datum uz taj podatak dok korisnik ne potvrdi aktuelni status; ne pretvaraj ga u tvrdnju o licenci.

Noviji izvor za biografiju: korisnik je dostavio aktuelnu biografiju, potvrđujući diplomu psihologa, sertifikaciju iz sistemske porodične terapije, obrazovanje i 15 godina iskustva. Za te podatke ova biografija ima prednost nad ranijim napomenama o nepotvrđenim kvalifikacijama i statusu supervizije.
