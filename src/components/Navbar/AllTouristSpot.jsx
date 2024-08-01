import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllTouristSpot = () => {
    const datas = useLoaderData();
    const [spotd,setSpotd]=useState(datas);
 const handleSort=()=>{
  const sortedSpots = [...spotd].sort((a, b) => a.averageCost - b.averageCost);
        setSpotd(sortedSpots);
 }
    return (
        <div>

        <div className='flex justify-center my-5 '>
          <button onClick={handleSort}  className='btn btn-success w-[150px] text-white font-bold text-lg'>Sort</button>
        </div>

  <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
  {
                spotd.map(d => 
                    <div key={d._id} className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
    className='w-[100%] h-[250px]'
      src={d.photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl">{d.spotName}</h2>
    
    <p className='font-bold text-green-600 text-sm'><span className='text-red-700 text-base'>Seasonality :</span> {d.seasonality}</p>
    <p className='font-bold text-green-600 text-sm'><span className='text-red-700 text-base'>Average Cost :</span> {d.averageCost}k</p>
    <p className='font-bold text-green-600 text-sm'><span className='text-red-700 text-base'>Travel Time :</span> {d.travelTime} & nights</p>
    <p className='font-bold text-green-600 text-sm'><span className='text-red-700 text-base'>Total Visitor Per Year :</span> {d.totalVisitorsPerYear}</p>
    <div className="card-actions justify-center">
      <Link to={`/carddetails/${d._id}`}>
      <button className="btn btn-primary">View Details</button>
      </Link>
      
    </div>
  </div>
</div>
                )
            }
  </div>
       
        </div>
    );
};

export default AllTouristSpot;
