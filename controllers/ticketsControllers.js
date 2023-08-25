const Ticket = require('../models/tickets');
const Flight = require('../models/flight')

function newTicket(req, res) {
    const flightId = req.params.id;
    res.render('tickets/new', { flightId: req.params.id });
  }

  function create(req, res) {

    Ticket.create(req.body)
      .then((tickets) => {
        res.redirect(`/flights/${req.body.flight}`);
      })
      .catch((err) => {
        console.error("Error creating ticket:", err);
        res.redirect(`/flights/${req.body.flight}/tickets/new`);
      });
  }
  module.exports = {newTicket,
create}