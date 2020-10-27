import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private webReqService: WebRequestService) { }

  createMessage(message: String) {
    // We want to send a web request to send a message
    return this.webReqService.post('messages', { "message_body": message });
  }

  getMessage() {
    return this.webReqService.get('messages');
  }
}
