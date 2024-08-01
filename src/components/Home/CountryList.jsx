import React, { useState, useEffect } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CountryList = () => {
    const { id } = useParams();
    const countryData = useLoaderData();

    // Debugging to check the data
    console.log("useParams id:", id, typeof id);
    console.log("useLoaderData countryData:", countryData);
    if (countryData && countryData.length > 0) {
        console.log("countryData[0].countryName type:", typeof countryData[0].countryName);
    }

    const [cData, setDatas] = useState([]);

    useEffect(() => {
        if (countryData && id) {
            // Filter and set data when `countryData` or `id` changes
            const filteredData = countryData.filter(dd => dd.countryName.toString() === id.toString());
            setDatas(filteredData);
        }
    }, [countryData, id]);

    console.log("Filtered cData:", cData);

    return (
        <div className='h-screen'>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='font-bold text-base'>
                            <th></th>
                            <th>Spot Name</th>
                            <th>Country Name</th>
                            <th>Location</th>
                            <th>Average Cost</th>
                            <th>Seasonality</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cData.map((d, p) =>
                                <tr key={d._id}>
                                    <th>{p + 1}</th>
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
                                            </div>
                                        </div>
                                    </td>
                                    <td>{d.countryName}</td>
                                    <td>{d.location}</td>
                                    <td>${d.averageCost}</td>
                                    <td>{d.seasonality}</td>
                                    <td>{d.shortDescription}</td>
                                    <th>
                                        <Link to={`/carddetails/${d._id}`}>
                                            <button className="btn btn-success btn-xs">View Details</button>
                                        </Link>
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

export default CountryList;
