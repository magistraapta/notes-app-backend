const hapi = require('@hapi/hapi');
const routes = require('./routes');
const notes = require('./notes');
const init = async () => {
  const server = hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server sedang berjalan pada ${server.info.uri}`);
};

init();
