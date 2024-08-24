import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { PixelButton } from '../PixelButton/PixelButton';

interface NavigationWrapperProps {
  $isScrolled: boolean;
}

const NavigationWrapper = styled.nav<NavigationWrapperProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 60px;
  background-color: rgba(88, 191, 243, ${(props) => (props.$isScrolled ? 0.3 : 1)});
  transition: background-color 0.3s ease-in-out;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

const NavigationTitleLogo = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`;

const NavigationSignButton = styled(PixelButton)``;

export const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavigationWrapper $isScrolled={isScrolled}>
      <LinkWrapper to="/" style={{ float: 'left' }}>
        <NavigationTitleLogo>PixeliModa</NavigationTitleLogo>
      </LinkWrapper>
      <LinkWrapper to="/blog">
        <NavigationTitleLogo>Blog</NavigationTitleLogo>
      </LinkWrapper>
      <LinkWrapper to="/sign-in">
        <NavigationSignButton label="sign-in" />
      </LinkWrapper>
      <LinkWrapper to="/sign-up">
        <NavigationSignButton label="sign-up" type="primary" />
      </LinkWrapper>
    </NavigationWrapper>
  );
};
