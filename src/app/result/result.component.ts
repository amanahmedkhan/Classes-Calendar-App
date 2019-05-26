import { Component } from '@angular/core';
import { PostService } from './../post.service';
import { formatDate } from './../helpers';
import {DomSanitizer} from '@angular/platform-browser'

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.scss']
})

export class ResultComponent {
    constructor(private postService: PostService, private sanitizer: DomSanitizer) {
    }
    formatDate = formatDate;
  
    async ngOnInit () {
        const currentDate = formatDate(new Date());
        const add7Days = formatDate(new Date(), 7);
        this.postService.getPosts(currentDate, add7Days);
    }

    // ngModal
    showModal = false;
    iframe = this.sanitizer.bypassSecurityTrustResourceUrl('');
    toggleModal = (url) => {
        this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(url)
        this.showModal = !this.showModal;
    }
}