import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const id = this.usersRepository.findById(user_id);

    if(!id){
      throw new Error("Usuário não encontrado");
    }

    if(id.admin === false) {
      throw new Error("Sem permissão");
    }

    return this.usersRepository.list();

  }
}

export { ListAllUsersUseCase };
