//const { response } = require('express');
const express = require('express');
const webApplication = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

webApplication.set('view engine', 'hbs');
webApplication.set('views', __dirname + '/views');

webApplication.use(express.static('public'));
//webApplication.use(express.static('views'));

const data = {
  name: 'Spock',
  slogan: 'Welcome Visitors! May you live long and prosper!',
  heritage: 'mixed Human-Vulcan'
};

const home = {
  data,
  home: true
};

const about = {
  data,
  about: true
};

const works = {
  data,
  works: true
};

const gallery = {
  data,
  gallery: true
};

webApplication.listen(3000, () => console.log('Server is working'));

webApplication.get('/', (req, res) => res.render('home-page', home));

webApplication.get('/about', (req, res) => res.render('about', about));

webApplication.get('/gallery', (req, res) => res.render('gallery', gallery));

webApplication.get('/works', (req, res) => res.render('works', works));
