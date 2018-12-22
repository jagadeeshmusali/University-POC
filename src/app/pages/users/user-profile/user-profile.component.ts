import { Component } from '@angular/core';
import { AuthService } from '../../../@core/data/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {


  constructor(public auth: AuthService) { }

}