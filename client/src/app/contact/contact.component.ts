import { Component, ElementRef, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('name', { static: true }) name: ElementRef;
  @ViewChild('email', { static: true }) email: ElementRef;
  @ViewChild('subject', { static: true }) subject: ElementRef;
  @ViewChild('phone', { static: true }) phone: ElementRef;
  @ViewChild('message_body', { static: true }) message_body: ElementRef;

  constructor(private messageService: MessageService, private location: Location) {}

  ngOnInit(): void {
  }

  createNewMessage (name, email, phone, subject, message) {
    this.messageService.createMessage(name, email, phone, subject, message).subscribe((response: any) => {
      this.name.nativeElement.value = ''
      this.email.nativeElement.value = ''
      this.subject.nativeElement.value = ''
      this.phone.nativeElement.value = ''
      this.message_body.nativeElement.value = ''
      
      alert("Message sent successfully!")
    })

  }

  getMessage () {
    this.messageService.getMessage().subscribe((response: any) => {
      console.log(response)
    })
  }

}
