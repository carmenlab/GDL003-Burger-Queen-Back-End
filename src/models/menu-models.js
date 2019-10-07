'use strict'
 
// Cargamos el módulo de mongoose
var mongoose = require('mongoose');
 
// Usaremos los esquemas
var Schema = mongoose.Schema;
 
// Creamos el objeto del esquema
var menuSchema = Schema({
    name: String,
    price: String,
    image: String,
    description: String,
    type: String,
    id: Number,
}, {
    timestamps: true
});
 
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Menu', menuSchema);