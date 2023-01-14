import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  hide = true;
  ngOnInit(): void {}

  login() {
    if (this.loginForm.invalid) {
    } else {
      const data = this.loginForm.value;
      this.auth.connexion(data).subscribe(
        (res: { success: any; token: string }) => {
          if (res.success) {
            localStorage.setItem('token', res.token);
            this.router.navigate(['/home']);
          } else {
            alert('error');
          }
        },
        (err: any) => {}
      );
    }
  }
}
