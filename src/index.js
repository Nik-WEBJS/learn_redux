import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { titleChanged, deleteTasks, completeTask, getTasks} from "./store/task"
import configureStore from './store/store';

const store = configureStore()

const App = () => {
  const [state, setState] = useState(store.getState()) 

  useEffect(()=>{
    store.dispatch(getTasks())
    store.subscribe(()=>{setState(store.getState())})
  },[])

  const changeTitle = (taskId)=>{
    store.dispatch(titleChanged(taskId)) 
  }

  const deleteTask = (taskId)=>{
    store.dispatch(deleteTasks(taskId))
  }

  return <>
  <h1>app</h1>
 
  <ul>
    {state.map(el=>(
    <li key={el.id}>
      <p>{el.title}</p>
      <p>{`Completed: ${el.completed}`}</p>
      <button onClick={()=>store.dispatch(completeTask(el.id))}>completed</button>
      <button onClick={()=>changeTitle(el.id)}>change title</button>
      <button onClick={()=>deleteTask(el.id)}>delete task</button>
      <hr />
    </li>
    ))}
  </ul>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

