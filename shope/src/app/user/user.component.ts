import { Component, OnInit ,Input,OnChanges,OnDestroy, EventEmitter, Output} from '@angular/core';
import { User } from '../user';
import { UserServicbbb, UserService } from '../service/userService';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Output()
selectedUser=new EventEmitter<any>();

list=[];
  user: User[] = [];
  constructor(private userService:UserServicbbb) { }
  
  ngOnInit(): void {

    this.user=this.userService.getAllUser();
  }
  choose(user :any){
  this.selectedUser.emit(user);
}
}
