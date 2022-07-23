export class User {

    _id: string;
    name: string;
    lastName: string;
    email: string;
    role: string;
    isActive: any;
    password: string;

    constructor(_id = "", name = "", lastName = "", email = "", role = "", isActive: any = "", password = ""){
        
        this._id = _id
        this.name  = name
        this.lastName = lastName
        this.email = email
        this.role = role
        this.isActive = isActive
        this.password = password
        
    }

}