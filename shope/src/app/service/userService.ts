import { Injectable } from "@angular/core";
import { inject } from "@angular/core/testing";
import { User } from "../user";
@Injectable()
export class UserService{


constructor(){

    console.log("user service");
}
}
@Injectable(

)

export class UserServicbbb{
    user:  User[]=[
        { id:1, name:"mair",compent:"shefing",email:"4444@gmail.com",phone:"0504100954",details:"she develope"},
        { id:3, name:"Aila",compent:"portogal",email:"444@gmail.com",phone:"04896378" ,details:"she develhpe"},
        { id:2, name:"Mrim",compent:"ccc",email:"444@gmail.com",phone:"050488639" ,details:"she develhpe"},
        { id:3, name:"Aila",compent:"shefing",email:"444@gmail.com",phone:"0504166954" ,details:"she develhpe"}

        
    ];

getAllUser(){
    return this.user;

}

getUserByName(name:string,email:string){
    return this.user.filter(x=>x.name===name&&x.email===email);
}
constructor(){

}
}








    
  
  
  