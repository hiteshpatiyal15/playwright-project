import { CreateUserData } from "./createuser.type";
import { faker } from '@faker-js/faker';
export function getCreateAccountData(): CreateUserData{
    return {
        emailaddress: faker.internet.email(),
        firstname: faker.person.firstName(),
        lastname: "sharma",
        password: "pass,123",
        day: "15",
        month: "October",
        year: "2001"


    }
}