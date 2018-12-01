import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReadUsersComponent } from './read-users/read-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';


const routes: Routes = [
	{ path: 'listusers', component: ReadUsersComponent },
	{ path: 'edit/:id', component: EditUserComponent },
	{ path: '', redirectTo: '/listusers', pathMatch: 'full' },
];

@NgModule({
	exports: [ RouterModule ],
	imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
