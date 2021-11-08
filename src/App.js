import React, { useState,useEffect } from 'react';

function App() {
  

  const [jobs,setJobs]=useState(()=>{
    const storeJobs=JSON.parse(localStorage.getItem('jobs'))??[]
    return storeJobs
  })
  const [job,setJob]=useState('')
  const handleSubmit=(e)=>{
    let newJobs=[...jobs,job]
    const jsonNewJobs=JSON.stringify(newJobs)
    localStorage.setItem('jobs',jsonNewJobs)
    setJobs(newJobs)
    setJob('')
  }
  console.log(job)
  return (
    <div style={{padding:32}} >
      <input type='text' 
        value={job}
        onChange={e=>setJob(e.target.value)}
      />
      <button onClick={handleSubmit}> Add</button>
      <ul>
        {jobs.map((item,index)=><li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}
export default App