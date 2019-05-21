import { Injectable } from '@angular/core';
import { Response, Http, Headers } from '@angular/http';

@Injectable({
	providedIn: 'root'
})

export class PostService {
	posts = [];
	constructor(private http: Http) {}

	// Get Post Data Function
  	getPosts = (start, end) => {
		//console.log(start, end, 'start, end');
	    this.http.get("https://skilldeer.com/calendar/list", {
			params: {
				start,
				end
			}
		}).subscribe(
	        (res: Response) => {
	            this.posts = res.json();
	        }
	    )
	}
}
