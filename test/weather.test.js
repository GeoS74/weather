const { expect } = require('chai');
const fetch = require('node-fetch');
require('dotenv').config({ path: './secret.env' });
const config = require('../config');

const app = require('../app');

describe('/test/weather.test.js', () => {
  let _server;

  before(async () => {
    _server = app.listen(config.server.port);
  });

  after(async () => {
    _server.close();
  });

  it('add cities', async () => {
    const optional = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        city: ['Moscow'],
      }),
    };

    let response = await fetch(`http://localhost:${config.server.port}/api`, optional)
      .then(_getData);
    expect(response.status, 'сервер возвращает статус 201').to.be.equal(201);
    expect(response.data, 'сервер возвращает массив городов').that.be.an('array');

    optional.body = JSON.stringify({});
    response = await fetch(`http://localhost:${config.server.port}/api`, optional)
      .then(_getData);
    expect(response.status, 'сервер возвращает статус 400').to.be.equal(400);
  });

  it('get cities', async () => {
    const response = await fetch(`http://localhost:${config.server.port}/api`)
      .then(_getData);
    expect(response.status, 'сервер возвращает статус 200').to.be.equal(200);
    expect(response.data, 'сервер возвращает массив городов').that.be.an('array');
  });

  it('error route', async () => {
    const response = await fetch(`http://localhost:${config.server.port}/foo`)
      .then((res) => ({
        status: res.status,
      }));
    expect(response.status, 'сервер возвращает статус 404').to.be.equal(404);
  });
});

async function _getData(response) {
  return {
    status: response.status,
    data: await response.json(),
  };
}
