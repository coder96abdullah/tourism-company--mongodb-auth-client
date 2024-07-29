import React from 'react';
import { Link } from 'react-router-dom';
const Towns = () => {
    const countryData=[
        {
            photo:"https://i.ibb.co/KD2H7mq/download-3.jpg",
            countryName:'bangladesh',
            description:"beautifull country "
        },
        {
            photo:"https://i.ibb.co/chF60sy/download-5.jpg",
            countryName:'Thailand',
            description:"beautifull country "
        },
        {
            photo:"https://i.ibb.co/pL5wW88/download-6.jpg",
            countryName:'Indonesia',
            description:"beautifull country "
        },
        {
            photo:"https://i.ibb.co/tbFKpVp/download-7.jpg",
            countryName:' Malaysia',
            description:"beautifull country "
        },
        {
            photo:"https://i.ibb.co/pL5wW88/download-6.jpg",
            countryName:'Vietnam',
            description:"beautifull country "
        },
        {
            photo:"https://i.ibb.co/tbFKpVp/download-7.jpg",
            countryName:'Cambodia',
            description:"beautifull country "
        },
    ]
    return (
        <div>
            <div className='grid grid-cols-3 '>
                {
                    countryData.map((cdata,idx)=>
                        <Link key={idx} to={`/countryList/${cdata.countryName}`}>
                        <div className='relative border-8 border-orange-200 rounded-3xl ' >
                        <img src={cdata.photo} className='w-full h-[300px] ' alt="country photo" />
                        <div className='absolute top-1/2 left-1/3'>
                        <h1 className='text-red-800 shadow-slate-900 font-bold text-xl'>{cdata.countryName}</h1>  
                        </div>
                    </div> 
                    </Link>
                    )
                }
               

            </div>
        </div>
    );
};

export default Towns;