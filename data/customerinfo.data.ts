import { CustomerInfo } from "./customerinfo.type";
import { faker } from "@faker-js/faker";

export function createFakeCustomerData():CustomerInfo {
    return {
        title: "Mr",
        firstName: faker.person.firstName() ,
        lastName: faker.person.lastName(),
        emailAddress: faker.internet.email(),
        password: faker.internet.password(),
        date: '9',
        month: 'November',
        year: '2026'

    }
}