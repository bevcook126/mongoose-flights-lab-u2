const Flight = require('../models/flight');

module.exports = {
    create,
    // new: newDestination
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });





       
        // const newDestination = new Destination ();
        // const at = flight.destinations;
        // let arrivalTime = `${at.getFullYear()}-${(at.getMonth() + 1).toString().padStart(2, '0')}`;
        // arrivalTime += `-${at.getDate().toString().padStart(2, '0')}T${at.toTimeString().slice(0, 5)}`;
        // res.render('flights/show', { arrivalTime });    
    });
}

// function newDestination(req, res) {
//     Flight.findById(req.params.id, function(err, flight) {
//     const at = flight.destinations;
//     let arrivalTime = `${at.getFullYear()}-${(at.getMonth() + 1).toString().padStart(2, '0')}`;
//     arrivalTime += `-${at.getDate().toString().padStart(2, '0')}T${at.toTimeString().slice(0, 5)}`;
//     res.render('flights/show', { arrivalTime });    
// })}

// function newFlight(req, res) {
//     const newFlight = new Flight();
//     const dt = newFlight.departs;
//     let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
//     departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
//     res.render('flights/new', { departsDate });    
// }