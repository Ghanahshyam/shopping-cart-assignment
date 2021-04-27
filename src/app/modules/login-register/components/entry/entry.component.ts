import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd, ActivationStart, Data, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'sb-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit, OnDestroy {
  
  page:string;
  private pageSubscriptions$ = new Subscription();

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    let pageInitSub$ = this.route.url.subscribe(() => {
      this.page =  this.route.snapshot.firstChild.data['page'];
    });

    let pageStreamSub$ = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.page = this.route.snapshot.firstChild.data['page'];
      }
    });

    this.pageSubscriptions$.add(pageInitSub$);
    this.pageSubscriptions$.add(pageStreamSub$);
  }

  ngOnDestroy() {
    this.pageSubscriptions$.unsubscribe();
  }

}
