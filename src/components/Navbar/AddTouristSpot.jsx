import Swal from 'sweetalert2';

const AddTouristSpot = () => {

    const handleAddTouristSpot = event => {
        event.preventDefault();

        const form = event.target;

        const spotName = form.spotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const shortDescription = form.shortDescription.value;
        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const photo = form.photo.value;
    
        const newSpot = { 
            spotName, 
            countryName, 
            location, 
            averageCost, 
            seasonality, 
            travelTime, 
            totalVisitorsPerYear, 
            shortDescription, 
            userName, 
            userEmail, 
            photo 
        };
     
        console.log(newSpot);

        fetch('https://assignment10-mongodb-auth-server.vercel.app/tourists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                form.reset();
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
            <h2 className="text-3xl font-extrabold text-center pb-5 border-b-2 mb-5">Add a Tourist Spot</h2>
            <form onSubmit={handleAddTouristSpot}>
                {/* Form name and country row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Tourist Spot Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="spotName" placeholder="Tourist Spot Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Country Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="countryName" placeholder="Country Name" className="input input-bordered w-full" required />
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
                            <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Average Cost</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="averageCost" placeholder="Average Cost" className="input input-bordered w-full" required />
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
                            <input type="text" name="seasonality" placeholder="Seasonality (e.g., summer/winter)" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Travel Time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="travelTime" placeholder="Travel Time (e.g., 7/10 days)" className="input input-bordered w-full" required />
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
                            <input type="text" name="totalVisitorsPerYear" placeholder="Total Visitors Per Year" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* Form user information row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-lg">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="userName" placeholder="User Name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-lg">User Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="userEmail" placeholder="User Email" className="input input-bordered w-full" required />
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                {/* Submit button */}
                <div className="flex items-center">
                    <input type="submit" value="Add" className="btn p-5 rounded-lg bg-slate-500 w-1/3 mx-auto text-white" />
                </div>
            </form>
        </div>
    );
};

export default AddTouristSpot;
