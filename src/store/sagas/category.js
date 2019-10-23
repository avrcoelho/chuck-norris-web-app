import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as CategoryActions } from '../ducks/category';

export function* category({ payload: { categoryName } }) {
  try {
    const { data } = yield call(api.get, `jokes/random?category=${categoryName}`);

    yield put(CategoryActions.categorySuccess(data));
  } catch (err) {
    yield put(CategoryActions.categoryFailure('Erro ao obter os dados'));
  }
}
