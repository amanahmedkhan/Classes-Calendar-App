import { Component } from '@angular/core';
import { PostService } from './../post.service';
import { formatDate } from './../helpers';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})

export class ResultComponent {
    constructor(private postService: PostService) {}
    formatDate = formatDate;
  
    async ngOnInit () {
		const currentDate = formatDate(new Date());
		const add7Days = formatDate(new Date(), 7);
        this.postService.getPosts(currentDate, add7Days);
	}

    // ngModal
    showModal = false;
    toggleModal = () => {
        this.showModal = !this.showModal;
    }
}
