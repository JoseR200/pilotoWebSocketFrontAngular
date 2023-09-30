import { Injectable } from '@angular/core';
import {io} from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private readonly socket: any;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  getSocket() {
    return this.socket;
  }
}
