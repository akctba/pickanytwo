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

    const [language, setLanguage] = useState('en');
    const langs = ['en', 'fr', 'es', 'pt-br'];

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return (
        <Grommet full theme={theme}>
            <Header pad="small" height="xxsmall" background="dark-1">
              <Anchor href="/" icon={<Projects />} />
                <Nav direction="row">
                    <Menu label={language}
                    items={langs.map(l => {return {label:l, onClick: () => {setLanguage(l)}}})}
                    />
                </Nav>
            </Header>

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
            <Footer background="dark-2" pad="medium">
                <Text>&#169; 2021 Akctba&#8482;</Text>
                <Anchor label="About" href="https://github.com/akctba/pickanytwo"/>
            </Footer>
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
