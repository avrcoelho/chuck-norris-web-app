import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as CategoriesActions } from '../../store/ducks/categories';

import {
  Container, Title, ListCategories, Link,
} from './styles';

import ErrorInfo from '../../components/ErrorInfo';

export default function Categories() {
  const dispatch = useDispatch();
  const { data: categories, error, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    document.title = 'Facts | Categorias';

    dispatch(CategoriesActions.categoriesRequest());
  }, [dispatch]);

  return (
    <>
      {error && <ErrorInfo error={error} />}
      <Container>
        <Title error={!!error}>Categorias</Title>
        {!categories.length && loading && <i className="fa fa-spinner fa-pulse" />}
        <ListCategories>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/${category}`}>
                <span>{category}</span>
                <i className="fa fa-angle-right" />
              </Link>
            </li>
          ))}
        </ListCategories>
      </Container>
    </>
  );
}
