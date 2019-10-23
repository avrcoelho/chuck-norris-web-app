import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as FactsActions } from '../ducks/facts';

export function* facts({ payload: { category } }) {
  try {
    const { data } = yield call(api.get, `jokes/random?category=${category}`);

    yield put(FactsActions.factsSuccess(data));
  } catch (err) {
    yield put(FactsActions.factsFailure('Erro ao obter os dados'));
  }
}
