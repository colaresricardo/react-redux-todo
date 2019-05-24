import { createStore } from "redux";

const INITIAL_STATE = [
    { id: 1, text: "Supino Reto", completed: false },
    { id: 2, text: "Corda", completed: true },
    { id: 3, text: "Cross Over", completed: false }
];

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: Math.random(), text: action.text, completed: false }
            ];
        case "MARK_AS_COMPLETED":
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        default:
            return state;
    }
    return state;
}

const store = createStore(reducer);

export default store;
