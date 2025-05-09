import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  userName: string = 'მომხმარებელი';
  constructor(
    public userService: UserService
  ){}

  ngOnInit(): void {
    this.userService.currentUser.subscribe((user)=>{
      if(user && user.firstName && user.lastName){
        this.userName = `${user.firstName} ${user.lastName}`;
      }else if(user && user.firstName){
        this.userName = user.firstName;
      }else if(user && user.phoneNumber){
        this.userName = user.phoneNumber;
      }else{
        this.userName = 'მომხმარებელი';
      }
    });
  }


  getUserName(): string{
    return this.userName;
  }

  logout(event?: Event): void{
    if (event){
      event.preventDefault();
    }
    this.userService.logout();
  }
}
