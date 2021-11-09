import { useStore,actions} from "./store";
import {useRef} from 'react' 
function App() {
  const [state,dispatch]=useStore()
  const {todos,todoInput}=state
  const inputRef=useRef()
  const handleAdd=()=>{
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }
  return (
    <div>
      <h1>Hello</h1>
      <input
        placeholder='Enter todo...'
        value={todoInput}
        onChange={e=>{
          dispatch(actions.setTodoInput(e.target.value))
        }}
        ref={inputRef}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo,index)=>
        <li key={index}>
          {todo}
          <span onClick={()=>dispatch(actions.deleteTodo(index))}>&times;</span>
        </li>)
      }
    </div>
  );
}

export default App;
