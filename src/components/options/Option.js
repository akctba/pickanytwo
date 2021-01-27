import React, { useContext } from "react";
import { Box, Text, CheckBox } from 'grommet';

import { OptionContext } from '../../context/Context';

const Option = (props) => {

    const {state, dispatch} = useContext(OptionContext);
    const isChecked = state.selected.includes(props.label);

    return (
        <Box width="small" 
            background={isChecked?"status-ok":"brand"}
            onClick={()=>{dispatch({type: "TOGGLE", item:props.label})}}
            align="center" round elevation="small" margin="small">
                <Text margin="small"><CheckBox checked={isChecked} label={props.label} /></Text>
        </Box>
    )
}

export default Option;