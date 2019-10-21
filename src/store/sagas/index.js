import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '../ducks/categories';

import { categories } from './categories';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.REQUEST, categories),
  ]);
}
