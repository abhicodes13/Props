import './App.css'

export default function App() {
  return (
    <main>
    <Job salary={90000} position = 'Senior Engineer' company = 'amazon'/>
    <Job salary={45000} position = 'Junior Engineer' company = 'google'/>
    <Job salary={190000} position = 'Senior Dev' company = 'netflix'/>
    </main>
  )
}

const Job=(pr)=>
  (
    <div>
     <h1>{pr.salary}</h1>
      <h1>{pr.position}</h1>
      <h1>{pr.company}</h1>
    </div>
  )