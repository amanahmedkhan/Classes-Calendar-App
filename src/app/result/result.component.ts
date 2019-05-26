import { Component } from '@angular/core';
import { PostService } from './../post.service';

import { formatDate } from './../helpers';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './../modal/modal.component';
import { ModalDetailComponent } from './../modal-detail/modal-detail.component';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})

export class ResultComponent {
    constructor(private postService: PostService, private modalService: NgbModal) {}
    formatDate = formatDate;
  
    async ngOnInit () {
		const currentDate = formatDate(new Date());
		const add7Days = formatDate(new Date(), 7);
        this.postService.getPosts(currentDate, add7Days);
	}

    moreDetail() {
        // const modalRef = this.modalService.open(ModalComponent);
        const modalRef = this.modalService.open(ModalDetailComponent);
        modalRef.componentInstance.title = 'More Detail About Classes';
    }
}
