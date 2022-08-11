let [fruit, vegetable, food] = ["banana", "cucumber", ["bread", "cakes", "pizza"]];

let costumes = {"fran": "witch", "lisa": "rabbit"};
let {fran, lisa} = costumes;
console.log(fran,lisa);

reginaMusician = {name: 'Regina Spektor', nationality: ' American Russian', occupation: 'singer/songwriter and pianist', genre: 'indie-pop', hit: 'Us'};
function printMusician (aMusician) {
console.log(`${aMusician.name} is an ${aMusician.nationality +' '+aMusician.occupation}. The musician sings ${aMusician.genre} and their greatest hit is "${aMusician.hit}".`);
}
printMusician(reginaMusician);
