// forecast times
const times = ['today', 'tomorrow', 'this week', 'next week', 'this weekend', 'next weekend', 
'the comming days', 'the next two weeks'];

// weather conditions
const conditions = ['sunny', 'cloudy', 'rainy', 'foggy', 'windy', 'stormy'];

// temperature adjectives
const temperatures = ['hot', 'cold', 'warm', 'mild', 'chilly', 'frosty', 'icy', 'dry'];

function getRandomEntry(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

function forecast() {
    const time = getRandomEntry(times);
    const condition = getRandomEntry(conditions);
    const temperature = getRandomEntry(temperatures);
    return `The weather ${time} will be ${condition} and ${temperature}.`;
}

console.log(forecast());

/**************
    Tests
***************/

// test function for getRandomEntry()
function test_getRandomEntry(array) {
    const entries = [];
    for (let i = 0; i < 100; i++) {
        const entry = getRandomEntry(array);
        if (!entries.includes(entry)){
            entries.push(entry);
        }
    }
    return entries.length === temperatures.length;
}

// console.log(test_getRandomEntry(times));