import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ReadUsersComponent } from './read-users/read-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [
		AppComponent,
		ReadUsersComponent,
		EditUserComponent
	],
	imports: [
		BrowserModule,
		HttpModule,
		AppRoutingModule,
		FormsModule, ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
