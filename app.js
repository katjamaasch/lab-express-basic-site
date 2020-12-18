//const { response } = require('express');
const express = require('express');
const webApplication = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

webApplication.set('view engine', 'hbs');
webApplication.set('views', __dirname + '/views');

webApplication.use(express.static('public'));
//webApplication.use(express.static('views'));

webApplication.listen(3000, () => console.log('Server is working'));

webApplication.get('/', (req, res) => res.render('home-page'));

webApplication.get('/about', (req, res) => res.render('about'));

webApplication.get('/gallery', (request, response) =>
  response.render('gallery')
);

webApplication.get('/works', (request, response) => response.render('works'));
