import React from 'react';
import {Box, Text, Grommet, Heading} from 'grommet';
import OptionList from './components/options/OptionList';

import { OptionProvider } from './context/Context';
import Result from './components/result/Result';

const theme = {
    global: {
        font: {
            family: 'Roboto',
            size: '18px',
            height: '20px'
        }
    }
};

function App() {
    return (
        <Grommet full
            theme={theme}>
            <header className="App-header">

                <Box fill={true}
                    background="dark-1"
                    align="center">


                    <Box align="center">
                        <Text>Thinking about hiring a project, job or service?</Text>
                        <Heading level={2}>How do you want it done?</Heading>
                    </Box>

                    <OptionProvider>
                        {/* OPTIONS */}
                        <OptionList/> 
                        
                        
                        {/* RESULT */}
                        <Result />

                    </OptionProvider>

                    {/* ADDS */} 

                  </Box>
            </header>
        </Grommet>
    );
}

export default App;
