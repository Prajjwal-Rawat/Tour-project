import Card from "./Card";


function Cards({Tours, removeCard}){
   


   return(

        <div className="flex justify-center flex-wrap max-w-[1300px] m-auto">
            {
                Tours.map((tour) => {
                    return <Card key={tour.id} {...tour} removeCard = {removeCard}/>
                })
            }
        </div>
  )
}

export default  Cards;