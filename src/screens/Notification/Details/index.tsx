import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Subheading, useTheme } from 'react-native-paper';

import { NotificationStackParamList } from '../index';

import * as S from './styled';

export function Details({ route }: NativeStackScreenProps<NotificationStackParamList, 'Details'>) {
  const { title } = route.params;
  const theme = useTheme();

  return (
    <S.Container background={theme.colors.background}>
      <Subheading>{title}</Subheading>
    </S.Container>
  );
}
