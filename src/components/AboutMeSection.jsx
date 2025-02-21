import { useTranslation } from "react-i18next";

import foto from "../assets/foto.jpg"
import styled from "styled-components"
import { MdOutlinePerson2 } from "react-icons/md";


const AboutMeSection = () => {

  const {t} = useTranslation()

  return (
    <Container id="about">
      <AboutMeContainer>
        <AboutMe>
          <MdOutlinePerson2 style={{fontSize: "3.5rem"}}/>
          <h2>{t('about')}</h2>        
        </AboutMe>
        <AboutMeDescription>
          {t('aboutMe')}
        </AboutMeDescription>
      </AboutMeContainer>
      <Imagen src={foto} alt={"foto"} width={400}/>

    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 6rem 0;

  @media screen and (min-width:600px){
    flex-direction: row;
  }
`;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const AboutMe = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 3rem;
`

const AboutMeDescription = styled.p`
  line-height: 2;
  opacity: 0.8;
  font-size: 2rem;
`;

const Imagen = styled.img`
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  object-position: top;
  border-radius: 2rem;
`

export default AboutMeSection