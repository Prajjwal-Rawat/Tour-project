


function Card({image,price,name,description,id}){
    
   return(
       <div className="flex flex-col bg-slate-100 shadow-md py-5 px-5 mr-3 gap-2">
          <img src={image} className="w-[300px] h-[300px]" />
          <div>
            <p>₹{price}</p>
            <p>{name}</p>
            <p>{description}</p>
          </div>
          <button  key={id} >Not Interseted</button>
       </div>
   )
}

export default Card;