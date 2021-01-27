import React, { useContext } from "react";
import { Box, Button, Text } from 'grommet';
import { Refresh } from 'grommet-icons';

import { useTranslation } from 'react-i18next';

import { OptionContext } from '../../context/Context';
import Option from "./Option";

const OptionList = (props) => {

    const { state, dispatch } = useContext(OptionContext);
    const { t } = useTranslation();
    
    return (
        <>
            <Box background="dark-2" round width="large" align="center" direction="row">
                {(!!state.options) ? state.options.map((item, i) => <Option label={item} key={i}/> ) : <Text>{t('no-options')}</Text> }
            </Box>
            
            <Box align="center" margin="small">
                <Button hoverIndicator="light-1" 
                    icon={<Refresh />}
                    size="small"
                    onClick={() => dispatch({type: "CLEAR"})} 
                    {...props}
                    label={t("Clear")} />
            </Box>
        </>
    )
}

export default OptionList;