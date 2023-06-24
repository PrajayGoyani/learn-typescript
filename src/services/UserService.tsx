import { IUser } from "../modals/IUser";

export class UserService {
    private static faUser: IUser[] = [
        { sno: 1, fsName: "Mark Cerny", fiAge: 34 },
        { sno: 2, fsName: "Jacob Aztek", fiAge: 32 },
        { sno: 3, fsName: "Robert Mayor", fiAge: 35 },
    ]

    public static getAllUsers() {
        return this.faUser;
    }
} 