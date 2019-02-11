const pg = require('../../config/ps_conection')

exports.getAlumnos = async function(req, res, next) {


  let alumnos =
    await pg.func('public.ft_view_get_alumnos').catch(err => {
      res.status(500).send({
        error: err,
        status: 500
      });
    })

  if (res.statusCode != 200) {
    return
  }

  res.send(alumnos[0]['ft_view_get_alumnos'])
}