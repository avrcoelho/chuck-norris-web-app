import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Creators as CategoriesActions } from '../../store/ducks/categories';

import { Container, Title, ListCategories } from './styles';

import ErrorInfo from '../../components/ErrorInfo';

function Categories({ history }) {
  const dispatch = useDispatch();
  const { data: categories, error, loading } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(CategoriesActions.categoriesRequest());
  }, [dispatch]);

  function openCategory(category) {
    history.push(`/${category}`);
  }

  return (
    <>
      {error && <ErrorInfo error={error} />}
      <Container error={!!error}>
        <Title>Categorias</Title>
        {loading && <i className="fa fa-spinner fa-pulse" />}
        <ListCategories>
          {categories.map((category) => (
            <li key={category} onClick={() => openCategory(category)}>{category}</li>
          ))}
        </ListCategories>
      </Container>
    </>
  );
}

Categories.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Categories;
