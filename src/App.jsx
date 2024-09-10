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
        <h1 className="text-pink-700 text-center font-[600] text-[20px]">No Tours Left</h1>
        <button onClick={() => setPlaces(Places)} className="rounded-md bg-gray-300 text-black py-1 px-4 mt-3 font-[600] shadow-md hover:transition-colors hover:bg-green-700">Refresh</button>
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-bold m-6 text-center border-4 rounded-md py-3 px-4 border-white border-dashed">Tour With Traveli</h1>
        <Cards Tours={places} removeCard = {removeCard} />
      </div>
    </>
  )
}

export default App
