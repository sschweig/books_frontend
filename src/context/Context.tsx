import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    query: "",
    booklist: []
};

export const Context = createContext<{
    state: StateType;
    dispatch: React.Dispatch<ActionType>;
}>({
    state: INITIAL_STATE,
    dispatch: () => {},
});

const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "UPDATE_BOOK_LIST":
            return {
                ...state,
                booklist: action.booklist,
            };
        case "UPDATE_QUERY":
            return {
                ...state,
                query: action.query,
            };

        default:
            return state;
    }
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    return (
        <Context.Provider value={{ state, dispatch }}>
        {children}
        </Context.Provider>
    );
};