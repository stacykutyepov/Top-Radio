import { combineReducers } from 'redux';
import tracksReducer from './tracks/tracks.reducer';

const rootReducer = combineReducers({
    tracks: tracksReducer
})

export default rootReducer;