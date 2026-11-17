# BITI ZDRAV — sajt savjetovališta

Premium minimalistički sajt na B/H/S ijekavici za odrasle, parove, djecu i adolescente. Naziv je BITI ZDRAV, Nebojša Šajinović, Doboj. Korisnik je potvrdio grad, telefon +387 65 419 801 i dostupnost online terapije uz susrete uživo.

## Pokretanje

```sh
python3 -m http.server 4173 --directory dist
```

Otvorite http://localhost:4173. Nije potrebna instalacija zavisnosti ni build. Provjera JavaScripta: `node --check dist/app.js`.

U IntelliJ-u otvorite folder `prostor` kao korijen projekta. Za lokalni pregled potreban je Python 3, a za provjeru JavaScripta Node.js. Uputstvo za pregled izmjena, commitove i povezivanje s udaljenim repozitorijumom je u [GIT.md](GIT.md). Folder `dist/` sadrži izvorne fajlove i prati se u Gitu.

## Vizuelni identitet

Primijenjen je korisnikov originalni znak iz `dist/assets/biti-zdrav-brand.jpg`: zaglavlje, sekcija pristupa, podnožje, favicon i Open Graph slika. Paleta koristi zlato #b6974c, antracit #24231f i krem #f7f3ea; tamnije zlato #87652d služi za čitljive tekstualne akcente. Originalna JPG slika nije mijenjana.

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

## Podaci s Facebook stranice

Dodana je sekcija predstavljanja savjetovališta i oznaka „Psiholog”, prema javnoj kategoriji njegove Facebook stranice. Kratak opis pogleda na dobrobit parafrazira objavu od 29. novembra 2022. Izvori, datum provjere i ograničenja su u `SOURCES.md`. Online susreti ostaju podatak koji je prethodno potvrdio korisnik.

## Šta još treba potvrditi

Tačna adresa, kvalifikacije terapeuta, terapijske metode, cijene, trajanje, dostupnost termina, platforma za online susrete, saglasnosti za maloljetnike i pravila privatnosti. Fotografiju zamijeniti autentičnom kada bude dostupna. Telefon je aktivan tel link, a Facebook vodi na korisnikov potvrđeni profil. Nema izmišljenih biografija, recenzija ili automatskog zakazivanja.

Radna verzija ima `noindex,nofollow`. Prije javnog lansiranja treba potvrditi poslovne podatke, kontakt i privatnost, zatim ukloniti noindex, dodati canonical i sitemap za konačni domen. Nije aktiviran backend ili slanje podataka.

Instalacija i prvi prompt nalaze se u `agent-package/README.md`. Paket ne zahtijeva da vaš klijent ima UI birač agenata. Format prilagođenog agenta: https://learn.chatgpt.com/docs/agent-configuration/subagents.
