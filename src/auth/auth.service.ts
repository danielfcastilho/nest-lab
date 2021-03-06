import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthCredentialDto } from "./dto/auth-credentials.dto";
import { UsersRepository } from "./users.repository";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository
  ) {}

  async signUp(AuthCredentialDto: AuthCredentialDto): Promise<void> {
    return this.usersRepository.createUser(AuthCredentialDto);
  }
}
