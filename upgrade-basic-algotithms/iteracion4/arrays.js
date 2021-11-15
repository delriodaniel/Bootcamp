const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
let personaje = avengers[0];
console.log(personaje);
avengers.unshift("Ironman");
personaje = avengers[0];
console.log(personaje);
console.log(avengers.length);

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
let copys = rickAndMortyCharacters;
rickAndMortyCharacters.push("Morty","Summer");
console.log(rickAndMortyCharacters[avengers.length]);
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters);
copys.splice(1,1);
console.log(copys);
