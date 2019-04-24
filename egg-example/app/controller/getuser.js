'use strict';

const Controller = require('egg').Controller;

class GetUserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '{name:123,age:20}';
  }
}

module.exports = GetUserController;
