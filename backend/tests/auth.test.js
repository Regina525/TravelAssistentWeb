import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../db.js";

export const addUser = (req,res) =>{
   const checkUser = "SELECT * FROM USERS WHERE email = ? OR name = ?";

   db.query(checkUser,[req.body.email,req.body.usename],(err,data)=>{
    if(err) return res.json(err);
    if(data.length) return res.status(409).json("User existe");

    const sal = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,sal);

    const insert = "INSERT INTO USERS(`name`,`email`,`password`) VALUES(?)";
    const values = [
        req.body.usename,
        req.body.email,
        hash
    ]
    db.query(insert,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.status(200).json("Utilizador criado com sucesso");
    })
   })
}

export const login = (req,res) =>{
    const checkUser = "SELECT * FROM USERS WHERE email = ? ";
    
    db.query(checkUser,[req.body.email],(err,data)=>{
        if(err) return res.json(err);
        if(!data.length) return res.status(409).json("User nao existe");

        const isPasswordCorrecy = bcrypt.compareSync(req.body.password,data[0].password);

        if(!isPasswordCorrecy) return res.status(400).json('Password errada');
        
        const token = jwt.sign({ id: data[0].id }, "jwtkey", { expiresIn: '1h' });

       
        const {password,...other} = data[0]
        res.cookie("access_token", token, {
            httpOnly: true,
          }).status(200).json({ success: true });
       })
   
}

export const logout = (req,res) =>{
   res.clearCookie("access_token",{
   sameSite:"none",
   secure:true}).status(200).json("Saiu")
}