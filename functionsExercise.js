const b='='.repeat(25)

function fozzieBear() {
    console.log('Wocka Wocka');
}

fozzieBear();

console.log(b);

function beaker(speak) {
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
}
beaker('Meep');

function muppetShows(a, b) {
    if (a==='Muppet',b==='Show') {
        console.log(`It's time to play the music. It's time to light the lights`);
    }
}

muppetShows(`Muppet`, `Show`);
muppetShows(`Muppet`, `Show`);

console.log(b);

function kermit() {
    return `Kermit the Frog`;
}

console.log(b);

function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    } else {
        return false;
    }
}

console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(55));

console.log(b);

const manOrMuppet=function () {
    console.log(`Am I a man or a Muppet?`);
}
manOrMuppet();

rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;

console.log(rainbowConnection());

// no

// yes

const newMuppetMovies=[
    `The Muppets`,
    `Muppets Most Wanted`
];

newMuppetMovies.map(function() {
    const uppers = newMuppetMovies.map(function(x){
        return x.toUpperCase()
    });
    console.log(uppers);

const oldMuppetMovies=[
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];

const twoMovies=oldMuppetMovies.filter(a=>a.length===22);
console.log(twoMovies);

const charactersOne=[
    `Statler`,
    `Waldorf`
];

const charactersTwo=[
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`
];

randomMuppet=(characters)=>{
    console.log(`${characters[Math.floor(Math.random()*characters.length)]}`);
}

randomMuppet(charactersOne);
randomMuppet(charactersTwo);


caps = (string) => {
    let newString = ``;
    for (i = 0; i < string.length; i++){
        if (i % 2 === 0){
            newString += string[i].toUpperCase()
        }else {
            newString += string[i].toLowerCase()
        }
    }
    return newString;
}

console.log(caps(`Hello World`));

        console.log(caps(`Hello World`));


        // // Extra Bonus

//  caps = (string) => {
//     let count = 0;
//     let newString = ``;
//     for (i = 0; i < string.length; i++){
//         if (string[i] ===` `){
//             newString += ` `;
//         }else if (count % 2 === 0){
//             newString += string[i].toUpperCase();
//             count++;
//         }else{
//             newString += string[i].toLowerCase()
//             count++
//         }
//     }
// return newString;
// }


// console.log(caps(`Hello World`));