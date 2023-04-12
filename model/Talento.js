import { Schema, models, model} from "mongoose";

const talentoSchema = new Schema({
    name: String,
    avatar: String,
    email: String,
    salary: Number,
    
})

const Talentos = models?.talento || model('talento', talentoSchema) 

export default Talentos