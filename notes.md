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


## Build tools

- Grunt
- gulp
  ```ts
  gulp.src('./**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist')); // => CSS
  ```

### Module bundlers

Fancy build tools, specifiek voor het klaarmaken van een frontend voor de browser. Denk aan Sass compileren, TypeScript compileren, fonts/afbeeldingen optimalizeren, ...

- Vite. Werkt in 2 modi:
  - Dev: gebruik ES Modules voor snel pagina refreshen
  - Prod: alles maximaal bundlen/minifyen/optimaliseren
- webpack / rspack
- Rollup / Rolldown
- Parcel

Is bundlen nog nodig? [V8 zegt van wel](https://v8.dev/features/modules).

## Testing

Alles tools:

- Karma
- Jasmine
- Jest
- Mocha
- Vitest
- Chai
- Sinon

Angular: Karma + Jasmine / experimental Jest/Vitest   ng test  Vitest extensie
React: Jest

All-in-one:
- Jest: ouderwets   import {}  Babel   TypeScript
- Vitest: modern  <=== import TypeScript ✅✅✅✅✅

Gecategoriseerd:

**Test runners**

- Karma
- Jest
- Mocha
- Vitest

**Test frameworks**

- Jasmine
- Jest
- Mocha
- Vitest

**Assertions libraries**

- Jest
- Mocha (heel basaal)
- Vitest
- Chai

**Mocking**

- Jasmine
- Jest
- Sinon
- Vitest


### Stryker

Mutation testing - je code wordt muteren.

```ts
if (x > 40) { ... }
```

mutanten:

```ts
if (x < 40) { ... }
if (x > 4000) { ... }
if (x > -4000) { ... }
```

## End-to-end testing

- UI geautomatiseerd aan het aansturen
- geen mocks (zo wel, dan is het eigenlijk UI testen)
- Playwright
  - van Microsoft
  - tests schrijven in TypeScript - of C#/Java/Python
  - robuuste API
  - veel browsers
  - geen gekke paywalls
  - geschikt voor keyboard-driven UI
    ```ts
    await page.keyboard.press('')
    ```
- Cypress
  - minder geschikt voor keyboard-driven UIs, typen moet altijd in een element:
    ```ts
    cy.get('..').type('..')
    ```
  - Cypress UI is mooi
  - gebruikt Bluebird Promises in plaats van native Promises, niet `await`-able
  - TypeScript... het kan, maar je bent achteraf aan het beschrijven hoe eigen custom uitbreidingen werken dan dat het rechtstreeks erop inhaakt
  - architectuur... Cypress batcht alle instructies en voert dat uit op de browser. Tussentijdse interactie met de browser is niet onmogelijk, maar is het niet voor gemaakt
  - [assertions zijn meh](https://docs.cypress.io/app/references/assertions#Common-Assertions)
    ```ts
    cy.get('form').find('input').should('not.have.class', 'disabled');
    cy.get('li.selected').should('have.length', 3);
    cy.get('a').parent('span.help').should('not.contain', 'click me');
    ```
    Die `.should()`, het is typesafe doordat ze 110+ string-overloads definieren op de functie, maar het oogt niet zo chic. En die typesafety is er dus eigenlijk echt alleen als je in TS werkt, out of the box werkt Cypress met JS.




## Paradigmas der webdevelopment

- SPA - Single Page Application  CSR
  - geen/heel wat minder paginarefreshes
  - hoort intuitief/gebruiksvriendelijk te zijn
  - nadeel: complexiteit  dependencies
  - hip
  - Angular Vue React Svelte Qwik Solid Knockout Blazor WASM/Server
  - AJAX
- SSR - Server-side rendering
  - om de page load te versnellen
  - initiele load chunky
  - altijd complementair aan de SPA
  - Next.js (React)  Nuxt.js (Vue) @angular/ssr  ASP.NET Core QwikCity SolidStart SvelteKit
  - AJAX
- SSG - Static Site Generation
  - bol.com amazon.com wehkamp training.infosupport.com  documentatiewebsites
    - /monitoren/lg-38748392  controller => service => cache => db => template @for
    - @ build   monitor-lg-387.html  duizenden .html
  - Next.js Nuxt.js 11ty HUGO  @angular/ssr
  - AJAX
- MPA - Multi Page Application
  - ASP.NET WebForms/MVC/Core MVC/Razor Pages   Blazor Static SSR  <EditForm Enhance>
  - PHP  Laravel
  - Java Spring
  - ieder klikje betekent een volledige paginarefresh  Flash Of Unstyled Content
  - relatief simpel
  - minder dynamisch
  - niet hip
  - AJAX
  - Express

Node.js webframeworks:

- Nest.js
- Next.js
- @angular/ssr
- SvelteKit
- QwikCity
- SolidStart
- Express
- Hapi
- socket.io - realtime communicatie   SignalR
- Fresh (Deno)

**Nest.js vs Express**

- veel meer structuur
- validatie
- TypeScript
- auth
- dependency injection
- modulair

**Nest.js vs ASP.NET Core vs bijv. Spring**

- Lastig. Nest.js is iets minder groot ecosysteem en wat minder gebruikt, maar op zichzelf een kwalitatief goed product. Welke taal je je backend in wil maken lijkt het voornaamste discussiepunt te zijn. ASP.NET Core is wel veelzijdiger.


### gRPC: voor gRPC-communicatie

- gRPC Remote Procedure Call
- communicatieframework
- alternatief op:
  - REST
    - GET POST PUT PATCH DELETE
  - SOAP
    - volledige uitdrukkingsvrijheid
- volledige uitdrukkingsvrijheid  `getProducts()`  `updateRijbewijs()`
- heule grote hoeveelheden data verstuurt
  - begint vanaf 10MB  Netflix
  - efficient binair formaat - Protobuf .proto
- zeer geschikt bij traag serializatieproces of als je met ingewikkelde datatypen werkt - JSON kan enkel `string` `number` `boolean`, maar niks complex
- gebaseerd op HTTP/2 (SPDY)  sneller (multiplexing)  veiliger (HTTPS only)
  - mogelijk ooit HTTP/3? (QUIC - Quality UDP Internet Connections) nog sneller

## Coole links

- TypeScript-parser [wordt herschreven in Go](https://devblogs.microsoft.com/typescript/typescript-native-port/): https://github.com/microsoft/typescript-go

