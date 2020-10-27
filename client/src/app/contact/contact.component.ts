import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
  }

  // createNewMessage (message_body: string) { 
  createNewMessage () {
    this.messageService.createMessage('Testing').subscribe((response: any) => {
      console.log(response);
    })
  }

  getMessage () {
    this.messageService.getMessage().subscribe((response: any) => {
      console.log(response)
    })
  }

}
