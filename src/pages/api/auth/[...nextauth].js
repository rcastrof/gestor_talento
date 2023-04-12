// ... para logins con google, facebook, twitter, github, etc

import NextAuth from 'next-auth'
import  CredentialsProvider  from 'next-auth/providers/credentials'
import connectMongo from '../../../../database/conn'
import Users from '../../../../model/Schema'
import { compare } from "bcryptjs";




export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            async authorize(credentials, req){
                connectMongo().catch(error => res.json({error: "conecctionfailed"}))

            const result = await Users.findOne({email: credentials.email})
            if(!result){
                throw new Error("No user found")
            }
            const checkPassword = await compare(credentials.password, result.password)
            if(!checkPassword){
                throw new Error("Password is incorrect")
            }
            return result
        }
        })
    ]
})