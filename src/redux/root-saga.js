import { all, call } from 'redux-saga/effects';
import { tracksSagas, trackSagas, artistSagas } from './tracks/tracks.saga';

export default function* rootSaga() {
    // all - allows to take different sagas concurrently
    yield all([call(tracksSagas), call(trackSagas), call(artistSagas)]);
}