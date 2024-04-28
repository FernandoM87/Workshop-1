const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('hbs', exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs"
})); 

app.set("view engine", "hbs");

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/movies', (req, res) => {
    const fs = require('fs');

    const data = fs.readFileSync('movies.txt', 'utf8');
    const movies = data.split('\n').map((line) => {
        const [title, description, image] = line.split(';');
        return { title, description, image };
    });

    res.render('movies', { movies });
});

app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});