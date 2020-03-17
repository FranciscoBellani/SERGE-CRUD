const express = require('express');
const app = express();
const ReservaRoute = express.Router();

let ReservaModel = require('../model/Reserva');

// Add Reserva
ReservaRoute.route('/create-Reserva').post((req, res, next) => {
  ReservaModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get all Reservas
ReservaRoute.route('/').get((req, res) => {
  ReservaModel.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Reserva
ReservaRoute.route('/get-Reserva/:id').get((req, res) => {
  ReservaModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Reserva
ReservaRoute.route('/update-Reserva/:id').put((req, res, next) => {
  ReservaModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Reserva successfully updated!')
    }
  })
})

// Delete Reserva
ReservaRoute.route('/delete-Reserva/:id').delete((req, res, next) => {
  ReservaModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = ReservaRoute;