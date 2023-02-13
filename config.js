require('dotenv').config()

module.exports={
    api:{
        port:process.env.PORT || 3000,
        host:process.env.HOST || 'http:localthost://3000',
        nodeEnv:process.env.NODE_ENV || 'develpment', //!entorno de desarrollo envillorment
        jwtSecret: process.env.JWT_SECRET,
    },
    db:{
        development:{
        dialect:'postgres',
        port:process.env.DB_PORT||5432,
        database:process.env.DB_NAME||'chatTest',
        username:process.env.DB_USER,    
        password:process.env.DB_PASWORD,
        definfe:{
            timestamps:true,    //creatData, updateDate (when:time)
            underscored:true,
            underscoredAll:true     //llaves foraneas snakekeys

        },
        // dialectOptions:{
        //     ssl:{
        //         require:true,
        //         rejectUnauthoriced:false
        //     }
        // }

        },
        production:{

        },
        testing:{

        }
    }

}