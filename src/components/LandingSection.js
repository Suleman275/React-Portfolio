import React from 'react';
import { Avatar, Heading, Text, VStack } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const greeting = 'Hello, I am Pete!';
const bio1 = 'A frontend developer';
const bio2 = 'specialised in React';

const LandingSection = () => (
  <FullScreenSection
    justifyContent='center'
    alignItems='center'
    isDarkBackground
    backgroundColor='#2A4365'
  >
    <VStack spacing={12}>
      <Avatar src='https://i.pravatar.cc/150?img=7' size='2xl' />

      <VStack spacing={3}>
        <Text fontSize='2xl'>
          {greeting}
        </Text>
        <Heading as='h1' size='3xl'>
          {bio1}
        </Heading>
        <Heading as='h1' size='3xl'>
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
