import { useReducer,useRef } from "react";
// Reducer
// 1. Init state
const initState={
  job:'',
  jobs:[]
}
// 2. Action
const ADD_JOB='add_job'
const SET_JOB='set_job'
const DELETE_JOB='delete_job'

const setJob=payload=>{
  return {
    type:SET_JOB,
    payload
  }
}
const addJob=payload=>{
  return {
    type:ADD_JOB,
    payload
  }
}
const deleteJob=payload=>{
  return {
    type:DELETE_JOB,
    payload
  }
}
// 3. Reducer
const reducer=(state,action)=>{
  console.log('prevState',state)
  let newState
  switch(action.type){
    case SET_JOB:
      newState={
        ...state,
        job:action.payload
      }
      break
    case ADD_JOB:
      newState={
        ...state,
        jobs:[...state.jobs,action.payload]
      }
      break
    case DELETE_JOB:
      let newJobs=[...state.jobs]
      newJobs.splice(action.payload,1)
      newState={
        ...state,
        jobs:newJobs
      }
      break
    default:
        throw new Error('Invalid action')
  }
  console.log('newState',newState)
  return newState
}
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
