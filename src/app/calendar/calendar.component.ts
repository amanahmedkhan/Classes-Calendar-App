import { Component } from '@angular/core';
import { PostService } from './../post.service';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent {

	constructor(private postService: PostService) { }
	calender = {
		startDate: '',
		endDate: ''
	}
}
