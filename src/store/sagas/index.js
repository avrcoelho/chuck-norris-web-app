import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '../ducks/categories';
import { Types as CategoryTypes } from '../ducks/category';

import { categories } from './categories';
import { category } from './category';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.REQUEST, categories),
    takeLatest(CategoryTypes.REQUEST, category),
  ]);
}
