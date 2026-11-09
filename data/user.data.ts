
import { User } from "./user.type";
declare const process: {
  env: Record<string, string | undefined>;
};

export function getUserData(): User{
    return {
        emailAddress: process.env.EMAIL ?? '',
        password: process.env.PASSWORD ?? ''
    }
}