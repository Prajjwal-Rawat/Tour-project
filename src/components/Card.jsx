


function Card({image,price,name,description,id,removeCard}){
   return(
       <div>
          <img src={image} className="w-[300px] h-[300px]" />
          <div className="tour-card">
            <div className="tour-Details">
            <p>₹{price}</p>
            <p>{name}</p>
            </div>

            <div className="discription">
             <p>{description}</p>
            </div>
          </div>
          <button onClick={() => {removeCard(id)}}>Not Interseted</button>
       </div>
   )
}

export default Card;