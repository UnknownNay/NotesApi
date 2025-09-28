import Hapi from '@hapi/hapi';
import notes from "./api/notes";
import NotesService from "./services/inMemory/NotesService.js";


const init = async () => {
  const notesService = new NotesService();
  const server = Hapi.server({
    port : 5000,
    host : 'localhost',
    routes: {
      cors : {
        origin : ['']
      }
    }
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();