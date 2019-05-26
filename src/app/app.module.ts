import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
import { ResultComponent } from './result/result.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDetailComponent } from './modal-detail/modal-detail.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
	declarations: [
		AppComponent,
		CalendarComponent,
		ResultComponent,
		ModalComponent,
		ModalDetailComponent,
		DetailComponent
	],
	imports: [
		BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot()
	],
	providers: [
		NgbActiveModal
	],
	bootstrap: [AppComponent],
	entryComponents: [
    	ModalDetailComponent
    ]
})

export class AppModule { }
