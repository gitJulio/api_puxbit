const pg = require('../../config/ps_conection')


exports.getAlumnos =  async  (req, res, next) => {
  let data_usuario;

  if (req.nivel==3) {
    data_usuario =
      await pg.func('public.ft_view_get_alumnos',[req.usuario]).catch(err => {
        res.status(500).send({
          error: err,
          status: 500
        });
      })

    if (res.statusCode != 200) {
      return
    }

  }

  res.json(data_usuario)
}
