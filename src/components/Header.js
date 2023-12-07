import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Box, HStack, Link, List, ListItem } from '@chakra-ui/react';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

const socials = [
  {
    icon: faEnvelope,
    url: 'mailto: pete@example.com',
  },
  {
    icon: faGithub,
    url: 'https://github.com/suleman275',
  },
  {
    icon: faLinkedin,
    url: 'https://www.linkedin.com/in/suleman275',
  },
  {
    icon: faMedium,
    url: 'https://medium.com',
  },
  {
    icon: faStackOverflow,
    url: 'https://stackoverflow.com/',
  },
];

const Header = () => {
  const headRef = useRef(null);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headElement = headRef.current;
      if (!headElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headElement.style.transform = 'translateY(0)';
      } else {
        headElement.style.transform = 'translateY(-100%)';
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = anchor => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box
      position='fixed'
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty='transform'
      transitionDuration='.3s'
      transitionTimingFunction='ease-in-out'
      backgroundColor='#18181b'
      ref={headRef}
    >
      <Box color='white' maxWidth='1280px' margin='0 auto'>
        <HStack px={10} py={4} justifyContent='space-between' alignItems='center'>
          <nav>
            <List>
              <HStack spacing={8}>
                {socials.map(social => {
                  return (
                    <ListItem key={social.url}>
                      <a target='_blank' href={social.url}>
                        <FontAwesomeIcon icon={social.icon} size='xl' />
                      </a>
                    </ListItem>
                  );
                })}
              </HStack>
            </List>
          </nav>

          <nav>
            <List>
              <HStack spacing={8}>
                <ListItem>
                  <Link href='#projects' onClick={handleClick('projects')}>
                    Projects
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href='#contactme' onClick={handleClick('contactme')}>
                    Contact Me
                  </Link>
                </ListItem>
              </HStack>
            </List>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
