import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Title, useTheme } from 'react-native-paper';

import * as S from './styled';
import { Header } from '../../components/Header';

function Content() {
  const theme = useTheme();

  return (
    <>
      <S.Container>
        <Title style={{ color: theme.colors.primary }}>🏠 Home</Title>
      </S.Container>
    </>
  );
}

type HomeStackParamList = {
  Content: { title: string };
}

const Stack = createNativeStackNavigator<HomeStackParamList>();

export function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Content" screenOptions={{
      header: (props) => (<Header {...props} />),
    }}>
      <Stack.Screen name="Content" component={Content} options={{ headerTitle: 'Home' }} />
    </Stack.Navigator >
  );
}
