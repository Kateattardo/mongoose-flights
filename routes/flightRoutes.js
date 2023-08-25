// we need express
const express = require('express');
// we need to isolate the router
const router = express.Router();
// we need controller functions(we'll keep those in another file)
const flightsCtrl = require('../controllers/flightsControllers');
const ticketsCtrl = require('../controllers/ticketsControllers')
// NEW route - displays a form that triggers create
// this route will be /flights/new
router.get('/new', flightsCtrl.new);
// CREATE route - creates the data(triggered by the 'new' form)
// this route will be /flights
router.post('/flights', flightsCtrl.create);

router.post('/:id/destinations', flightsCtrl.addDestination);
// INDEX
router.get('/', flightsCtrl.index);
//flight ID
router.get('/flights/:id', flightsCtrl.show);
//Flight Tickets/ New and Create
router.get('/flights/:flightId/tickets/new', ticketsCtrl.newTicket);
router.post('/flights/:flightId/tickets', ticketsCtrl.create);

// SHOW
// EDIT
// UPDATE
// DELETE
// we need to export
module.exports = router;