import TracksTypes from './tracks.types'

export const fetchTracksStart = () => ({
    type: TracksTypes.FETCH_TRACKS_START
})

export const setTracksSuccess = tracks => ({
    type: TracksTypes.SET_TRACKS_SUCCESS, payload: tracks
})

export const setTracksFailure = errorMessage => ({
    type: TracksTypes.SET_TRACKS_FAILURE, payload: errorMessage
})