import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Creators as FactsActions } from '../../store/ducks/facts';

import { Container, Title } from './styles';

import ErrorInfo from '../../components/ErrorInfo';

function Facts() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const {
    data, error, loading, updating,
  } = useSelector((state) => state.facts);

  useEffect(() => {
    document.title = 'Facts | Fatos';

    dispatch(FactsActions.factsRequest(category));
  }, [category, dispatch]);

  function updateFact() {
    dispatch(FactsActions.factsUpdate(category));
  }

  return (
    <>
      {error && <ErrorInfo error={error} />}
      <Container>
        <Title error={!!error}>{category}</Title>
        {loading && <i className="fa fa-spinner fa-pulse" />}
        {(!loading && !error) && (
          <>
            <img src={data.icon_url} alt="Avatar" />
            <p>{data.value}</p>
            <button type="button" onClick={updateFact}>
              {updating ? <i className="fa fa-spinner fa-pulse" /> : 'Atualizar' }
            </button>
          </>
        )}
      </Container>
    </>
  );
}

export default Facts;
