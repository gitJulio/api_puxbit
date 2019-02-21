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

console.log(usuario[0]);
if (usuario && usuario !='') {
  res.send({
    ok:true,
    usuario:usuario[0].correo,
    token:1234
  })
}else{
  res.status(400).send({
    error:"usuario o contraseña invalidos"
  })
}



}
