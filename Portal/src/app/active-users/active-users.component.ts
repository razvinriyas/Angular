import { Component, OnInit } from '@angular/core';
import { UserService, Users } from './users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  userlist: Users[] = [];
  constructor(service: UserService)
  {
     this.userlist = service.getUsers();
  }


  ngOnInit(): void {
  }


}


