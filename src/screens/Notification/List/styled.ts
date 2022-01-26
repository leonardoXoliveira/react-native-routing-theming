import styled from 'styled-components/native';

type ContainerProps = {
  background: string;
}

export const Container = styled.ScrollView<ContainerProps>`
  background-color: ${({ background }) => background};
`;
