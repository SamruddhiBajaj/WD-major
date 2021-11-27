const client=require('./dbase');
client.connect();
client.query("insert into students values (2, 'Siddhi', 1023456789, 'abcxyz@gmail.com', 'Data Analytics')", (err, result)=>{
    if(!err){
        console.log("Data inserted successfully to the Database");
    }
    client.end();
})