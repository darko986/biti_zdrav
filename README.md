# BITI ZDRAV — sajt savjetovališta

Premium minimalistički sajt na B/H/S ijekavici za odrasle, parove, djecu i adolescente. Naziv je BITI ZDRAV, Nebojša Šajinović, Doboj. Korisnik je potvrdio grad, telefon +387 65 419 801 i dostupnost online terapije uz susrete uživo.

## Pokretanje

```sh
python3 -m http.server 4173 --directory dist
```

Otvorite http://localhost:4173. Nije potrebna instalacija zavisnosti ni build. Provjera JavaScripta: `node --check dist/app.js`.

## Izbor stacka

Semantički HTML, CSS i mali vanilla JavaScript odgovaraju jednoj sadržajnoj stranici s mobilnom navigacijom, FAQ sekcijom i dijalozima. Nema klijentskog frameworka, vanjskih fontova, analitike niti kontakt podataka koji se šalju trećim servisima. Budući CMS ili sistem zakazivanja može se dodati prema stvarnim potrebama; Angular i React nisu unaprijed nametnuti.

## Datoteke

- `dist/index.html`: sadržaj, SEO i struktura.
- `dist/style.css`: responsive dizajn i pristupačni fokus.
- `dist/app.js`: meni, odabir oblasti podrške i dijalozi.
- `dist/assets/space.jpg`: ilustrativni enterijer s Unsplash izvora https://images.unsplash.com/photo-1600210492486-724fe5c67fb0; nije fotografija savjetovališta.
- `agent-package/`: tražene četiri datoteke za Codex agenta i vještinu.
- `AGENTS.md`: pravila za održavanje ovog projekta.
- `.openai/hosting.json`: identitet i statička konfiguracija privatnog Sites sajta.

## Šta još treba potvrditi

Tačna adresa, kvalifikacije terapeuta, terapijske metode, cijene, trajanje, dostupnost termina, platforma za online susrete, saglasnosti za maloljetnike i pravila privatnosti. Fotografiju zamijeniti autentičnom kada bude dostupna. Telefon je aktivan tel link, a Facebook vodi na korisnikov potvrđeni profil. Nema izmišljenih biografija, recenzija ili automatskog zakazivanja.

Radna verzija ima `noindex,nofollow`. Prije javnog lansiranja treba potvrditi poslovne podatke, kontakt i privatnost, zatim ukloniti noindex, dodati canonical i sitemap za konačni domen. Nije aktiviran backend ili slanje podataka.

Instalacija i prvi prompt nalaze se u `agent-package/README.md`. Paket ne zahtijeva da vaš klijent ima UI birač agenata. Format prilagođenog agenta: https://learn.chatgpt.com/docs/agent-configuration/subagents.
