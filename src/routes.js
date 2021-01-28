import {Router} from 'express'
const routes =new Router()

routes.get('/',(req,res) => {
 return res.json({message: 'Deu certo'})
})
export default  routes
 