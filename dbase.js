const {Client}=require("pg");
const client=new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'Learner05#',
    database:'online_vidya'
})
module.exports=client;