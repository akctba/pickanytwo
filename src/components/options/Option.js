import React, { useContext } from "react";
import { Box, Text, CheckBox } from 'grommet';

import { OptionContext } from '../../context/Context';

import { useTranslation } from 'react-i18next';

const Option = (props) => {

    const {state, dispatch} = useContext(OptionContext);
    const isChecked = state.selected.includes(props.label);
    const { t } = useTranslation();

    const verifyThird = (third) => {
        if(!isChecked && state.selected.length === 2) {
            if (state.selected.includes('Fast') && state.selected.includes('Cheap') && third==='Great') {
                alert(t('Fast-Cheap-Great'));
            } else if (state.selected.includes('Fast') && state.selected.includes('Free') && third === 'Great') {
                alert(t('Fast-Free-Great'));
            }
        }
    }

    return (
        <Box width="small" flex={false} key={props.label}
            background={isChecked?"status-ok":"brand"}
            onClick={()=>{dispatch({type: "TOGGLE", item:props.label});verifyThird(props.label);}}
            align="center" round elevation="small" margin="small">
                <Text margin="xxsmall" size="medium"><CheckBox size="small" checked={isChecked} label={t(props.label)} /></Text>
        </Box>
    )
}

export default Option;
