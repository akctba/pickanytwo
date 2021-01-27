import React, { useContext } from "react";
import { Box, Button, Text } from 'grommet';
import { Refresh } from 'grommet-icons';

import { OptionContext } from '../../context/Context';
import Option from "./Option";

const OptionList = (props) => {

    const { state, dispatch } = useContext(OptionContext);
    
    return (
        <>
            <Box background="dark-2" round width="large" align="center" direction="row">
                {(!!state.options) ? state.options.map((item, i) => <Option label={item} key={i}/> ) : <Text>No options</Text> }
            </Box>
            
            <Box align="center" margin="small">
                <Button hoverIndicator="light-1" 
                    icon={<Refresh />}
                    size="small"
                    onClick={() => dispatch({type: "CLEAR"})} 
                    {...props}
                    label="Clear" />
            </Box>
        </>
    )
}

export default OptionList;