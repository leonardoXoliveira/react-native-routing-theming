import React, { useState, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { List as PaperList, useTheme } from 'react-native-paper';

import { NotificationStackParamList } from '../index';

import api from '../../../services/api';

import * as S from './styled';

type Notifications = {
  id: number;
  title: string;
  description: string;
}

export function List({ navigation }: NativeStackScreenProps<NotificationStackParamList, 'List'>) {
  const [notifications, setNotifications] = useState<Notifications[]>([]);
  const theme = useTheme();

  useEffect(() => {
    async function getNotifications() {
      const response = await api.get<Notifications[]>('/notifications');

      setNotifications(response.data);
    }

    getNotifications();
  }, []);

  return (
    <S.Container background={theme.colors.background}>
      {notifications?.map(notification => {
        return (
          <PaperList.Item
            key={notification.id}
            title={notification.title}
            description={notification.description}
            left={props => <PaperList.Icon {...props} icon="folder" />}
            onPress={() => navigation.navigate('Details', { title: notification.title })}
          />
        );
      })}
    </S.Container>
  );
}
