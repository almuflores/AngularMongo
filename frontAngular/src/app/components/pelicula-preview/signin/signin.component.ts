import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user={}
  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {
  }

  signIn(){
    this.authService.signInUser(this.user)
    .subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/peliculas']);
      },
      err=>console.log(err)
    )
  }
}
