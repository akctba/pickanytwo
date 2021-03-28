/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { Box, Text } from 'grommet';

import { useTranslation } from 'react-i18next';

import { OptionContext } from '../../context/Context';

const Result = (props) => {

    const { state } = useContext(OptionContext);

    const { t } = useTranslation();

    return (
        !!state.selected && state.selected.length >= 2
        ?<Box width="xlarge" background="dark-2" align="center" round margin="small">
            <Text size="xlarge" margin="small">{t(state.message)}</Text>
        </Box>
        :''
    )
}

export default Result;