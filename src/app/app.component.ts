import { Component, OnInit } from '@angular/core';

import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { CounterState } from './store/state/counter.state';
import { Increment, Decrement, Reset } from './store/action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // First style
  @Select(CounterState) counter1$: Observable<number>;

  // Second style
  @Select(state => state.counter) counter2$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit() {}

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
