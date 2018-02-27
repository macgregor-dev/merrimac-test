import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() onLogin = new EventEmitter<any>();
  @Input() errorMsg;

  isMaint: boolean;
  email: string;
  password: string;
  isPending: boolean;
  isResettingPwd: boolean;
  test:any;

  constructor(public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  login(event:any) {
    console.log(`Logging in...`);
    const creds = {email:this.email, password:this.password};
    this.onLogin.emit(creds);
    this.data.consumer.login(creds);
  }

}
