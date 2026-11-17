# Git — kratko uputstvo

## Koji folder otvoriti

Repozitorijum je folder `prostor`, u kojem su `.git`, `README.md` i `dist/`.
Otvori taj folder kao projekat u IntelliJ-u i pokreći naredbe iz njegovog terminala.
Ako si otvorio roditeljski folder, prvo izvrši `cd prostor`.

Git je već podešen, glavna grana je `main` i postojeća istorija je sačuvana.
Nije potrebno ponovo pokretati `git init`.

## Pregled i lokalno pokretanje

```sh
git status
git log --oneline -5
python3 -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Otvori http://127.0.0.1:4173. Server zaustavljaš sa Ctrl+C.
Ako je port već zauzet prethodno pokrenutim serverom, koristi postojeći pregled.

## Sačuvaj narednu izmjenu

1. Izmijeni fajlove i provjeri sajt u pregledniku, uključujući mobilni meni, FAQ i dijaloge ako si ih mijenjao.
2. Pregledaj promjene i provjeri JavaScript (potreban je Node.js):

   ```sh
   git status
   git diff
   node --check dist/app.js
   git diff --check
   ```

3. Dodaj pregledane fajlove. Primjer za izmjene sajta:

   ```sh
   git add dist
   git diff --cached --stat
   git diff --cached --check
   git commit -m "Update contact information"
   git status
   ```

Poruku commita prilagodi stvarnoj izmjeni. Dokumentaciju dodaj po imenu,
npr. `git add README.md`, ako si i nju mijenjao. Kada nema novih izmjena,
`git status` prikazuje `working tree clean`.

## Šta ostaje u repozitorijumu

- `dist/` je izvorni kod ovog statičkog sajta, uključujući fotografije i logo; nije generisani build.
- `README.md`, `SOURCES.md`, projektna pravila i `agent-package/` prate projekat.
- `.openai/hosting.json` sadrži identitet postojećeg Sites sajta, a ne pristupni token.
- `.gitignore` isključuje IntelliJ podešavanja, lokalne `.env` fajlove, zavisnosti, keš i ZIP arhive. Fajl koji je već praćen Gitom ne prestaje se pratiti dodavanjem u `.gitignore`.

## GitHub repozitorijum

Projekat je povezan s [darko986/biti_zdrav](https://github.com/darko986/biti_zdrav).
Udaljeni repozitorijum se zove `origin` i koristi postojeći SSH pristup:

```text
git@github.com:darko986/biti_zdrav.git
```

Početni GitHub commit i lokalna istorija spojeni su uz očuvanje obje istorije.
Za slanje narednih commitova iz ovog foldera koristi:

```sh
git push
```

Za pregled stanja koristi `git status` i `git remote -v`. Kada radiš s drugog
računara, podesi pristup svom GitHub nalogu i kloniraj repozitorijum. Prije
novih izmjena preuzmi promjene naredbom `git pull --ff-only`, iz čistog radnog
foldera. Ako Git prijavi razilaženje istorije, prvo pregledaj i uskladi promjene.

Commit čuva promjene lokalno; push šalje commitove na GitHub. Slanje koda i
objavljivanje sajta su odvojeni koraci.
