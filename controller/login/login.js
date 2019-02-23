const pg =require('../../config/ps_conection')

const jwt=require('jsonwebtoken')

exports.login=async function(req, res, next){

let body=req.body;

let usuario=
await pg.func('public.ft_view_get_usuario',[body.email,body.password]).catch(err=>{
    res.status(500).send({
      error:err,
      status:500
    })
})



if (usuario && usuario !='') {
  console.log(usuario[0].nivel);
  let token = jwt.sign({
    usuario:usuario[0].correo,
    nivel:usuario[0].nivel
  },process.env.SEED,{ expiresIn:process.env.CADUCIDAD_TOKEN});

  res.send({
    ok:true,
    usuario:usuario[0].correo,
    token
  })
}else{
  res.status(400).send({
    error:"usuario o contraseña invalidos"
  })
}



}
