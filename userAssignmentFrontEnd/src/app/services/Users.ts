

export class Users {
    _id: string;
    file:string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    number: Number;
    dob: Date;
    userid: string;
    gender: string;
    password: string;
    constructor(_id: any, file:any,username: any, firstname: any, lastname: any, email: any, number: any, dob: any, userid: any, gender: any, password: any) {
        this._id = _id;
        this.file=file;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.number = number;
        this.dob = dob;
        this.userid = username;
        this.gender = gender;
        this.password = password



    }

}