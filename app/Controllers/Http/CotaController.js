'use strict'

const Cota = use('App/Models/Cota')

class CotaController {
  async index ({ params }) {
    const cota = await Cota.query()
      .where('user_id', params.user_id)
      .with('user')
      .orderBy('id', 'desc')
      .fetch()
    return cota
  }

  async store ({ request }) {
    const data = request.only(['user_id', 'value', 'percent'])

    const cota = await Cota.create(data)

    return cota
  }

  async show ({ params }) {
    const cota = await Cota.findOrFail(params.id)

    return cota
  }

  async update ({ params, request, response }) {
    try {
      const { value, percent } = request.all()

      const cota = await Cota.findOrFail(params.id)

      cota.value = value
      cota.percent = percent

      await cota.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo deu errado! Tente novamente.' } })
    }
  }

  async destroy ({ params, request, response }) {}
}

module.exports = CotaController
