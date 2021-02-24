import React from 'react';
import {
  Image, KeyboardAvoidingView, Platform, View, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';

import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInButtonText,
} from './styles';

const SignUp: React.FC = () => (
  <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Image source={logoImg} />

          <View>
            <Title>Create new account</Title>
          </View>

          <Input name="name" icon="user" placeholder="Full Name" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Password" />

          <Button onPress={() => {}}>
            Enter
          </Button>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <BackToSignInButton onPress={() => {}}>
      <Icon name="arrow-left" size={20} color="#fff" />
      <BackToSignInButtonText>
        Back to login
      </BackToSignInButtonText>
    </BackToSignInButton>
  </>
);

export default SignUp;
