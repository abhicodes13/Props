import './App.css'

export default function App() {
  const planets = [
  { name: "Mars", isGasPlanet: false },
  { name: "Earth", isGasPlanet: false },
  { name: "Jupiter", isGasPlanet: true },
  { name: "Venus", isGasPlanet: false },
  { name: "Neptune", isGasPlanet: true },
  { name: "Uranus", isGasPlanet: true },
];
  return(
    <div>
      {planets.map((planet,key)=> (planet.isGasPlanet && <h1>{planet.name}</h1>))}
      </div>
  )
}
