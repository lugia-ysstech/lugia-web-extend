/**
 *
 *
 * @flow
 */
import React from 'react';
import Example from './index';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin: 50px;
`;

export default () => {
  return (
    <React.Fragment>
      <Wrapper>
        <Example/>
      </Wrapper>
    </React.Fragment>
  );
};
