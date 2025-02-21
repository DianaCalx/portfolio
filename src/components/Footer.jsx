import { useTranslation } from "react-i18next";
import styled from "styled-components"

const Footer = () => {

  const {t} = useTranslation();
  const year = new Date().getFullYear();

  return (
    <Container>
      <Copy>&copy; Diana Calderón {year}</Copy>
      <LinksContainer>
        <Link href="#projects">{t('projects')}</Link>
        <Link href="mailto:calderon.calx@gmail.com">{t('contact')}</Link>
      </LinksContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  font-size: 2rem;
  margin: 8rem 0 2rem 0;
  opacity: 0.6;
`

const Copy = styled.p`
  font-weight: lighter;
`

const LinksContainer = styled.div`
  display: flex;
  gap: 2rem;
`

const Link = styled.a`
  text-decoration: none;
  color: inherit;

  &:visited, &:visited, &:active {
    color: inherit;
  }
`

export default Footer