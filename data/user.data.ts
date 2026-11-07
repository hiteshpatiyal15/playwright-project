
import { User } from "./user.type";


export function getUserData(): User{
    return {
        emailAddress: process.env.EMAIL,
        password: process.env.PASSWORD
    }
}