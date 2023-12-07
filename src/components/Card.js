import {
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Card = ({ title, description, imageSrc }) => {
  return (
    <Stack color='black' backgroundColor='white' cursor='pointer' borderRadius='xl'>
      <Image src={imageSrc} borderRadius='xl' />
{/* vstack */}
      <VStack spacing={4} p={4} alignItems='flex-start'>
        {/* not needed but works */}
        <HStack justifyContent='space-between' alignItems='center'>
          <Heading as='h3' size='md'>
            {title}
          </Heading>
        </HStack>

        <Text color='gray.500' fontSize='lg'>
          {description}
        </Text>

        <HStack>
          <Button variant='unstyled'>See more</Button>
          <FontAwesomeIcon icon={faArrowRight} size='1x' />
        </HStack>
      </VStack>
    </Stack>
  );
};

export default Card;
