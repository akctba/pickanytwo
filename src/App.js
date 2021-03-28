/* eslint-disable react-hooks/exhaustive-deps */
import React, { Suspense, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Text, Grommet, Header, Anchor, Nav, Menu, Footer } from 'grommet';
import { Projects } from 'grommet-icons';
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

    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        i18n.changeLanguage(language, (err, t) => {
            if (err) return console.log('Something went wrong loading', err);
        });
    }, [language]);

    return (
        <Grommet full theme={theme}>
            <Box fill={true} 
                background="dark-1"
                align="center">

                <Box fill="horizontal">
                    <Header pad="small" height="xxsmall" background="dark-1">
                    <Anchor href="/" icon={<Projects />} />
                        <Nav direction="row">
                            <Menu label={language}
                            items={i18n.languages.map(l => {return {label:l, onClick: () => {setLanguage(l)}}})}
                            />
                        </Nav>
                    </Header>
                </Box>

                <Box fill={true}
                    background="dark-1"
                    align="center">

                    <Box align="center">
                        <Text align="center">{t('title1')}</Text>
                        <Text size="large" align="center">{t('title2')}</Text>
                    </Box>

                    <OptionProvider>
                        <OptionList/> 
                        
                        <Result />
                    </OptionProvider>

                    
                    {/* ADDS */} 

                </Box>
                <Box fill="horizontal">
                    <Footer background="dark-2" pad="medium">
                        <Text>&#169; 2021 Akctba&#8482;</Text>
                        <Text size="xsmall">Detected: {i18n.language} Browser: {navigator.language} </Text>
                        <Anchor label="About" href="https://github.com/akctba/pickanytwo"/>
                    </Footer>
                </Box>
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
