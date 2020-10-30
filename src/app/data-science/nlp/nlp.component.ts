import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nlp',
  templateUrl: './nlp.component.html',
  styleUrls: ['./nlp.component.scss']
})
export class NlpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
        /**
    *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
    *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    alert('HIII');
    var disqus_config = function () {
    this.page.url = 'http://localhost:4200/What%20is%20Machine%20Learning%3F';  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = 'ml'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };

   (function() { // DON'T EDIT BELOW THIS LINE
   var d = document, s = d.createElement('script');
   s.src = 'https://http-localhost-4200-kcybsh6smr.disqus.com/embed.js';
   s.setAttribute('data-timestamp', 'new Date()');
   (d.head || d.body).appendChild(s);
   })();
  }

}
