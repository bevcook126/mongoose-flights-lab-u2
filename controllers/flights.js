const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
}

function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });    
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        flights.sort((a,b) => Number(a.departs) - Number(b.departs));
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.sort((a,b) => Number(a.arrival) - Number(b.arrival));
        Ticket.find(
            {flight: flight._id}, 
            function(err, tickets) {
                res.render('flights/show', { 
                    title: 'Flight Detail', 
                    flight, 
                    tickets 
                });
    });
  })}

