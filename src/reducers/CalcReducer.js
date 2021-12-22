const initialState = {
    history: []
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case 'addCalc':
            let history = [...state.history];
            history.push(action.calc);
            return { ...state, history };
        break;
    }

    return state;
}