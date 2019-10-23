import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  margin-top: ${(props) => (props.error ? 0 : '80px')};
  text-align: center;

  img {
    margin-bottom: 20px;
  }

  p {
    max-width: 800px;
    margin: auto;
  }

  button {
    border: solid 2px #250048;
    color: #250048;
    width: 100%;
    height: 50px;
    font-size: 12px;
    text-transform: uppercase;
    margin-top: 30px;
    cursor: pointer;
    max-width: 300px;
  }
`;

export const Title = styled.h2`
  width: 100%;
  color: #250048;
  text-align: center;
  margin: 15px 0;
  font-size: 18px;
  text-transform: uppercase;
`;