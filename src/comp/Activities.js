import React, {useState, useEffect} from "react";


const Activities = ({token, fetchActivities, activities, setActivities}) => {
    

    console.log(activities);
return(
    <div id='main-activities-div'>
        
        <div id='all-activities'>
        <h1 id='activities-header'>Activities</h1>   
        {
            activities.map(activity => {
                
                return (<div id='activity-div-activities' key={activity.id}>
                        <div id='activity-title-div-activities'>
                        <p className="activity-label-activities">Activity name: </p>
                        <p className="activity-title-activities">{activity.name}</p>
                        </div>
                        <div id='activity-desc-div-activities'>
                        <p className="activity-label-activities">Description: </p>
                        <p className="activity-desc-activities">{activity.description}</p>
                        </div>

                </div>)
            })
        }
    </div>
    </div>

)
}

export default Activities;





// import React, { useEffect, useState } from "react";
// import { fetchFromApi } from "../API";



// const Activities = () => {

//     const [activities, setActivities] = useState([])
    
//     const fetchActivites = async () =>{

//         const data = await fetchFromApi({
//             endPoint: 'activities'
//         })
//         console.log(data)
//         if (data){
//             setActivities(data)
//         }
//         console.log(data)
        
//     }
//     useEffect(() => {
//         fetchActivites();
//       }, []);
//   return (
//     <>
//     <h1>
//     Activities
//       </h1>
//       <div>
//       {activities.length ? (
//         activities.map(({ id, name, description }, idx) => (
//           <div key={id ?? idx}>
//             <h2>{name}</h2>
//             <h3>{description}</h3>
//             <h4>Id:{id}</h4>
//             <br></br>
//           </div>
//         ))
//       ) : (
//         <p>No activities found.</p>
//       )}
//     </div>
//     </>
//   );
// };

// export default Activities;


