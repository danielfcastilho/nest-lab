import { Repository } from "typeorm";
import { AuthCredentialDto } from "./dto/auth-credentials.dto";
import { User } from "./user.entity";
export declare class UsersRepository extends Repository<User> {
    createUser(authCredentialsDto: AuthCredentialDto): Promise<void>;
}
