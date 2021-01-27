import React, { useContext } from "react";
import { Box, Text, CheckBox } from 'grommet';

import { OptionContext } from '../../context/Context';

const Option = (props) => {

    const {state, dispatch} = useContext(OptionContext);
    const isChecked = state.selected.includes(props.label);

    const verifyThird = (third) => {
        if(!isChecked && state.selected.length === 2) {
            if (state.selected.includes('Fast') && state.selected.includes('Cheap') && third==='Great') {
                alert('Utopia, impossible!');
            } else if (state.selected.includes('Fast') && state.selected.includes('Free') && third === 'Great') {
                alert('Go away!');
            }
        }
    }

    return (
        <Box width="small" 
            background={isChecked?"status-ok":"brand"}
            onClick={()=>{dispatch({type: "TOGGLE", item:props.label});verifyThird(props.label);}}
            align="center" round elevation="small" margin="small">
                <Text margin="small"><CheckBox checked={isChecked} label={props.label} /></Text>
        </Box>
    )
}

export default Option;
