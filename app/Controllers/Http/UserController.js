'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    const users = await User.query().orderBy('name', 'asc').fetch()

    return users
  }

  async show ({ params }) {
    const user = await User.findOrFail(params.id)

    return user
  }

  async store ({ request }) {
    const data = request.only(['name', 'cpf', 'email', 'phone', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
