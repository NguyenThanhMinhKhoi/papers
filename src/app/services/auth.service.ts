import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth:Auth) { }
  currentUser!: User|null;

async loginWithGoogle(){
    let googleProvider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth ,googleProvider)
  }
public logout(){
  this.auth.signOut();

}
}