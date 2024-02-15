

function add (a,b){
    return a + b;
}
console.log(process.argv.slice(2));

const arguments= process.argv.slice(2);

console.log(add(parseInt(arguments[0]), parseInt(arguments[1])));