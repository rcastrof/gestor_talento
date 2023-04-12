import { Schema ,model,models } from "mongoose";

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
})

const Users = models.user || model("user", UserSchema);

export default Users;