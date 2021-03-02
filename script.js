// forecast times
const times = ['today', 'tomorrow', 'this week', 'next week', 'this weekend', 'next weekend', 
'the comming days', 'the next two weeks'];

// weather conditions
const conditions = ['sunny', 'cloudy', 'rainy', 'foggy', 'windy', 'stormy'];

// temperature adjectives
const temperatures = ['hot', 'cold', 'warm', 'mild', 'chilly', 'frosty', 'icy', 'dry'];


// return a random entry from a given array
function getRandomEntry(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}


// create and print the weather forecast
function forecast() {
    const time = getRandomEntry(times);
    const condition = getRandomEntry(conditions);
    const temperature = getRandomEntry(temperatures);
    console.log(`The weather ${time} will be ${condition} and ${temperature}.`);
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

