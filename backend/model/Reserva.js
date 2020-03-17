const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Reserva = new Schema({
  reserva_nombre: {
    type: String
  },
  categoria: {
    type: String
  }
}, {
  collection: 'reservas'
})

module.exports = mongoose.model('Reservas', Reserva)