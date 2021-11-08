import { useReducer,useRef } from "react";
import reducer,{initState} from "./reducer";
import { addJob,deleteJob,setJob } from "./actions";
function App() {
  const [state,dispatch]=useReducer(reducer,initState)
  const {job,jobs}=state
  const inputRef=useRef()
  const handleSubmit=()=>{
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
  return (
    <div style={{padding:'20px'}}>
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={job}
        onChange={(e)=>dispatch(setJob(e.target.value))}
        placeholder='Enter todo...'
      />
      <button
        onClick={handleSubmit}
      >
        Add
      </button>
      <ul>
        {jobs.map((item,index)=>
          <li key={index}>
            {item}
            <span
              onClick={()=>dispatch(deleteJob(index))}
            >
              &times;
            </span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
