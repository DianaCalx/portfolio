import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styled from 'styled-components';
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import  SpainIcon  from '../assets/spain.svg?react';
import EUIcon from '../assets/eeuu.svg?react';


const Navbar = () => {
  const [selectedLenguage, setSelectedLenguage] = useState("en");
  const [isMoon, setIsMoon] = useState(true);
  
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLenguage);
  }, [selectedLenguage, i18n]);

  const handleChange = (event) => {
    setSelectedLenguage(event.target.value);
  };

  const onSwithTheme = () => {
    setIsMoon(!isMoon);
    const body = document.querySelector("body");
    body.classList.toggle("dark");
  };

  return (
    <NavbarCont>
      <Nav>
        {isMoon ?  <IconSun onClick={onSwithTheme}/> : <IconMoon onClick={onSwithTheme}/> }
        <Link href="#projects">{t('projects')}</Link>
        <Link href="#about">{t('about')}</Link>
        <Link href="mailto:calderon.calx@gmail.com">{t('contact')}</Link>     
        <SelectContainer>
          {selectedLenguage === "en" && <EUIcon width={20}/>}
          {selectedLenguage === "es" && <SpainIcon width={20}/>}
          <Select value={selectedLenguage} onChange={handleChange}>
            <option value="en">EN</option>
            <option value="es">ES</option>
          </Select>
        </SelectContainer>      
      </Nav>
    </NavbarCont>
  )
}

const NavbarCont  = styled.div`
  padding: 1rem;
  margin-bottom: 5rem;
`;

const Nav  = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  font-size: 1.5rem;
  text-align: center;

  @media screen and (min-width:600px){
    font-size: 2rem;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;

  &:visited, &:visited, &:active {
    color: inherit;
  }
`

const SelectContainer = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  height: 2rem;
`;

const Select = styled.select`
  background-color: var(--ligth-gray);
  color: var(--mint);
  font-weight: bold;
  font-size: 1.5rem;
  border: 1px solid var(--mint);
  border-radius: 5px;
`;

const IconMoon = styled(FaRegMoon)`
  font-size: 1rem;
  border: 2px solid var(--sky-blue); 
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  color: var(--blue);
  cursor: pointer;
`;

const IconSun = styled(FaRegSun)`
  font-size: 1rem;
  border: 2px solid var(--sky-blue); 
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  color: var(--yellow);
  cursor: pointer;
`


export default Navbar;