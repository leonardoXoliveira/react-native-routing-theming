import styled from 'styled-components/native';
import { Title as PaperTitle } from 'react-native-paper';

export const Container = styled.View`
  padding: 16px;
`;

export const Title = styled(PaperTitle)`
  color: ${({ theme }) => theme.colors.accent};
`;
