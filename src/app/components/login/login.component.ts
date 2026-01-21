import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        RouterModule,
        MatFormFieldModule
    ],
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private router: Router) { }

    onSubmit(form: NgForm) {
        if (form.valid) {
            console.log('Login Data:', form.value);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', form.value.email);
            this.router.navigate(['/']);
        }
    }
}
