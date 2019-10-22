import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  margin-top: ${(props) => (props.error ? 0 : '80px')};
  text-align: center;
`;

export const Title = styled.h2`
  width: 100%;
  color: #250048;
  text-align: center;
  margin: 15px 0;
  font-size: 18px;
  text-transform: uppercase;
`;

export const ListCategories = styled.ul`
  max-width: 800px;
  margin: auto;

  li {
    height: 50px;
    border-bottom: solid 1px #f5f5f5;
    display: flex;
    align-items: center;
    padding: 0 10px;
    cursor: pointer;
    text-transform: capitalize;

    &:hover {
      background-color: #f5f5f5;
    }

  }
`;
