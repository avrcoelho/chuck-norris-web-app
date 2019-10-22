import { call, put } from 'redux-saga/effects';

import api from '../../services/api';

import { Creators as CategoriesActions } from '../ducks/categories';

export function* categories() {
  try {
    const { data } = yield call(api.get, 'jokenkjs/categories');

    yield put(CategoriesActions.categoriesSuccess(data));
  } catch (err) {
    yield put(CategoriesActions.categoriesFailure('Erro ao obter as categorias'));
  }
}
