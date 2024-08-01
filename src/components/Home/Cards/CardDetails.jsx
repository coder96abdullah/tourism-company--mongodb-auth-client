import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const datas=useLoaderData();
    const { spotName, 
        countryName, 
        location, 
        averageCost, 
        seasonality, 
        travelTime, 
        totalVisitorsPerYear,
        shortDescription, 
        photo } = datas;
    return (
        <div className='my-10 h-screen'>
            <div className='flex gap-2 border-2 rounded-lg p-10'>
                <div className='flex-1'>
                   <img className='w-[100%] h-full rounded-lg' src={photo}alt="" />
                </div>
                <div className='flex-1 space-y-3 border-2 pl-10 rounded-lg pt-5'>
                    <h3 className='text-4xl font-bold'>{spotName}</h3>
                    <h4 className='text-xl font-bold text-gray-600'>{shortDescription}</h4>
                    
                        <p className='font-bold'>Location : {location}</p>
                        <p className='font-bold'>Country Name : {countryName}</p>
                    

                    
                        <p className='font-bold'>Average Cost : {averageCost}/per person</p>
                        <p className='font-bold'>Seasonality : {seasonality}</p>
                    

                    
                        <p className='font-bold'>Travel Time : {travelTime} & nights</p>
                        <p className='font-bold'>Total Visitor Per Year : {totalVisitorsPerYear}</p>
                    
                </div>
            </div>
           
        </div>
    );
};

export default CardDetails;