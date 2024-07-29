
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const MyList = () => {
  const datas=useLoaderData();
 const [spots,setSpots]=useState(datas); 
    const handleDeleteSpot=_id=>{
    
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:5000/tourists/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Spot has been deleted.',
                            'success'
                        )
                        const remaining =spots.filter(cof => cof._id !== _id);
                        setSpots(remaining);
                    }
                })

        }
    })
    }
    return (
        <div className='h-screen'>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
        </th>
        <th>Spot Name</th>
        <th>Details</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>

      {
        spots.map((d,p)=>
          <tr key={d._id}>
          <th>
           {p+1}
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={d.photo}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{d.spotName}</div>
                <div className="text-sm opacity-50">{d.countryName}</div>
              </div>
            </div>
          </td>
          <td>
           {d.shortDescription}
            <br />
            <span className="badge badge-ghost badge-sm">{d.travelTime} & night</span>
          </td>
          <th>
              <Link to={`/updateSpot/${d._id}`}>
              <button className="btn btn-ghost btn-xs">Update</button>
              </Link>
            
          </th>
          <th>
            <button onClick={()=>handleDeleteSpot(d._id)} className="btn btn-ghost btn-xs">Delete</button>
          </th>
        </tr>
        )

      }
      
    
    
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyList;