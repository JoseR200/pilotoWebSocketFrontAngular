import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../services/user/user.service";
import {WebSocketService} from "../../services/web-socket/web-socket.service";

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.css']
})
export class SubHomeComponent implements OnInit{
  socket: any;
  users: Array<User> = [];

  constructor(private userService: UserService, private webSocketService: WebSocketService) {
    this.socket = this.webSocketService.getSocket();
  }

  ngOnInit(): void {
    this.getUsers();
    this.socket.on('getUsers', () => {
      console.log("Han creado un usuario, recargate")
      this.getUsers();
    });
  }

  getUsers() {
    this.userService.getAll().subscribe((response: any) => {
      this.users = response.users;
    });
  }
}
