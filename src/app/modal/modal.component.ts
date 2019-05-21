import { Component, OnInit, Input } from '@angular/core';
import { PostService } from './../post.service';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

	// ngModal
	@Input() show = false;
	@Input() customClass = '';
	@Input() closeCallback = () => (false);
	
	constructor(private postService: PostService) { }

	ngOnInit() {
	}
}
