# Therapy landing page — Codex paket

Paket sadrži četiri dokumenta: `therapy-landing-page.toml`, `SKILL.md`, `AGENTS.md` i ovaj `README.md`.

## Instalacija u projekat

1. Kopirajte `therapy-landing-page.toml` u `.codex/agents/therapy-landing-page.toml` unutar vašeg projekta.
2. Kopirajte `SKILL.md` u `.agents/skills/therapy-landing-page/SKILL.md`.
3. Pravila iz `AGENTS.md` spojite s postojećim projektnim pravilima; nemojte prebrisati postojeće instrukcije. Prilagodite opis stacka ako paket koristite izvan isporučenog sajta.
4. Otvorite projekat u novom Codex chatu. Skill možete pozvati sa `$therapy-landing-page`. Podrška za imenovane prilagođene agente zavisi od verzije i dostupnih alata klijenta; sam fajl ne garantuje izbor agenta u korisničkom interfejsu.

Agent koristi projektni TOML format opisan u [zvaničnoj dokumentaciji za Codex subagente](https://learn.chatgpt.com/docs/agent-configuration/subagents). Vještina radi kao zaseban skup pravila. Naziv zadatka nije dokaz da je učitan agentov TOML.

## Prvi prompt

```text
Koristi $therapy-landing-page za izradu sajta savjetovališta za odrasle, parove, djecu i adolescente. Pregledaj projekat, samostalno procijeni najbolji frontend stack i kratko obrazloži izbor, bez unaprijed nametnutog Angulara ili Reacta. Dizajn neka bude premium minimalistički, na prirodnom B/H/S jeziku, ijekavicom i latinicom. Ne izmišljaj podatke o stručnjacima, kontakte ili rezultate. Za podatke koji nedostaju napravi jasno označenu radnu verziju. Implementiraj sajt i provjeri mobilni prikaz, tastaturu i interakcije.
```

Ako vaš klijent podržava prilagođene subagente, možete eksplicitno zatražiti da na ovom zadatku koristi `therapy-landing-page` agenta.

## Podaci za dovršavanje sadržaja

Potrebni su potvrđen naziv, grad/adresa, kontakt, profil i kvalifikacije stručnjaka, stvarne usluge i metode, način održavanja susreta, cijene/trajanje, pravila zakazivanja i informacije o privatnosti. Samostalna procjena stacka ne znači automatsku dozvolu za plaćene servise, DNS ili promjenu publike sajta.
