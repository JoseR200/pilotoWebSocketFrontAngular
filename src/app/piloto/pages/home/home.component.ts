import {Component} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {WebSocketService} from "../../services/web-socket/web-socket.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  socket: any;
  email: string = "";
  password: string = "";

  constructor(private userService: UserService, private webSocketService: WebSocketService) {
    this.socket = this.webSocketService.getSocket();
  }

  save() {
    this.userService.createUser({email: this.email, password: this.password}).subscribe( () => {
      console.log("He creado un usuario back")
      this.socket.emit('usuarioCreado');
    });
  }
}
