import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Friend = () => {
    const gift = useContext(AssetContext);
    return (
        <div className='p-6 rounded-lg shadow-md border-orange-300 border my-2'>
            <h3>Friend</h3>
            <p>has: {gift}</p>
        </div>
    );
};

export default Friend;