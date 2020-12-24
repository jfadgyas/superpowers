const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ];

//Opdrachten
//1. Maak een array van alle superhelden namen
let heroNames = superheroes.map((item) => item.name);
console.log(heroNames);

//2. Maak een array van alle "lichte" superhelden (< 190 pounds)
let lightHeroes = superheroes.filter(item => item.weight <190);
console.log(lightHeroes);

//3. Maak een array met de namen van de superhelden die 200 pounds wegen
let whoIs200 = superheroes.filter(item => item.weight == 200).map(filtered => filtered.name);
console.log(whoIs200);

//4. Maak een array met alle comics waar de superhelden hun "first appearances" hebben gehad
let firstAppear = superheroes.map(item => ({Name: item.name, First_appearance: item.first_appearance}));
console.log(firstAppear);

//5. superhelden van DC Comics, van Marvel Comics
let DCHeroes = superheroes.filter(item => item.publisher == 'DC Comics');
let marvelHeroes = superheroes.filter(item => item.publisher == 'Marvel Comics');
console.log(DCHeroes);
console.log(marvelHeroes);

//6. Tel het gewicht van alle superhelden van DC Comics bij elkaar op
let totalDCWeight = DCHeroes.reduce((weight, hero) => {return weight + parseInt(hero.weight)}, 0);
console.log(totalDCWeight);

//7. Tel het gewicht van alle superhelden van Marvel Comics bij elkaar op
let totalMarvelWeight = 
    marvelHeroes.filter(item => !isNaN(parseInt(item.weight)))
        .reduce((weight, hero) => {return weight + parseInt(hero.weight)}, 0);

console.log(totalMarvelWeight);

//8. Bonus: zoek de zwaarste superheld!
let heaviestWeight = 
    superheroes.filter(item => !isNaN(parseInt(item.weight)))
    .reduce((maxWeight, item) => 
        {return Math.max(maxWeight, parseInt(item.weight))
    }, 0)
let heaviestHero = superheroes.filter(item => item.weight == heaviestWeight);
console.log(heaviestHero);