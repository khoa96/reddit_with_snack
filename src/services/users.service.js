const { UsersModel } = require('@models')
const { Unprocessable } = require('@feathersjs/errors')

class UsersService {
  constructor() {
    this.UsersModel = UsersModel
  }

  setup(app) {
    this.app = app
  }

  async find() {
    try {
      return this.UsersModel.query()
        .select('id', 'email')
    } catch (e) {
      this.app.get('logger').error(e)
      return new Unprocessable()
    }
  }
}

UsersService.ROUTE = '/users'

module.exports = UsersService
