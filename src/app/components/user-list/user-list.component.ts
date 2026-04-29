import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: 'user-list.component.html',
  imports: [CommonModule],
  styleUrl: 'user-list.css'
})
export class UserListComponent implements OnInit {

  users$!: Observable<any[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}