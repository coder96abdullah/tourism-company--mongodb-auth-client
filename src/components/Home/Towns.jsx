import React from 'react';
import { Link } from 'react-router-dom';
const Towns = () => {
    const countryData=[
        {
            photo1:"https://i.ibb.co/KD2H7mq/download-3.jpg",
            photo2:"https://i.ibb.co/nMvZtYf/b1.jpg",
            photo3:"https://i.ibb.co/mF4WWdf/b4.jpg",
            photo4:"https://i.ibb.co/MBq3WPz/b3.jpg",
            countryName:'Bangladesh',
            description:"beautifull country "
        },
        {
            photo1:"https://i.ibb.co/BNsshwL/t4.jpg",
            photo2:"https://i.ibb.co/D1YVHNL/t3.jpg",
            photo3:"https://i.ibb.co/cwz4nWB/t2.jpg",
            photo4:"https://i.ibb.co/k9DDn13/t1.jpg",
            countryName:'Thailand',
            description:"beautifull country "
        },
        {
            photo1:"https://i.ibb.co/3WrmtcV/i4.jpg",
            photo2:"https://i.ibb.co/0tyv23X/i3.jpg",
            photo3:"https://i.ibb.co/BccYJRx/i2.jpg",
            photo4:"https://i.ibb.co/nLtrLRB/i1.jpg",
            countryName:'Indonesia',
            description:"beautifull country "
        },
        {
            photo1:"https://i.ibb.co/w4mMd94/m3.jpg",
            photo2:"https://i.ibb.co/JynXWhK/m4.jpg",
            photo3:"https://i.ibb.co/HpZrrqx/m2.jpg",
            photo4:"https://i.ibb.co/58HvfvN/m1.jpg",
            countryName:' Malaysia',
            description:"beautifull country "
        },
        {
            photo1:"https://i.ibb.co/nMz5qgZ/v4.jpg",
            photo2:"https://i.ibb.co/7GxdFx4/v3.jpg",
            photo3:"https://i.ibb.co/7GxdFx4/v3.jpg",
            photo4:"https://i.ibb.co/r42QSt9/v1.jpg",
            countryName:'Vietnam',
            description:"beautifull country "
        },
        {
            photo1:"https://i.ibb.co/jMPy71B/c4.jpg",
            photo2:"https://i.ibb.co/bb1SYhM/c3.jpg",
            photo3:"https://i.ibb.co/dMF4hXT/c2.jpg",
            photo4:"https://i.ibb.co/x8JKWM2/c1.jpg",
            countryName:'Cambodia',
            description:"beautifull country "
        },
    ]
    return (
        <div className='mb-32'>
            <div className='py-10 pb-20'>
            <h2 className='text-orange-800 text-3xl text-center font-bold font-serif'>Countries Lists</h2>
            <p className='text-7xl text-center'>Overview Of Exotic Places</p>
            </div>
            <div className='grid  lg:grid-cols-3 gap-3 '>
                {
                    countryData.map((cdata,idx)=>
                        <Link key={idx} to={`/countryList/${cdata.countryName}`}>
                        <div className='relative '>
                            <div className='grid grid-cols-2 lg:h-[320px] '>
                            <img src={cdata.photo1} className='w-full h-full' alt="country photo" /> 
                            <img src={cdata.photo2} className='w-full h-full' alt="" />
                            <img src={cdata.photo3} className='w-full h-full' alt="" />
                            <img src={cdata.photo4} className='w-full h-full' alt="" />
                            </div>
                        
                        <div className='absolute top-1/2 left-1/3 bg-white px-3'>
                        <h1 className='text-orange-500 shadow-slate-900 font-bold text-xl'>{cdata.countryName}</h1>  
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