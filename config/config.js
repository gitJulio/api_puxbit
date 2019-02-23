// Puerto
process.env.PORT = process.env.PORT || 7000;

//Vencimiento del token
// 60 segundos
// 60 minutos
// 24 horas
// 30 días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// process.env.CADUCIDAD_TOKEN=60 * 60 * 24 * 30
// exports.CADUCIDAD_TOKEN=60*60*24*30

//SEED
process.env.SEED=process.env.SEED || 'es-te-es-el-seed-desarrollo';

const config = {
  db: {
    host: '35.239.128.238',
    port: "5432",
    database: 'puxbit',
    user: 'puxbit',
    password: 'N1lointentes2019'
  },
  data_token:{
    caducidad_token:60 * 60 * 24 * 30,
    seed:'es-te-es-el-seed-desarrollo'
  }
};

module.exports = config;
