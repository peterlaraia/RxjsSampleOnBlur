import {Component, NgModule, ElementRef, ViewChild} from '@angular/core'
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'

import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('searchInput') inputEl: ElementRef;
  valueOnBlur: string;
  searchForm: FormGroup;
  constructor() {
    this.valueOnBlur = 'JIMMY';
    this.searchForm = new FormGroup({
      'name': new FormControl('Alice')
    });
  }
  
  ngAfterViewInit(): void {
    console.log(this.inputEl);
    this.searchForm.get('name').valueChanges
    .sample(Observable.fromEvent(this.inputEl.nativeElement, 'blur'))
    .subscribe((change: any) => this.valueOnBlur = change);
    
    //Observable.fromEvent(this.inputEl.nativeElement, 'blur').subscribe(() => console.log('BLURRED'));
    //Observable.of('Boogers').subscribe((val: any) => console.log(val));
    
  }
}
