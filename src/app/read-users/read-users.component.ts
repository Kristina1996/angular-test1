import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { Observable} from 'rxjs';
import { User } from '../user';
import { Http, Response, Headers } from '@angular/http';

@Component({
	selector: 'app-read-users',
	templateUrl: './read-users.component.html',
	styleUrls: ['./read-users.component.css'],
	providers: [UserService]
})
export class ReadUsersComponent implements OnInit {
	
	title = 'Список пользователей';
    users: User[];
 
    // Инициализация userService для получения списка пользователей
    constructor( private userService: UserService ){}
 
    ngOnInit(){
        this.getAllUsers();
    }
	
	getAllUsers() {
		this.userService.readUsers()
            .subscribe(users => {
				console.log(users); 
				this.users = users['records']}
            );
	}

}
