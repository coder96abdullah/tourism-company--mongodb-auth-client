
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const UpdateTouristSpot = () => {
    const ds=useLoaderData();
    const [d,setDatas]=useState(ds)
    
    const handleUpdateSpot = event => {
        event.preventDefault();

        const form = event.target;

        const spotName = form.spotName.value || d.spotName;
        const countryName = form.countryName.value || d.countryName;
        const location = form.location.value || d.location;
        const averageCost = form.averageCost.value ||d.averageCost;
        const seasonality = form.seasonality.value ||d.seasonality;
        const travelTime = form.travelTime.value ||d.travelTime;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value ||d.totalVisitorsPerYear;
        const shortDescription = form.shortDescription.value ||d.shortDescription;
       
        const photo = form.photo.value || d.photo;
    
        const newSpot = { 
            spotName, 
            countryName, 
            location, 
            averageCost, 
            seasonality, 
            travelTime, 
            totalVisitorsPerYear, 
            shortDescription,  
            photo 
        };
     
    

        fetch(`http://localhost:5000/tourists/${d._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
        .then(res => res.json())
        // insertedId
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                form.reset();
                setDatas(newSpot);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'There was an issue adding the tourist spot.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        });
    };
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold text-center pb-5 border-b-2 mb-5">Update Tourist Spot</h2>
        <form onSubmit={handleUpdateSpot}>
            {/* Form name and country row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Tourist Spot Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="spotName" placeholder={d.spotName} className="input input-bordered w-full"  />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Country Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="countryName" placeholder={d.countryName} className="input input-bordered w-full"  />
                    </label>
                </div>
            </div>
            {/* Form location and cost row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Location</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="location" placeholder={d.location} className="input input-bordered w-full"  />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Average Cost</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="averageCost" placeholder={d.averageCost} className="input input-bordered w-full"  />
                    </label>
                </div>
            </div>
            {/* Form seasonality and travel time row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Seasonality</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="seasonality" placeholder={d.seasonality} className="input input-bordered w-full"  />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Travel Time</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="travelTime" placeholder={d.travelTime} className="input input-bordered w-full"  />
                    </label>
                </div>
            </div>
            {/* Form total visitors and description row */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Total Visitors Per Year</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="totalVisitorsPerYear" placeholder={d.totalVisitorsPerYear} className="input input-bordered w-full"  />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Short Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="shortDescription" placeholder={d.shortDescription} className="input input-bordered w-full"  />
                    </label>
                </div>
            </div>
         
            {/* Form photo URL row */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder={d.photo} className="input input-bordered w-full"  />
                    </label>
                </div>
            </div>
            {/* Submit button */}
            <div className="flex items-center">
                <input type="submit" value="Update" className="btn p-5 rounded-lg bg-slate-500 w-1/3 mx-auto text-white" />
            </div>
        </form>
    </div>
    );
};

export default UpdateTouristSpot;