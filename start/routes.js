'use strict'

const Route = use('Route')

Route.post('/users', 'UserController.store').validator('User')

Route.group(() => {
  Route.get('/users', 'UserController.index')
  Route.get('/user/:id', 'UserController.show')

  Route.get('/files/:id', 'FileController.show')
  Route.post('/files', 'FileController.store')

  Route.resource('user.cota', 'CotaController').apiOnly()
}).middleware(['auth'])

Route.post('/sessions', 'SessionController.store').validator('Session')

Route.post('/passwords', 'ForgotPasswordController.store')
Route.put('/passwords', 'ForgotPasswordController.update')
