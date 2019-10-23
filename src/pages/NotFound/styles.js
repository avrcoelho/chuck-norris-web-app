import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .fa-exclamation-circle {
    font-size: 120px;
    color: #250048;
    margin-bottom: 10px;
  }

  p {
    color: #250048;
    font-weight: bold;
    font-size: 20px;
  }
`;
