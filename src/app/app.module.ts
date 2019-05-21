import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ResultComponent } from './result/result.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
	declarations: [
		AppComponent,
		CalendarComponent,
		ResultComponent,
		ModalComponent
	],
	imports: [
		BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
