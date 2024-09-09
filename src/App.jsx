import { useState } from "react"
import Cards from "./components/Cards"
import { Places } from "./Data"


function App() {
   
  const [places, setPlaces] = useState(Places);


  function removeCard(id){
    const newCards = places.filter(place => place.id !== id)
    setPlaces(newCards);
  }

  if(places.length === 0){
    return(
      <div className="text-center items-center flex justify-center h-[100vh] flex-col"> 
        <h1 className="text-pink-700 text-center">No Tours Left</h1>
        <button onClick={() => setPlaces(Places)} className="border-2 py-1 px-2 mt-2">Refresh</button>
      </div>
    )
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
