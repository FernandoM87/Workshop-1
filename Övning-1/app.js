const { log } = require('console');
const express = require ('express');

const app = express ();

app.get('/', (req, res) => {
    const fs = require('fs');

    const data = fs.readFileSync('people.txt', 'utf8');

    const persons = data.split("\n");

    let html = "<ul>"

    for (const line of persons) {
        const person = line.split(",");

        const name = person[0];
        const age = person[1];

        html += `<li>${name} is ${age} years</li>`
    }

    html += "</ul>"
    
    res.send(html)
});

app.listen(8000, () => {
    console.log("http://localhost:8000/");
});