import { useState } from "react";



function Card({image,price,name,description,id,removeCard}){

    const [showMore, setShowMore] = useState(true);

    const Discription = showMore ?  `${description.substring(0,200)}...` : description;

    function seeMore(){
       setShowMore(!showMore);
    }
   return(
       <div className="w-[400px] h-max m-4 p-3 flex flex-col border-2 border-dotted shadow-lg shadow-slate-700 hover:shadow-gray-950">
          <img src={image} className="w-[371px] h-[317px]" />
          <div>
            <div>
            <p>₹{price}</p>
            <p>{name}</p>
            </div>

            <div>
             <p>
                {Discription}
                <span onClick={seeMore} className="text-blue-700 cursor-pointer" >{showMore ? 'Show More' : 'Show Less'}</span>
            </p>
            </div>
          </div>
          <button className="border-2 mt-3 p-2 rounded-md hover:bg-green-700">Interseted</button>
          <button className="border-2 mt-3 p-2 rounded-md hover:bg-red-600" onClick={() => {removeCard(id)}}>Not Interseted</button>
       </div>
   )
}

export default Card;