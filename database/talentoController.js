import Talentos from "../model/Talento"

export async function getTalentos(req,res){
    try{
        const talentos = await Talentos.find({})
        if(!talentos) return res.status(404).json({message: "No users found"})
        res.status(200).json(talentos)
    }catch(error){
        res.status(404).json({message: "Error connecting to MongoDB"})
    }
}

export async function getTalento(req,res){
    try {
        const {talentoId} = req.query
        if (talentoId) {
            const talento = await Talentos.findById(talentoId)
            res.status(200).json(talento)            
        }
        res.status(404).json({error:"Error data"})
    } catch (error) {
        res.status(404).json({error:"Error connecting to MongoDB"})
    }
}

export async function postTalento(req,res){
    try{
        const formData = req.body
        const data = await Talentos.create(formData)
        return res.status(200).json(data)
    }catch(error){
        return res.status(404).json({error})
    }
}

export async function putTalento(req,res){

    try {
        const {talentoId} = req.query
        const formData = req.body
        
        if (talentoId && formData) {
            const talento = await Talentos.findByIdAndUpdate(talentoId,formData)
            res.status(200).json(talento)
        }
        res.status(404).json({error:"Error data"})

    } catch (error) {
        res.status(404).json({error:"Error connecting to MongoDB"})
    }
}

export async function deleteTalento(req,res){
    try {
        const {talentoId} = req.query
        if (talentoId) {
            const talento = await Talentos.findByIdAndDelete(talentoId)
            res.status(200).json({deleted: talentoId})
        }
        res.status(404).json({error:"Error data"})

    } catch (error) {
        res.status(404).json({error:"Error connecting to MongoDB"})
    }
}

