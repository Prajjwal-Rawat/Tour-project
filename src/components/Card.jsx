import { useState } from "react";



function Card({image,price,name,description,id,removeCard}){

    const [showMore, setShowMore] = useState(true);

    const Discription = showMore ?  `${description.substring(0,200)}...` : description;

    function seeMore(){
       setShowMore(!showMore);
    }
   return(
       <div>
          <img src={image} className="w-[300px] h-[300px]" />
          <div className="tour-card">
            <div className="tour-Details">
            <p>₹{price}</p>
            <p>{name}</p>
            </div>

            <div className="discription">
             <p>
                {Discription}
                <span onClick={seeMore} className="text-blue-700 cursor-pointer" >{showMore ? 'Show More' : 'Show Less'}</span>
            </p>
            </div>
          </div>
          <button onClick={() => {removeCard(id)}}>Not Interseted</button>
       </div>
   )
}

export default Card;