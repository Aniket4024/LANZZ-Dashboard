import { ALL, COMPLETED, IMPORTANT, OPEN, PENDING } from "../actionType";

const initialState = {
    all: [],
    open: [],
    pending: [],
    completed: [],
    important: [],
    trash: []
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ALL:
            return { ...state };
        case OPEN:
            return {
                ...state,
                open: [...state.open, payload],
                all: [...state.all, payload]
            };
        case PENDING:
            return {
                ...state,
                pending: [...state.pending, payload],
                all: [...state.all, payload]
            };
        case COMPLETED:
            return {
                ...state,
                completed: [...state.completed, payload],
                all: [...state.all, payload]
            };
        case IMPORTANT:
            return {
                ...state,
                important: [...state.important, payload],
                all: [...state.all, payload]
            };
        default:
            return state; // Return the unchanged state for unknown actions
    }
};
