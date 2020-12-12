const { response } = require('express');
const express = require('express');
const webApplication = express();
webApplication.use(express.static("public"));
//webApplication.use(express.static('views'));

webApplication.listen(3000, () => console.log('Server is working'));

webApplication.get('/', (request, response) =>
  response.sendFile(__dirname + '/views/home-page.html')
);

webApplication.get('/about', (request, response) =>
  response.sendFile(__dirname + '/views/about.html')
);

webApplication.get('/gallery', (request, response) =>
  response.sendFile(__dirname + '/views/gallery.html')
);

webApplication.get('/works', (request, response) =>
  response.sendFile(__dirname + '/views/works.html')
);

