import { User } from ".prisma/client";

import { ICreateUserRequestDTO } from "../useCases/CreateUserDTO";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | null>;
    create(data: ICreateUserRequestDTO): Promise<User | null>;
}
