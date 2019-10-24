import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '../ducks/categories';
import { Types as FactsTypes } from '../ducks/facts';

import { categories } from './categories';
import { facts } from './facts';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.REQUEST, categories),
    takeLatest(FactsTypes.REQUEST, facts),
    takeLatest(FactsTypes.UPDATE, facts),
  ]);
}
