import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => (
  <Container>
    <Image source={logoImg} />

    <Title>Enter with your login</Title>
  </Container>
);

export default SignIn;
