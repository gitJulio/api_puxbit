const pg =require('../../config/ps_conection')


exports.login=async function(req, res, next){

let body=req.body;
console.log("******");
console.log(req.body.email)
console.log("******");
let usuario=
await pg.func('public.ft_view_get_usuario',["bueso@outlook.com","123456"]).catch(err=>{
    res.status(500).send({
      error:err,
      status:500
    })
})


// Usuario.findOne({email: body.mail}, (err, usuarioDB)=>{
//     if (err) {
//       return res.status(500).json({
//         ok:false,
//         err
//       })
//     }
//
//     if (!usuarioDB) {
//       if (err) {
//         return res.status(400).json({
//           ok:false,
//           err:{
//             message:'Usuario o contraseña invalidos'
//           }
//         })
//       }
//     }
// })


}
