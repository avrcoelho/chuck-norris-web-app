import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as CategoryActions } from '../../store/ducks/category';

import { Container, Title } from './styles';

import ErrorInfo from '../../components/ErrorInfo';

function Category() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.category);

  const getCategoryData = useCallback(() => {
    dispatch(CategoryActions.categoryRequest(category));
  }, [category, dispatch]);

  useEffect(() => {
    getCategoryData();
  }, [category, dispatch, getCategoryData]);

  return (
    <>
      {error && <ErrorInfo error={error} />}
      <Container error={error}>
        <Title>{category}</Title>
        {(loading && !data) && <i className="fa fa-spinner fa-pulse" />}
        {((!loading && !error) || data) && (
          <>
            <img src={data.icon_url} alt="Avatar" />
            <p>{data.value}</p>
            <button type="button" onClick={getCategoryData}>
              {loading ? <i className="fa fa-spinner fa-pulse" /> : 'Atualizar' }
            </button>
          </>
        )}
      </Container>
    </>
  );
}

export default Category;
