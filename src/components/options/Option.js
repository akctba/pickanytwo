import React from "react";

const Option = (props) => {

    return (
        <>  
            <input type="checkbox" id={props.item} name={props.item}/>
            <label htmlFor={props.item}>{props.item}</label>
        </>
    )
}

export default Option;