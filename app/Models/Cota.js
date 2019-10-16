'use strict'

const Model = use('Model')

class Cota extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Cota
