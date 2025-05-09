import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;
loading = false;
success = false;
error = '';


constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  private userService: UserService
){}

ngOnInit(): void {
  if(this.userService.isLoggedIn()){
    this.router.navigate(['/']);
    return;
  }

  this.loginForm = this.formBuilder.group({
    phoneNumber: ['', Validators.required],
    password: ['', Validators.required],
  });
}


get f(){
  return this.loginForm.controls;
}

onSubmit(){
  if(this.loginForm.invalid){
    return
  }

  this.loading = true;
  this.error = '';


  this.userService
    .login({
      phoneNumber: this.f['phoneNumber'].value,
      password: this.f['password'].value,
    })
    .subscribe({
      next:(response: any) =>{
        console.log('ავტორიზაციის პასუხი:', response)

        this.success = true;

        this.userService.fetchUserDetails().subscribe({
          next: (userDetails) => {
            console.log('მომხმარებლის სრული ინფორმაცია:', userDetails);
            this.loading = false;

            setTimeout(()=>{
              this.router.navigate(['/cars']);
            }, 1000);
          },
          error: (err)=>{
            console.error('მომხმარებლის დეტალების მიღება ვერ მოხერხდა:', err);
            this.loading = false;

            setTimeout(()=>{
              this.router.navigate(['/']);
            }, 1000);
          },
        });
      },
      error:(error: any) => {
        this.error = 'ავტორიზაცია ვერ მოხერხდა. გთხოვთ, შეამოწმეთ სახელი და პაროლი';
        this.loading = false;
        console.error('Login error', error);
      },
    });
}
}
