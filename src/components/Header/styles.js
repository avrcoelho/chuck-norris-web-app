import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #250048;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #fff;
  font-family: 'nunito';
  position: fixed;
`;

export const Link = styled(RouteLink)`
  text-decoration: none;
  height: 100%;
  width: auto;
  color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 22px;
  font-weight: bold;
`;
