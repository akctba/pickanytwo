import React, { useState, useContext, useLayoutEffect } from "react";
import { Box, Text } from 'grommet';

import { OptionContext } from '../../context/Context';

const Result = (props) => {

    const { state } = useContext(OptionContext);

    const [answer, setAnswer] = useState('');

    useLayoutEffect(() => {
        if (state.selected.includes('Fast') && state.selected.includes('Cheap')) {
            setAnswer('probably it will be careless or incomplete.');
        } else if (state.selected.includes('Fast') && state.selected.includes('Free')) {
            setAnswer('trash.');
        } else if (state.selected.includes('Fast') && state.selected.includes('Great')) {
            setAnswer('you get what you paid for. It won\'t be cheap.');
        } else if (state.selected.includes('Free') && state.selected.includes('Great')) {
            setAnswer('better you double check or do it yourself.');
        } else if (state.selected.includes('Great') && state.selected.includes('Cheap')) {
            setAnswer('it will not be fast.');
        } else if (state.selected.includes('Free') && state.selected.includes('Cheap')) {
            setAnswer('does that do anything?');
        } else {
            setAnswer('');
        }

    }, [state.selected])

    return (
        !!state.selected && state.selected.length >= 2
        ?<Box width="large" background="dark-2" align="center" round margin="small">
            <Text margin="small">{`${state.selected[0]} and ${state.selected[1]}: ${answer}`}</Text>
        </Box>
        :''
    )
}

export default Result;