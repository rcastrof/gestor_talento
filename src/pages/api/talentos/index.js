import connectMongo from "../../../../database/conn";
import {getTalentos, postTalento, putTalento, deleteTalento} from "../../../../database/talentoController";

export default async function handler(req, res) {
    connectMongo().catch(()=> res.status(405).json({message: "Error connecting to MongoDB"}) )
    const {method} = req
  
      switch (method) {
          case 'GET':
              getTalentos(req,res)
              break;
          case 'POST':
              postTalento(req,res)
              break;
          case 'PUT':
              putTalento(req,res)
              break;
          case 'DELETE':
              deleteTalento(req,res)
              break;
          default:
              res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
              res.status(405).end(`Method ${method} Not Allowed`)
      }
  }