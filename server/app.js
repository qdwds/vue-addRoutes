const express = require('express');
const app = express();
const  cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routers = require('./data/routers');
const users = require('./data/users')

app.use(cors())

app.post('/auth',(req,res)=>{
    const {uuid} = req.body;
    if(uuid){
        let authList = [];
        const userInfo = users.filter(user => user.id == uuid)[0];
        userInfo.auth.map((rid)=>{
            routers.map(router=>{
                if(router.id == rid){
                    authList.push(router)
                }
            })
        })
        res.send(authList)
    }else{
        res.send({
            msg:"请求uuid不存在"
        })
    }
})
app.listen('3000',()=> console.log(`http://localhost:3000/auth`))