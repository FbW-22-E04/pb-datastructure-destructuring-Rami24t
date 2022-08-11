let [fruit, vegetable, food] = ["banana", "cucumber", ["bread", "cakes", "pizza"]];

let costumes = {"fran": "witch", "lisa": "rabbit"};
let {fran, lisa} = costumes;
console.log(fran,lisa);

let reginaMusician = {name: 'Regina Spektor', nationality: ' American Russian', occupation: 'singer/songwriter and pianist', genre: 'indie-pop', hit: 'Us'};
function printMusician (aMusician) {
let {name,nationality,occupation,genre,hit}= aMusician;
console.log(`${name} is an ${nationality +' '+occupation}. The musician sings ${genre} and their greatest hit is "${hit}".`);
}
printMusician(reginaMusician);
