import { takeLatest, call, put, all } from 'redux-saga/effects';
import { setTracksFailure, setTracksSuccess, setATrackSuccess, setArtistSuccess } from './tracks.actions';
import TracksTypes from './tracks.types';
import { API_KEY } from '../../constants/api-key';
import { HOST } from '../../constants/host'
import { LIMIT } from '../../constants/limit-tracks'

// Look up top songs
export function* fetchTracksAsync() {
    try {
        const result = yield fetch(`${HOST}?method=chart.gettoptracks&api_key=${API_KEY}&limit=${LIMIT}&format=json`)
        const data = yield result.json();
        yield put(setTracksSuccess(data.tracks.track))

    } catch (error) {
        yield put(setTracksFailure(error))
    }
}

export function* fetchTracksStart() {
    yield takeLatest(TracksTypes.FETCH_TRACKS_START, fetchTracksAsync)
}

export function* tracksSagas() {
    yield all([call(fetchTracksStart)])
}

// Look for a single track
export function* fetchATrackAsync(trackName) {
    try {
        const result = yield fetch(`${HOST}?method=track.search&track=${trackName.payload}&api_key=${API_KEY}&format=json`)
        const data = yield result.json();
        yield put(setATrackSuccess(data.results.trackmatches.track))
    } catch (error) {
        yield put(setTracksFailure(error))
    }
}

export function* fetchATrackStart() {
    yield takeLatest(TracksTypes.FETCH_A_TRACK_START, fetchATrackAsync)
}

export function* trackSagas() {
    yield all([call(fetchATrackStart)])
}

// Look for an artist
export function* fetchArtistAsync(artist) {
    try {
        const result = yield fetch(`${HOST}?method=artist.getinfo&artist=${artist.payload}&api_key=${API_KEY}&format=json`)
        const data = yield result.json();
        yield put(setArtistSuccess(data.artist))
    } catch (error) {
        yield put(setTracksFailure(error))
    }
}

export function* fetchArtistStart() {
    yield takeLatest(TracksTypes.FETCH_ARTIST_START, fetchArtistAsync)
}

export function* artistSagas() {
    yield all([call(fetchArtistStart)])
}