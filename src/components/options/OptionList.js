import React from "react";
import Option from "./Option";

const OptionList = (props) => {

    return (
        <>  
            <Option item="Fast" />
            <Option item="Cheap" />
            <Option item="Great" />
            <Option item="Free" />
            <a href="#" onClick={() => console.log('limpar...')}>Clear</a>
        </>
    )
}

export default OptionList;