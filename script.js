// forecast times
const times = ['today', 'tomorrow', 'this week', 'next week', 'this weekend', 'next weekend', 
'the coming days', 'the next two weeks'];

// weather conditions
const conditions = ['sunny', 'cloudy', 'rainy', 'foggy', 'windy', 'stormy'];

// temperature adjectives
const temperatures = ['hot', 'cold', 'warm', 'mild', 'chilly', 'frosty', 'icy', 'dry'];


// return a random entry from a given array
randomEntry = msgPart => msgPart[Math.floor(Math.random() * msgPart.length)];


// create and print the weather forecast ... incl. ascii art ;-)
function forecast() {
    const condition = randomEntry(conditions);
    console.log();
    console.log(`The weather ${randomEntry(times)} will be ${condition} and ${randomEntry(temperatures)}.`);
    switch (condition) {
        case 'sunny':
            asciiSunny();
            break;
        case 'cloudy':
            asciiCloudy();
            break;
        case 'rainy':
            asciiRainy();
            break;
        case 'foggy':
            asciiFoggy();
            break;
        case 'windy':
            asciiWindy();
            break;
        case 'stormy':
            asciiStormy();
            break;
    }
    console.log();
}

/*
    Ascii art functions
*/
function asciiSunny() {
    console.log('');
    console.log(' \\|/');
    console.log(' -o-');
    console.log(' /|\\');
}

function asciiCloudy() {
    console.log('');
    console.log('  ( ) ( ) ');
    console.log(' ( )( )( )');
    console.log('  ( ) ( )');
}

function asciiRainy() {
    console.log('');
    console.log(' | | |');
    console.log('  | |');
    console.log(' | | |');
}

function asciiFoggy() {
    console.log('');
    console.log('  - - ');
    console.log(' - - -');
    console.log('  - - ');
}

function asciiWindy() {
    console.log('');
    console.log('  ~ ~ ');
    console.log(' ~ ~ ~');
    console.log('  ~ ~');
}

function asciiStormy() {
    console.log('');
    console.log('  ≈ ≈ ');
    console.log(' ≈ ≈ ≈');
    console.log('  ≈ ≈ ');
}

forecast();

