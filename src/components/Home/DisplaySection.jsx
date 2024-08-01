import React from 'react';

const DisplaySection = () => {
    return (
        <div>
            <div className='py-10 pb-20'>
            <h2 className='text-orange-800 text-3xl text-center font-bold font-serif'>Destination Lists</h2>
            <p className='text-7xl text-center'>Go Exotic Places</p>
            </div>
            
            <div className='grid grid-cols-4 gap-2'>
              <img className='w-full h-[300px] rounded-xl' src="https://i.ibb.co/tpDQLpS/s3.jpg" alt="image-01" />
              <img className='col-span-2 w-full h-[300px] rounded-xl' src="https://i.ibb.co/TbkDk9H/s2.jpg" alt="image-02" />
              <img className='w-full h-[300px] rounded-xl' src="https://i.ibb.co/6gMY1P3/s1.jpg" alt="image-03" />
              <img className='col-span-2 w-full h-[300px] rounded-xl' src="https://i.ibb.co/CJvpv4k/s4.jpg" alt="image-04" />
              <img className='col-span-2 w-full h-[300px] rounded-xl' src="https://i.ibb.co/bb1SYhM/c3.jpg" alt="image-05" />  

            </div>
        </div>
    );
};

export default DisplaySection;