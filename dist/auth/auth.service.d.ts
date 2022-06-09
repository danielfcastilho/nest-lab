import { AuthCredentialDto } from "./dto/auth-credentials.dto";
import { UsersRepository } from "./users.repository";
export declare class AuthService {
    private usersRepository;
    constructor(usersRepository: UsersRepository);
    signUp(AuthCredentialDto: AuthCredentialDto): Promise<void>;
}
