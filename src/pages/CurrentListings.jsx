
import {useParams} from "react-router-dom"; 

function CurrentListings (){
    const params = useParams() 
    return(
        <div>
            <h1>Look at this house from {params.location}!</h1>
        </div>
    );
}
export default CurrentListings; 