# Notes

## Node.js

- begon in 2006, Ryan vond het web te pagina-georienteerd.
- I/O moet anders, geen synchrone blocking calls meer voor disk-/netwerk-/db-operaties
- tegenwoordig ook massaal ingezet voor frontendtooling
- package manager is npm (vergelijkbaar met Maven/Ivy/Gradle/NuGet)
  - npm is een apart bedrijf, sinds 2019 van MICROSOFT
- OpenJS Foundation

## JS-based runtimes

- Node
  - 2009
  - gemaakt door Ryan Dahl
  - draait op V8
  - API is hier en daar wat ouderwets
    - maar wordt moderner, bijv. `fs/promises`
  - `node run bla.js`
- Deno
  - ook gemaakt door Ryan Dahl
  - draait ook op V8
  - uitgekomen in 2020
  - een hoop dingen waar hij spijt van had, heeft-ie hier goed gedaan
  - v1 - geen compatibiliteit met npm
  - v2 - stuk meer compatible
  - modernere API
  - TypeScript out of the box
  - `deno test` `deno lint`
  - betere security: `deno run --allow-read C:\Temp --allow-net bla.js`
- Bun
  - van Oven - bun is out of the oven ha ha....
  - ~2021
  - focust op performance (en neemt shortcuts)
  - draait op JavaScriptCore van Safari
  - TypeScript out of the box
  - npm meteen compatibility
  - heeft heel wat VC money gekregen en gaat dat ongetwijfeld terug willen verdienen

## Package managers

- npm install
  - haalt z'n packages altijd van internet - node_modules
  - parallel?
  - deed vroeger downloaden via http en geen checksum-verificatie
- yarn - haalt packages gewoon bij npm vandaan
  - definieerde als eerst een lock-file om versies te locken - `yarn-lock.json`
  - is vaak sneller dankzij globale cache - package eerder geinstalleerd? copy van filesystem ipv downloaden.
- pnpm
  - PERFORMANT npm
  - is vaak sneller dankzij globale cache - package eerder geinstalleerd? hard link naar geinstalleerde package.
   - is een "content-addressable store", dus ook nog wat veiliger mocht een evil script een `.js`-bestand aanpassen
  - downloadt parallel

## `;` of niet

JavaScript heeft een taalfeature, ASI: Automatic Semicolon Insertion. Wat dat betreft, puntkomma's zijn niet _nodig_...

- npm had ooit zelfs een [funny coding style](https://carta.tech/man-pages/man7/npm-coding-style.7.html) waar ze zeiden ze zo min mogelijk te gebruiken
- De meeste projecten gebruiken [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) als formatting-tool, die zet wel automatisch `;` neer overal.

