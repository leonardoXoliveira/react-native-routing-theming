import React from 'react';
import { useTheme } from 'react-native-paper';

import * as S from './styled';

export function ProfileScreen() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Title theme={theme}>🎭 Profile</S.Title>
    </S.Container>
  );
}
