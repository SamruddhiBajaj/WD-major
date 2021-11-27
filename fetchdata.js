const client=require('./dbase');
client.connect();
client.query('select * from students',(err,result)=>{
    //client.query("select * from tbl", (err, result)=>{
    if(!err){
        console.log(result.rows);
    }
    client.end();
}
)