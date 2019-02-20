const pg =require('../../config/ps_conection')


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
  res.send({
    ok:true
  })
}else{
  res.status(400).send({
    error:"usuario o contraseña invalidos"
  })
}



}
