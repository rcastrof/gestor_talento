import { hash } from "bcryptjs"
import connectMongo from '../../../../database/conn'
import Users from '../../../../model/Schema'

export default async function handler(req,res){
    connectMongo().catch(error => res.json({error: "conecctionfailed"}))

    if (req.method === 'POST') {
        if(!req.body) return res.status(404).json({error:"dont have form data"})
        const {username, email, password} = req.body

        const checkexisting = await Users.findOne({email})
        if(checkexisting) return res.status(422).json({message:"user already exists"})

        const data = await Users.create({username, email, password : await hash(password,12)})
        res.status(200).json({message:"user created", data})
            
        
    }else {
        res.status(500).json({message: "method not allowed"})
    }
}