import connectMongo from "../../../../database/conn";
import {getTalento, putTalento, deleteTalento} from "../../../../database/talentoController";

export default async function handler(req, res) {
    connectMongo().catch(()=> res.status(405).json({message: "Error connecting to MongoDB"}) )
    const {method} = req

    switch (method) {
        case 'GET':
            getTalento(req,res)
            break;
        case 'PUT':
            putTalento(req,res)
            break;
        case 'DELETE':
            deleteTalento(req,res)
            break;
            default:
            res.setHeader('Allow', ['GET'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
}