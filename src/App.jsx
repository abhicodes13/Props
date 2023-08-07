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

const Job=(props)=>
  (
    <div>
     <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  )