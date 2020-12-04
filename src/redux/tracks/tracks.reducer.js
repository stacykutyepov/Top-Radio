import TracksTypes from './tracks.types';

const INITIAL_STATE = {
    tracks: [],
    searchedTrack: [],
    artist: null,
    error: null,
    isFetching: false
}

const tracksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TracksTypes.FETCH_TRACKS_START:
        case TracksTypes.FETCH_A_TRACK_START:
        case TracksTypes.FETCH_ARTIST_START:
            return {
                ...state, isFetching: true
            }
        case TracksTypes.SET_TRACKS_SUCCESS:
            return {
                ...state, tracks: action.payload, error: null
            }
        case TracksTypes.SET_TRACKS_FAILURE:
            return {
                ...state, error: action.payload
            }
        case TracksTypes.SET_A_TRACK_SUCCESS:
            return {
                ...state, searchedTrack: action.payload, error: null
            }
        case TracksTypes.SET_ARTIST_SUCCESS:
            return {
                ...state, artist: action.payload
            }

        default:
            return state
    }
}

export default tracksReducer;