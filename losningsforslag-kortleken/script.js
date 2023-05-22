// 1. skapa suitsen
const suits = ["♦", "♥", "♣", "♠"];
// 1.2 skapa en tom lista där vår kortlek skall hamna
let deck = [];

// 2. loopa över listan med suits
for (let i = 0; i < suits.length; i++) {
    // 3. loopa över värdena
    for (let j = 2; j < 15; j++) {
        // skapa nytt tomt kortobjekt där vi skall lägga in kortets egenskaper
        let card = {};
        // skapar kortets suit och lägger till vilken suit vi är på nu i iterationen i loopen
        card.suit = suits[i];
        card.rank = j;
        let value = j;
        if (j === 11) {
            value = 'J';
        } else if (j === 12) {
            value = 'D'
        } else if (j === 13) {
            value = 'K'
        } else if (j === 14) {
            value = 'A'
        }
        // lägger på värde på vårt kortobjekt
        card.value = value;
        // vi lägger in vårt nya kortobjekt i listan över alla kort
        deck.push(card);
    }
}
console.log(deck);

// // skapa ett nytt objekt:
// let car = {
//     brand: 'Volvo',
//     milage: 35
// }
// car.used = true;
// car['color'] = 'silver';

// // for-in loop
// for (prop in car) {
//     console.log(prop);
//     console.log(car[prop]);
// }
// // lista med objekt
// let objList = [car, car, car, car, car]
// // for-of loop
// for (obj of objList) {
//     console.log(obj);
// }