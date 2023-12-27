import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch();
  
  

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <button onClick={()=>dispatch(counterActions.increment({counter}))}>increment </button>
      <button onClick={()=>dispatch(counterActions.decrement({counter}))}>decrement</button>
      <button onClick={()=>dispatch(counterActions.increase(5))}>increase by 5</button>
      <button onClick={()=>dispatch(counterActions.toggle())}>Toggle</button>
    </main>
  );
};

export default Counter;
