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
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';

const SignIn: React.FC = () => (
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
            <Title>Enter with your login</Title>
          </View>

          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Password" />

          <Button onPress={() => {}}>
            Enter
          </Button>

          <ForgotPassword onPress={() => {}}>
            <ForgotPasswordText>
              Forgot my password
            </ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>

    <CreateAccountButton onPress={() => {}}>
      <Icon name="log-in" size={20} color="#ff9000" />
      <CreateAccountButtonText>
        Create new account
      </CreateAccountButtonText>
    </CreateAccountButton>
  </>
);

export default SignIn;
