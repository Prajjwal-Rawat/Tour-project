import { useState } from "react"
import Cards from "./components/Cards"
import { Places } from "./Data"


function App() {
   
  const [places, setPlaces] = useState(Places);


  function removeCard(id){
    const newCards = places.filter(place => place.id !== id)
    setPlaces(newCards);
  }

  return (
    <>
      <div className="flex items-center justify-center ">
        <h1 className="border-2 border-dotted text-blue-700 text-center text-2xl">Tour With Traveli</h1>
        <Cards Tours={places} removeCard = {removeCard} />
      </div>
    </>
  )
}

export default App
