const myLanguage = {
    js : 'Javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift'
}

// For-In loop
for (const key in myLanguage) {
    console.log(`${key} shortcut is for ${myLanguage[key]}`);
}

const arr = ['JS', 'Ruby', 'Python', 'CPP', 'Java'];

for (const key in arr) {
    console.log(arr[key]); 
}

const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States of America');
map.set('AF', 'Africa');
map.set('FR', 'France');

// Nothing is printed because it is not iteratable
for (const key in map) {
    console.log(map[key]);   
}