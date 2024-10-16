let express = require('express');
let app = express();

let museums = [
    {
        name: "The Louvre",
        location: "Paris, France",
        established: 1793
    },
    {
        name: "The British Museum",
        location: "London, UK",
        established: 1753
    },
    {
        name: "The Metropolitan Museum of Art",
        location: "New York, USA",
        established: 1870
    },
    {
        name: "The Vatican Museums",
        location: "Vatican City",
        established: 1506
    },
    {
        name: "The Uffizi Gallery",
        location: "Florence, Italy",
        established: 1584
    },
    {
        name: "The State Hermitage Museum",
        location: "Saint Petersburg, Russia",
        established: 1764
    },
    {
        name: "The Rijksmuseum",
        location: "Amsterdam, Netherlands",
        established: 1800
    },
    {
        name: "The National Gallery",
        location: "London, UK",
        established: 1824
    },
    {
        name: "The Guggenheim Museum",
        location: "New York, USA",
        established: 1937
    },
    {
        name: "The Museo del Prado",
        location: "Madrid, Spain",
        established: 1819
    }
];

// app.get('/', (request, response) => {
//     response.send("Hello");
//     console.log('route 1: static HTML working!')
// });

//Route 1: Static HTML 
app.use('/', express.static('public'));

//Route 2: JSON data
app.get('/museums', (request, response) =>{
    response.json(museums);
})

//Route 3: Dynamic JSON 
app.get('/museums/:museum', (request, response)=> {
    console.log(request.params.museum);
    let user_museum = request.params.museum;
    let user_obj;
    console.log(museums[0].name);
    for(let i=0; i<museums.length;i++) {
        if(user_museum == museums[i].name) {
            user_obj = museums[i]; 
        }
    }
    console.log(user_obj);
    if(user_obj) {
        response.json(user_obj);
    } else {
        response.json({status: "info not present"});
    }
    // response.send("here is a museum");
})
app.listen(3000, ( ) => {
    console.log("App is listening at localhost:3000");
});