import Card from "./Card";


function Cards({Tours}){
   return(
    <div className="flex flex-row gap-2 py-10 mr-3 justify-around">
        <Card image = {Tours[0].image} price = {Tours[0].price} name ={Tours[0].name} description = {Tours[0].description} id = {Tours[0].id} />
        <Card image = {Tours[1].image} price = {Tours[1].price} name ={Tours[1].name} description = {Tours[1].description} id = {Tours[1].id}/>
        <Card image = {Tours[2].image} price = {Tours[2].price} name ={Tours[2].name} description = {Tours[2].description} id = {Tours[2].id}/>
        <Card image = {Tours[3].image} price = {Tours[3].price} name ={Tours[3].name} description = {Tours[3].description} id = {Tours[3].id}/>
        <Card image = {Tours[4].image} price = {Tours[4].price} name ={Tours[4].name} description = {Tours[4].description} id = {Tours[4].id}/>
        <Card image = {Tours[5].image} price = {Tours[5].price} name ={Tours[5].name} description = {Tours[5].description} id = {Tours[5].id}/>
        <Card image = {Tours[6].image} price = {Tours[6].price} name ={Tours[6].name} description = {Tours[6].description} id = {Tours[6].id}/>
        <Card image = {Tours[7].image} price = {Tours[7].price} name ={Tours[7].name} description = {Tours[7].description} id = {Tours[7].id}/>
    </div>
  )
}

export default  Cards;