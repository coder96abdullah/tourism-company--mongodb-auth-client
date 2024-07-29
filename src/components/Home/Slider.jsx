
import 'animate.css';

const Slider = () => {
  const slideText=<>
  <div className='absolute top-2/4 right-1/4'>
      <p className='text-orange-400 text-7xl animate__animated animate__fadeInDown'>Travel & Adventures</p>
      <p className='text-white text-3xl  animate__animated animate__fadeInUp text-center'>Where Would You Like To Go?</p>
      </div>
  </>
    return (
        <div className='py-10'>
          <div className="carousel w-full h-[700px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img
      src="https://i.ibb.co/pL5wW88/download-6.jpg"
      className="w-full" />
      {/* <div className='absolute top-2/4 right-1/4'>
      <p className='text-orange-400 text-7xl animate__animated animate__fadeInDown'>Travel & Adventures</p>
      <p className='text-white text-3xl  animate__animated animate__fadeInUp text-center'>Where Would You Like To Go?</p>
      </div> */}
    {
      slideText
    }
     
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co/tbFKpVp/download-7.jpg"
      className="w-full" />
      {
        slideText
      }
      
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full ">
    <img
      src="https://i.ibb.co/KD2H7mq/download-3.jpg"
      className="w-full" />
      {
        slideText
      }
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full ">
    <img
      src="https://i.ibb.co/chF60sy/download-5.jpg"
      className="w-full" />
      {
        slideText
      }
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Slider;