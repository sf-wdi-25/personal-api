// require express and other modules
var express = require('express'),
    app = express();
    
	// Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

/************
 * DATABASE *
 ************/

// your hardcoded data here

var profileInfo = [
  {
    name: "Nathan",
    githubLink: "https://github.com/anonym0us3",
    githubProfilePic: "https://avatars1.githubusercontent.com/u/15662297?v=3&s=460",
    city: "San Francisco",
    family: [
      {
        name: "Papa Bear",
        relationship: "Father",
        photo: "http://4.bp.blogspot.com/-2TiLn_WHK7o/UwFyc96Bl9I/AAAAAAAAHRk/ZqDBK0eF_Vg/s1600/polar-bear-with-cub-1134-1920x1200.jpg"
      },
      {
        name: "Mama Bear",
        relationship: "Mother",
        photo: "http://i.dailymail.co.uk/i/pix/2014/12/18/2423FC8100000578-0-image-a-31_1418912663847.jpg"
      }
    ]
  }
];

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index (req, res){
  res.json({
    message: "Welcome to my personal api!",
    documentation_url: "https://github.com/anonym0us3/express_self_api/blob/master/README.md", // CHANGE THIS TO LINK TO YOUR README.md
    base_url: "https://mysterious-earth-5591.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
