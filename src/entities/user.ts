import { Group } from "./group";

export class User {
  public static clone(u: User): User {
    return new User(u.name, u.email, u.id, u.lastLogin, u.password,
                    u.active, u.groups?.map(g => Group.clone(g)));
  }

  constructor(
    public name: string,
    public email: string,
    public id?: number,
    public lastLogin?: Date,
    public password: string = '',
    public active: boolean = true,
    public groups: Group[] = []
  ){}

  public toString():string {
    return `${this.id}: ${this.name}, email: ${this.email}, password: ${this.password}`;
  }
}