import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/useAuth';

import Button from '../../components/Button';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const navigation = useNavigation();

  const handleSignOutButton = useCallback(() => {
    signOut();

    navigation.navigate('SignIn');
  }, [signOut, navigation]);

  return (
    <View>
      <Button onPress={handleSignOutButton}>Sign Out</Button>
    </View>
  );
};

export default Dashboard;
