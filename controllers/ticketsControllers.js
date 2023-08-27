const Ticket = require('../models/tickets');
const Flight = require('../models/flight')

function newTicket(req, res) {
  console.log('req.params', req.params)
  res.render('tickets/new', { flightId: req.params.flightId });
}

function create(req, res) {
  console.log('create', req.body)
  const ticketData = {
    seat: req.body.seat,
    price: req.body.price,
    flight: req.params.flightId
  }
  Ticket.create(ticketData)
    .then((tickets) => {
      res.redirect(`/flights/${req.params.flightId}`);
    })
    .catch((err) => {
      console.error("Error creating ticket:", err.message);
      res.redirect(`/flights/${req.body.flight}/tickets/new`);
    });
}
module.exports = {
  newTicket,
  create
}