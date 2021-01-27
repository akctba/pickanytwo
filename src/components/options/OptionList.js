import React, { useContext } from "react";
import { Box, Button, Text, Grid, ResponsiveContext } from 'grommet';
import { Refresh } from 'grommet-icons';

import { useTranslation } from 'react-i18next';

import { OptionContext } from '../../context/Context';
import Option from "./Option";

// If the size is small, we only see 1 column
// If the size is medium, we only see 2 columns
// If the size is either large or xlarge, we see 3 columns
const columns = {
    small: ['auto'],
    medium: ['auto', 'auto'],
    large: ['auto', 'auto', 'auto', 'auto'],
    xlarge: ['auto', 'auto', 'auto', 'auto'],
};

// If the size is small, we have 3 rows
// If the size is medium, we have 2 rows
// If the size is large or xlarge, we have 1 row
const rows = {
    small: ['auto', 'auto', 'auto', 'auto'],
    medium: ['auto', 'auto'],
    large: ['auto'],
    xlarge: ['auto'],
};

const Responsive = ({
    children,
    overrideColumns,
    overrideRows,
    areas,
    ...props
  }) => (
    <ResponsiveContext.Consumer>
      {size => {
        // Take into consideration if not array is sent but a simple string
        let columnsVal = columns;
        if (columns) {
          if (columns[size]) {
            columnsVal = columns[size];
          }
        }
  
        let rowsVal = rows;
        if (rows) {
          if (rows[size]) {
            rowsVal = rows[size];
          }
        }
  
        // Also if areas is a simple array not an object of arrays for
        // different sizes
        let areasVal = areas;
        if (areas && !Array.isArray(areas)) areasVal = areas[size];
  
        return (
          <Grid
            {...props}
            areas={!areasVal ? undefined : areasVal}
            rows={!rowsVal ? size : rowsVal}
            columns={!columnsVal ? size : columnsVal}
          >
            {children}
          </Grid>
        );
      }}
    </ResponsiveContext.Consumer>
  );

const OptionList = (props) => {

    const { state, dispatch } = useContext(OptionContext);
    const { t } = useTranslation();

    
    
    return (
        <>
            <Box background="dark-2" round width="xlarge" align="center">
                <Responsive gap="small" margin="small" columns="xlarge" rows="small">
                    {(!!state.options) ? state.options.map((item, i) => <Option label={item} key={i}/> ) : <Text>{t('no-options')}</Text> }
                </Responsive>
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