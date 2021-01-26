import React from 'react';
import {Grommet} from 'grommet';
import OptionList from './components/options/OptionList';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
    return (
        <Grommet theme={theme}>
            <header className="App-header">

                <p>
                    Do you have a project, job or service to be done?
                </p>
                <h2>PICK ANY TWO</h2>

                {/* OPTIONS */}
                <OptionList/> {/* RESULT */}


                {/* ADDS */} </header>
        </Grommet>
    );
}

export default App;
