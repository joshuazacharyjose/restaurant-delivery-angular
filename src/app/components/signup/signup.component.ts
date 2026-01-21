import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-signup',
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
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    constructor(private router: Router) { }

    onSubmit(form: NgForm) {
        if (form.valid) {
            console.log('Signup Data:', form.value);
            // Simulate API call and login
            localStorage.setItem('isLoggedIn', 'true');
            this.router.navigate(['/']);
        }
    }
}
