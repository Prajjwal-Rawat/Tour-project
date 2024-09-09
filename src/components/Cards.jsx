import Card from "./Card";


function Cards({Tours, removeCard}){
   


   return(
    <div className="flex flex-row gap-2 py-10 mr-3 justify-around">
        <div>
            {
                Tours.map((tour) => {
                    return <Card {...tour} removeCard = {removeCard}/>
                })
            }
        </div>
    </div>
  )
}

export default  Cards;