import React from 'react';
import { View, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export const Profile: React.FC = () => {
  const navigate = useNavigation();
  return (
    <View>
      <Button
        title="Voltar"
        onPress={() => {
          navigate.navigate('SignIn');
        }}
      />
    </View>
  );
};
