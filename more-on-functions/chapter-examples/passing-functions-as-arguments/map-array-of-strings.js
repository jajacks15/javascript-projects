let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let grabInitial = function(str){
    return str[0];
}
let firstInitials = names.map(grabInitial);

console.log(firstInitials);

let secondInitials = names.map(function(str){
    return str[1];
});
console.log(secondInitials);