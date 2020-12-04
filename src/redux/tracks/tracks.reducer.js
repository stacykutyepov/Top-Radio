import TracksTypes from './tracks.types';

const INITIAL_STATE = {
    tracks: [],
    error: null,
    isFetching: false
}

const tracksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TracksTypes.FETCH_TRACKS_START:
            return {
                ...state, isFetching: true
            }
        case TracksTypes.SET_TRACKS_SUCCESS:
            return {
                ...state, tracks: action.payload, error: null
            }
        case TracksTypes.FETCH_TRACKS_FAILURE:
            return {
                ...state, error: action.payload
            }
        default:
            return state
    }
}

export default tracksReducer;