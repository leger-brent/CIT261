//Parsing JSON as a variable
//Create a variable that holds JSON formatted data
var Input = '[{"Name":"Vahn", "HP": 50},{"Name":"Noa", "HP": 40}]';
//Create a new variable to hold the parsed data of the previous variable
var Parsed = JSON.parse(Input);
//Example showing you can add more objects to the Parsed variable
Parsed.push({ Name: "Gala", HP: 75 });
//Create variable that turns a JavaScript Object into JSON
var Output = JSON.stringify(Parsed);
//Print the new JSON that should have our new addition "Gala" now as part of the JSON data
console.log(Output);

//Parsing RAW JSON
//Create a variable that holds the data of the parsed function performed on JSON
var Parse = JSON.parse('[{"Name":"Vahn", "HP": 50},{"Name":"Noa", "HP": 40}]');
//Same as above
Parse.push({ Name: "Gala", HP: 75 });
//Same as above
var Output1 = JSON.stringify(Parse);
//Print the line to the console.
console.log(Output1);