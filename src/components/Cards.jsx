import Card from "./Card";


function Cards({Tours, removeCard}){
   


   return(

        <div className="flex items-center justify-center flex-wrap max-w-[1300px] m-auto">
            {
                Tours.map((tour) => {
                    return <Card {...tour} removeCard = {removeCard}/>
                })
            }
        </div>
  )
}

export default  Cards;