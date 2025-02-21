import { LuBrain } from "react-icons/lu"
import { skills } from "../data/data"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

const SkillsSection = () => {

  const {t} = useTranslation();
  return (
    <Container>
      <Skills>
        <LuBrain style={{fontSize: "3rem"}}/>
        <h2>{t('skills')}</h2>
      </Skills>

      <SkillsContainer>
        {skills.map((skill, index) => 
          (
            <ImageContainer key={index}>
              <Image src={skill.logo} alt={skill.name} />
              <TitleSkill>{skill.name}</TitleSkill>
            </ImageContainer>
            )
          )
        }
      </SkillsContainer>
    </Container>
  )
}

const Container = styled.div`
  margin: 6rem 0;
`

const Skills = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 3rem;
  margin-bottom: 2rem;
`

const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

const Image = styled.img`
  width: 5rem;
  @media screen and (min-width:600px){
    width: 8rem;
  }
`

const TitleSkill = styled.p`
  font-size: 2rem;
`

export default SkillsSection