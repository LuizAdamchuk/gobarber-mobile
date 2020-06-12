import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const AppointmentCreated: React.FC = () => {
  const navigate = useNavigation();

  return (
    <View>
      <Button
        title="Voltar"
        onPress={() => {
          navigate.navigate('Dashboard');
        }}
      />
    </View>
  );
};
