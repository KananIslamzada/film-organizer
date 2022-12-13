import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const movieInitial = { movieList: [], movieName: "" };
const collectionInitial = { movieCollection: [] };

const movieSlice = createSlice({
    name: "sliceMovie",
    initialState: movieInitial,
    reducers: {
        renameMovie(state, action) {
            state.movieName = action.payload;
        },
        addStore(state, action) {
            if (state.movieList.some((element) => element.name === action.payload.name)) return;
            state.movieList.push(action.payload);
        },
        deleteMovie(state, action) {
            state.movieList = state.movieList.filter(
                (element) => element.id !== action.payload
            );
        },
        clear(state) {
            state.movieList = [];
        }
    }
});

const collectionSlice = createSlice({
    name: "movieColl",
    initialState: collectionInitial,
    reducers: {
        addCollection(state, action) {
            state.movieCollection.push(action.payload);
        }
    }
});

const store = configureStore({
    reducer: {
        movieSlice: movieSlice.reducer,
        collectionSlice: collectionSlice.reducer
    }
});

export const { addCollection } = collectionSlice.actions;
export const { clear, renameMovie, addStore, deleteMovie } = movieSlice.actions;

export const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
        </Provider>
    );
};

export default store;
