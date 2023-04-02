import { Injectable } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
 


  
  constructor(private fireauth : AngularFireAuth, private router : Router) { }
login(email : string, password : string,) {
  this.fireauth.signInWithEmailAndPassword(email,password).then(_res => {

    localStorage.setItem('token','true');
    if(_res.user?.emailVerified == true) {
      this.router.navigate(['/dash']);
    }
      else{
        this.router.navigate(['/verify-email']);
      }
      alert('login successfully');
      }, err => {
    alert(err.message);
    this.router.navigate(['/login']);
  }
  )
}
// certificate 

// register method
reg(email : string, password: string,) {
  this.fireauth.createUserWithEmailAndPassword(email,password).then( res =>{
   alert('registation successfully');
   this.router.navigate(['/login']);
   this.sendEmailForVarification(res.user)
  }, err => {
    alert(err.message);
    this.router.navigate(['/reg'])
  })

}
// sign out
logout() {
  this.fireauth.signOut(). then(() => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }, err => {
    alert(err.message);
  })
}
// forgot password
forgotpass(email : string){
  this.fireauth.sendPasswordResetEmail(email).then(() =>{
  this.router.navigate(['/verify-email']); },
  _err => {
    alert('something went wrong');
  })
}

// email varification
sendEmailForVarification(user:any){
  user.sendEmailVerification().then((_res : any) =>{
    this.router.navigate(['/verify-email']);
  }, (_err : any) => {
    alert('something went wrong. not able to send mail to registered email.')
  })
}
}


