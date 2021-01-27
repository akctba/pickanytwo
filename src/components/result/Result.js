import React, { useContext } from "react";
import { Box, Text } from 'grommet';

import { OptionContext } from '../../context/Context';

const Result = (props) => {

    const { state } = useContext(OptionContext);

    return (
        !!state.selected && state.selected.length >= 2
        ?<Box width="small"  
        background="dark-2"
        align="center" round margin="small">
            <Text margin="small">Selected: {state.selected}</Text>
        </Box>
        :''
    )
}

export default Result;