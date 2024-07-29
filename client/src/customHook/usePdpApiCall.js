import React from "react";

import axios from "axios";
import Pdp from "../components/Pdp";

function usePdpApiCall(api) {
    const [pdpData, setPdpData] = React.useState({});
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(api);
            setPdpData(response.data);
            //console.log("response", response);
            console.log("pdpData", pdpData);
        } catch (error) {
            setError(error);
        }
        };
    
        fetchData();
    }, [api,pdpData]);
    return {
        pdpData,
        error
    };
}

export default usePdpApiCall;