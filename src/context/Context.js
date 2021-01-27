import React, { useReducer } from 'react'

const initialState = {
    options: ['Fast', 'Cheap', 'Great', 'Free'],
    selected: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case "CLEAR":
            console.log('vai limpar...');
            return {...state, selected: []};
        case "TOGGLE":
            if (state.selected.includes(action.item)) {
                return {...state, selected: state.selected.filter(i => i !== action.item)};
            }
            if (state.selected.length >= 2) {
                return state;
            }
            return {...state, selected: [...state.selected, action.item]};
        default:
            return;
    }
};

const OptionContext = React.createContext(initialState);

function OptionProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <OptionContext.Provider value={{state, dispatch}}>
            {props.children}
        </OptionContext.Provider>
    )
}

export { OptionContext, OptionProvider };
