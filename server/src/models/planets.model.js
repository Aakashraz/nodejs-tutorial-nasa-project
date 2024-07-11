// import the builtin file system module
const fs = require ('fs');
const parse = require('csv-parse');

const habitablePlanets = [];

function isHabitablePlanets(planet) {
    // Bracket Notation is used to access the element of javaScripts object,
    // the incoming planet(data) is already converted to javaScripts objects.

        return (planet['koi_disposition']=== 'CONFIRMED' || planet['koi_disposition']==='CANDIDATE')    // to make the condition work for OR logic by enclosing inside the brackets
            && planet['koi_insol'] > 0.36
            && planet['koi_insol'] < 1.11
            && planet['koi_prad'] < 1.6;
    // threshold value required to be a habitable planet.
}


// -------------this description is for the parsing process:
// The columns: true option is key here. It tells the parser to:
//
// Use the first row of the CSV as headers
// Convert each subsequent row into a JavaScript object where:
//
// The keys are the column headers
// The values are the corresponding cell values
fs.createReadStream('kepler-data.csv')
    .pipe(parse.parse({
        comment: '#',   // specify the comment character correctly
        columns: true   // Use 'columns' instead of 'column'
    }))
    .on('data', data=> {
        if (isHabitablePlanets(data)) {
            habitablePlanets.push(data);
        }
    })
    // The 'data' event is emitted for each row of the CSV after it has been parsed. By the time this event occurs, data is already a JavaScript object.
    .on('error', err => console.error(err))
    .on('end', () => {
        console.log(`${habitablePlanets.length} probable (also including CANDIDATE) habitable planets found.`);
        // to print the names of those habitable planets
        console.log(habitablePlanets.map( planet => {
            return planet['kepler_name']}))
        console.log("Done!!!");
    })

module.exports = {
   planets: habitablePlanets,
}