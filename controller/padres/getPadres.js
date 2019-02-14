const pg =require('../../config/ps_conection')


exports.getPadres = async function(req, res, next){

    let padres=
    await pg.func('public.ft_view_get_padres').catch(err=>{
        res.status(500).send({
          error:err,
          status:500
        })
    })

    if (res.statusCode != 200) {
      return
    }

    res.json(padres)
  }
