import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import {Box, Text, Grommet, Heading, Header, Anchor, Nav} from 'grommet';
//import { Projects } from 'grommet-icons';
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

function PickApp() {

    const { t, i18n } = useTranslation();

    //console.log("i18n >>", i18n);

    return (
        <Grommet full theme={theme}>
            {/* <Header pad="small" height="xxsmall" background="dark-1">
              <Anchor
                  href="https://tools.grommet.io/"
                  icon={<Projects />}
                  label="Thinking about hiring a project, job or service?"
                />
                <Nav direction="row">
                  <Anchor label="Profile" href="#" />
                </Nav>
            </Header> */}

                <Box fill={true}
                    background="dark-1"
                    align="center">

                    <Box align="center">
                        <Text>{t('title1')}</Text>
                        <Heading level={2}>{t('title2')}</Heading>
                    </Box>

                    <OptionProvider>
                        <OptionList/> 
                        
                        <Result />
                    </OptionProvider>

                    {/* ADDS */} 
                    
                  </Box>
        </Grommet>
    );
}

function App() {
    return (
        <Suspense fallback="loading...">
          <PickApp />
        </Suspense>
      );
}

export default App;
