
const express = require('express')


const db=require('./utils/database')
const initModels=require('./models/initModels')
const userRouter=require('./users/user.router')
const responseHandlers = require('./utils/handleResposes') 

//? Initial Configs
const app = express()
//? Enable incoming JSON data
app.use(express.json())

db.authenticate()
    .then(()=>{
        console.log('las credencuales se han sincronizados')
    })
    .catch((err)=>{console.log(err)})
db.sync()
    .then(()=>{console.log('el virus se a actualizado')})
    .catch((err)=>{console.log(err)})

initModels()

app.get('/', (req, res) => {
    responseHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "users": "http://localhost:9000/api/v1/users",
            "conversations": "http://localhost:9000/api/v1/conversations"
        }
    })
})


app.use('/api/v1', userRouter)

app.use('*', (req, res)=> {
    responseHandlers.error({
        res,
        status:404,
        message:'URL not a found, pleas try whitn  http://localhost:9000'
    })
})

app.listen(9000,() => {
    console.log('Server started at port 9000')
})