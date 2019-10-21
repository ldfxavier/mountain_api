'use strict'

class SessionController {
  async store ({ request, auth }) {
    const { cpf, password } = request.all()

    const token = await auth.attempt(cpf, password)

    return token
  }

  async show ({ response, request, auth }) {

    try {
      return await auth.getUser()
    } catch (error) {
      response.send('You are not logged in')
    }

  }
}

module.exports = SessionController
