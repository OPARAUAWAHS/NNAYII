import mysql from "mysql"

const db = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "",
    database: "crm"
})


db.connect((err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("database connected successfully")
    }
})


export default db