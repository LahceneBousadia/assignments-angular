export class User {
    id!: number;
    username!: string;
    password!: string;
    email!: string;
    role!: string;

    constructor() {
        this.id = 0;
        this.username = "";
        this.password = "";
        this.email = "";
        this.role = "";
        
}
}