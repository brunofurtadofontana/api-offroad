const restify = require('restify');
const errors = require('restify-errors');
var cors = require('cors');

const server = restify.createServer({
  name: 'api web',
  version: '1.0.0'
});

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '186.202.152.74',
    user : 'offroadbd',
    password : 'Br7896569',
    database : 'offroadbd'
  }
});

server.use(cors());

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

/*---- LISTENING ----*/
server.listen(process.env.PORT || 8000, function() {
  console.log('%s listening at %s', server.name, server.url);
});

// server.listen(8080, function () {
//   console.log('%s listening at %s', server.name, server.url);
// });


//Rotas REST

// server.get('/api/users',  (req, res, next) => { // Retorna os promoters, eventos e seus endereços
//     //knex('promoter').then((dados ) => {
//      //       res.send(dados);
//      //   }, next)
//     knex('usuario')
//     //.join('enderecousuario','enderecousuario.promoter_idUsuario','=','idUsuario')
//     //.join('evento','evento.promoter_idUsuario','=','idUsuario')
//     .select()
//     .then((dados ) => {
//       if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
//             res.send(dados);
//     }, next)
    
    
//   });
  server.get('/api/evento',  (req, res, next) => { 
    knex('evento')
    .select()
    .then((dados ) => {
      if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
            res.send(dados);
    }, next)
    
  });
  server.get('/api/evento/:id',  (req, res, next) => {
    
    const {id} = req.params;
    knex('evento')
    .where('idEventos',id)
    .first()
    .then((dados ) => {
        if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
            res.send(dados);
    }, next)
    
  });
   server.get('/api/evento/title/:title',  (req, res, next) => {
    
    const {title} = req.params;
    console.log({title})
    knex('evento')
    .where('evenNome','like','%'+title[0]+'%')
    
    .then((dados ) => {
        if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
            res.send(dados);
    }, next)
    
  });

  server.get('/api/evento_endereco',  (req, res, next) => { //Retorna os eventos e seus endereços
    knex('evento')
    .join('endereco','Evento_idEventos','=','idEventos')
    .select()
    .then((dados ) => {
      if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
            res.send(dados);
    }, next)
    
  });
  server.get('/api/evento_imagem',  (req, res, next) => { //Retorna os eventos e seus endereços
    knex('evento')
    .join('evento_img','Evento_idEventos','=','idEventos')
    .select()
    .then((dados ) => {
      if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
            res.send(dados);
    }, next)
    
  });
/* 
  server.get('/endereco',  (req, res, next) => {//Retorna todos os usuarios e seus endereços

   knex('rest')
  .join('endereco','id_user','=','end_id_user')//select *from rest JOIN endereco WHERE id_user = end_id_user
  .select('name_user','end_rua')//retorna campos específicos (em branco retorna tudo *)
  .then((dados ) => {
    if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
        res.send(dados);
  }, next)
    
  });


server.post('/create',  (req, res, next) => {

    knex('rest')
    .insert(req.body)
    .then((dados ) => {
            res.send(dados);
    }, next)

});

server.post('/auth/:name',  (req, res, next) => {
  
 // const {pass} = req.params;
  const {name} = req.params;

  knex('rest')
  .where('name_user',name)
  .select()
  .then((dados ) => {
    if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
        res.send(dados);
}, next)

});

server.get('/show/:id',  (req, res, next) => {
    
    const {id} = req.params;

    knex('rest')
    .where('id_user',id)
    .first()
    .then((dados ) => {
        if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
            res.send(dados);
    }, next)
    
  });

  server.put('/update/:id',  (req, res, next) => {
    
    const {id} = req.params;

    knex('rest')
    .where('id_user',id)
    .update(req.body)
    .then((dados ) => {
        if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
            res.send('dados atualizados');
    }, next)
    
  });

  server.del('/delete/:id',  (req, res, next) => {
    
    const {id} = req.params;

    knex('rest')
    .where('id_user',id)
    .delete()
    .then((dados ) => {
        if(!dados)return res.send(new errors.BadRequestError('Nada foi encontrado!!'))
            res.send('dados deletados');
    }, next)
    
  }); */
  