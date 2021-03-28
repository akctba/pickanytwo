import React, { useReducer } from 'react'

const initialState = {
    options: ['Fast', 'Cheap', 'Great', 'Free'],
    selected: [],
    message: null
};

const reducer = (state, action) => {

    switch (action.type) {
        case "CLEAR":
            return {...initialState};
        case "TOGGLE":
            state.third = null;

            if (state.selected.includes(action.item)) {
                return {...state, selected: state.selected.filter(i => i !== action.item)};
            }

            let newState = {...state};

            if (state.selected.length < 2) {
                newState = {...state, selected: [...state.selected, action.item]};
            } else {
                newState.third = action.item;
            }

            if (newState.selected.includes('Fast') && newState.selected.includes('Cheap')) {
                newState.message = "Fast-Cheap";
            } else if (newState.selected.includes('Fast') && newState.selected.includes('Free')) {
                newState.message = "Fast-Free";
            } else if (newState.selected.includes('Fast') && newState.selected.includes('Great')) {
                newState.message = "Fast-Great";
            } else if (newState.selected.includes('Free') && newState.selected.includes('Great')) {
                newState.message = "Free-Great";
            } else if (newState.selected.includes('Great') && newState.selected.includes('Cheap')) {
                newState.message = "Great-Cheap";
            } else if (newState.selected.includes('Free') && newState.selected.includes('Cheap')) {
                newState.message = "Free-Cheap";
            } else {
                newState.message = null;
            }

            return newState;
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
