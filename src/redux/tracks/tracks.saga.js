import { takeLatest, call, put, all } from 'redux-saga/effects';
import { setTracksFailure, setTracksSuccess } from './tracks.actions';
import { API_KEY } from '../../constants/api-key';

import TracksTypes from './tracks.types';

export function* fetchTracksAsync() {
    try {
        const result = yield fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${API_KEY}&limit=20&format=json`)
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