import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) {}

  get username() {
    return this.userForm.get('username');
  }

  get password() {
    return this.userForm.get('password');
  }

  async submitForm() {
    console.log(this.username?.value);
    console.log(this.password?.value);

    this.userForm.markAllAsTouched();
    if (this.userForm.invalid) {
      return;
    }

    const user: User = {
      username: this.username!.value!,
      password: this.password!.value!,
    };

    try {
      await this.userService.login(user);
      this.router.navigateByUrl('pets');
    } catch (error) {
      alert('Invalid login credentials!');
    }
  }
}
