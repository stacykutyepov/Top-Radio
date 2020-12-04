import TracksTypes from './tracks.types'

// Top tracks
export const fetchTracksStart = () => ({
    type: TracksTypes.FETCH_TRACKS_START
})

export const setTracksSuccess = tracks => ({
    type: TracksTypes.SET_TRACKS_SUCCESS, payload: tracks
})

export const setTracksFailure = errorMessage => ({
    type: TracksTypes.SET_TRACKS_FAILURE, payload: errorMessage
})

// Track
export const fetchATrackStart = (trackName) => ({
    type: TracksTypes.FETCH_A_TRACK_START, payload: trackName
})

export const setATrackSuccess = (track) => ({
    type: TracksTypes.SET_A_TRACK_SUCCESS, payload: track
})

// Artist
export const fetchArtistStart = (artist) => ({
    type: TracksTypes.FETCH_ARTIST_START, payload: artist
})

export const setArtistSuccess = (artist) => ({
    type: TracksTypes.SET_ARTIST_SUCCESS, payload: artist
})