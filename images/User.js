import express from "express"
import formidable from "formidable"
import fs from "fs"
import path from "path"
const User = express.Router()


User.post("/signup", (req, res) =>{
    const form = new formidable.IncomingForm()
    form?.parse(req, (err, fields, files) =>{
        const { fname, lname, pwd, email } = fields
        const { photo } = files

        if(fname === "" || lname === "" || pwd === "" || email === ""){
            res.json({message: "input field cannot be empty"})
        }
        else if(photo.originalFilename == ""){
            res.json({message: "Upload Your Photo"})

        }else{
            fs.copyFile(photo.filepath, path.join(path.resolve(), `../frontend/src/assets/upload/${photo?.originalFilename
            }`), (err) =>{
                if(err){
                    console.log(err)
                }else{
                    console.log("successfully copied")
                }
            })
        }
        
    })
})


export default User 