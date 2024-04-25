# Uppgift 3 i kursen DT208G, Programmering i TypeScript.
*Anton Eriksson, aner2308*

### Beskrivning
Denna README-fil dokumenterar funktionaliteten för min webbplats. Webbplatsen är skapad under första delmomentet kring angular-ramverket, och går ut på att bekanta sig med hur man skapar angular-projekt. Designen är responsiv och har en navigering med hjälp av routes.


### Funktioner
- **Responsiv design**
Webbplatsen är utformad för att anpassa sig till olika skärmstorlekar.
- **Navigeringssystem**
Angulars router-modul används för att skapa smidig navigering mellan sidorna. Med hjälp av *RouterLink* kan navigeringen ske utan att sidan laddas om på nytt.
- **Värdekonvertering**
En av undersidorna låter användaren konvertera värden mellan olika enheter, från "meter" till "fot" och "celsius" till "fahrenheit". Det görs med hjälp av Angular-komponenter och databinding.
- **Integration av komponenter**
De olika konverteringsformulären är skapade som separata komponenter. Dessa integreras i undersidorna för att förbättra funktionaliteten.
- **Versionshantering och publicering**
Git används för versionshantering, och den färdiga webbplatsen publiceras på netlify.

## Installation
För att köra detta projekt lokalt:

1. Klona repositoryt från GitHub, och öppna det i VSC.
2. Se till att du har Angular nedladdat. Detta kan göras i nodeJS med kommandot *npm install -g @angular/cli*.
3. Installera dependencies med *'npm install'*. 
4. Starta utvecklingsservern med kommandot *'ng serve'*