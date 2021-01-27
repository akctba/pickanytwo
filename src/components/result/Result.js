/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useLayoutEffect } from "react";
import { Box, Text, Button } from 'grommet';
import { ShareOption } from 'grommet-icons';

import { useTranslation } from 'react-i18next';

import { OptionContext } from '../../context/Context';

const Result = (props) => {

    const { state } = useContext(OptionContext);

    const [answer, setAnswer] = useState('');

    const { t } = useTranslation();

    useLayoutEffect(() => {
        if (state.selected.includes('Fast') && state.selected.includes('Cheap')) {
            setAnswer(t('Fast-Cheap'));
        } else if (state.selected.includes('Fast') && state.selected.includes('Free')) {
            setAnswer(t('Fast-Free'));
        } else if (state.selected.includes('Fast') && state.selected.includes('Great')) {
            setAnswer(t('Fast-Great'));
        } else if (state.selected.includes('Free') && state.selected.includes('Great')) {
            setAnswer(t('Free-Great'));
        } else if (state.selected.includes('Great') && state.selected.includes('Cheap')) {
            setAnswer(t('Great-Cheap'));
        } else if (state.selected.includes('Free') && state.selected.includes('Cheap')) {
            setAnswer(t('Free-Cheap'));
        } else {
            setAnswer('');
        }

    }, [state.selected])

    return (
        !!state.selected && state.selected.length >= 2
        ?<Box width="large" background="dark-2" align="center" round margin="small">
            <Text size="xlarge" margin="small">{answer}
            <Button icon={<ShareOption />} hoverIndicator onClick={() => {}} />
            </Text>
        </Box>
        :''
    )
}

export default Result;