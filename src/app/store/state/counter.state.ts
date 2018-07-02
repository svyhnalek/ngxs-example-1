import { Increment, Decrement, Reset } from './../action/counter.action';
import { State, Selector, Action } from '@ngxs/store';

@State<number>({
  name: 'counter',
  defaults: 0
})
export class CounterState {
  @Selector()
  static counter(state) {
    return state.counter;
  }

  @Action(Increment)
  increment({ getState, setState }) {
    setState(getState() + 1);
  }

  @Action(Decrement)
  decrement({ getState, setState }) {
    const val = getState();
    const res = val >= 1 ? val - 1 : 0;

    setState(res);
  }

  @Action(Reset)
  reset({ setState }) {
    setState(0);
  }
}
