const elements = ['Sun', 'Earth', 'Moon'];

console.log(elements.join());
// output: "Sun,Earth,Moon"

console.log(elements.join(''));
// output: "SunEarthMoon"

console.log(elements.join('-'));
// output: "Sun-Earth-Moon"

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
