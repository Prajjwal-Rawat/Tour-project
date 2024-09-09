import Cards from "./components/Cards"
import { Places } from "./Data"


function App() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <h1 className="border-2 border-dotted text-blue-700 text-center text-2xl">Tour With Traveli</h1>
        <Cards Tours={Places} />
      </div>
    </>
  )
}

export default App
