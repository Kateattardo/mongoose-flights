//bring in models
const Flight = require('../models/flight');
const Ticket = require('../models/tickets');


//export functions
module.exports = {
    new: newFlight,
    create,
    index,
    show,
    addDestination
}

//index functionality
function index(req, res) {
    console.log('these are the flights')
    Flight.find({})
    .then(flightDocs => {
        console.log('flight info')
        res.render('flights/index', {flights: flightDocs, title: "Express"})
    })
   .catch(err => {
    console.log ('===err===')
    console.log(err)
    console.log('===err===')
    return res.send('err creating - check terminal')
 })
}

//new 
function newFlight(req, res) {
    console.log('the new route had been hit')
    res.render('flights/new', {title: "New Flight"})

}
//create
function create(req, res)  {
    const newFlight = new Flight(req.body);
     newFlight.save()
    .then(flight => {
        console.log('Flight saved:', flight);
        res.redirect('/');  // redir to flights list
    })
    .catch(error => {
        console.error('Error saving flight:', error);
        res.status(500).send('Internal Server Error');
    });
};

//Show
async function show(req, res) {
 let flight = await   Flight.findById(req.params.id)
//  .then(function(err, flights) {
        // Ticket.find({flight: flights._id}).then(function(err, tickets) {
        //     res.render('flights/show', { tickets});
        // });
        res.render('flights/show', { flight});
    // });
}
       
 
//Destinations
 function addDestination(req, res) {
    Flight.findById(req.params.id)
        .then(flight => {
          flight.destinations.push(req.body); 
          return flight.save();
        })
        .then(() => {
           res.redirect(`/flights/${req.params.id}`);
        })
        .catch(err => {
            console.log(err);
            res.redirect(`/flights/${req.params.id}`);
        });
 }

