

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
 
  const [cardDatas,setCardData]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/tourists')
    .then(res=>res.json())
    .then(data=>setCardData(data))
  },[])

  // fetch('http://localhost:5000/tourists')
  // .then(res=>res.json())
  // .then(data=>setCardData(data))
  
  // console.log(cardDatas);
    return (
        <div className='py-20'>
         <div className='pb-20'>
         <h2 className='text-orange-800 text-3xl text-center font-bold font-serif'>Featured tours</h2>
            <p className='text-7xl text-center'>Most Popular Tours</p>
         </div>
             <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
      {
        cardDatas.map(card=>
          <SwiperSlide key={card._id}>
          <div className="card bg-base-100 w-96 shadow-xl">
    <figure className='h-[200px]'>
      <img
        src={card.photo}
        alt="Shoes" 
         />
    </figure>
    <div className="card-body">
      
      <h2 className="card-title">{card.spotName}</h2>
     
      
      <p className='text-left text-gray-700 text-sm'><span className='text-red-900 font-bold text-lg'>${card.averageCost}</span> /per person</p>
      <p className='bg-orange-100 rounded-lg py-1'> {card.travelTime} + {card.location}</p>
      
      <div className="card-actions justify-center">
      <Link to={ `/carddetails/${card._id}`}>
      <button className="btn btn-primary my-3">View Details</button>
       </Link>
        
      </div>
    </div>
  </div>
          </SwiperSlide>
        )
      }
        
      </Swiper>
        </div>
    );
};

export default Cards;