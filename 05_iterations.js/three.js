const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach( function (item) {
    console.log(item);
} )

coding.forEach( (item) => {console.log(item)} );

// Passing a callback function in the forEach
function printMe(item){
    console.log(item);
}

coding.forEach(printMe);


coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )


const arrayWithObjects = [
    {
        languageName: "Javascript",
        languageFile: "js"
    }, 
    {
        languageName: "Java",
        languageFile: "java"
    }, 
    {
        languageName: "Python",
        languageFile: "py"
    }, 
    {
        languageName: "C++",
        languageFile: "cpp"
    }
]

arrayWithObjects.forEach( (item) => {
    console.log(item);
} )

arrayWithObjects.forEach( (item) => {
    console.log(item.languageFile);
} )