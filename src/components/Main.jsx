import Avatar from "../assets/avatar.svg?react"
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { useSpring, animated } from "@react-spring/web";
import { useTranslation } from "react-i18next";

const Main = () => {

  const { t } = useTranslation();

  const styles = useSpring({
    from: { backgroundPosition: "0% 50%" },
    to: async (next) => {
      while (true) {
        await next({ backgroundPosition: "100% 50%" });
        await next({ backgroundPosition: "0% 50%" });
      }
    },
    config: { duration: 3000 },
  });

  return (
    <MainContainer>      
      <AvatarImg id="avatar"/>
      <Name>{t('greeting')}</Name>
      <Description>{t('engineer')}</Description>
      <animated.button 
        style={{
          ...styles,
          padding: "1rem 2rem",
          fontSize: "1.7rem",
          background: "linear-gradient(90deg, #00bd97e3, #003127, #00bd97e3)",
          backgroundSize: "200% 100%",
          border: "2px solid #00997a",
          borderRadius: "50rem",
          color: "white",
          cursor: "pointer",
          overflow: "hidden",
          position: "relative",
          fontWeight: 700,
        }}
      >
        {t('available')}
      </animated.button>
      <Links>
        <Link>
          <FaLinkedin />
          Linkedin
        </Link>
        <Link href="https://github.com/DianaCalx?tab=repositories" target="_blank">
          <FaGithub />
          Github
        </Link>
        <Link href="mailto:calderon.calx@gmail.com">
          <GrMail />
          calderon.calx@gmail.com
        </Link>
      </Links>
    </MainContainer>
  )
}

const MainContainer  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 8rem;
`;

const Name = styled.h1`
  font-size: 5rem;
`

const AvatarImg = styled(Avatar)`
  width: 15rem;
  height: 15rem;
  border: 1px solid var(--white);
  border-radius: 50%;
  background-color: var(--white);
`

const Description = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  color: var(--blue);
  font-weight: 700;
  font-size: 2rem;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

 @media screen and (min-width:600px){
    flex-direction: row;
 }

`

const Link = styled.a`
  border: 1px solid var(--mint);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50rem;
  color: var(--mint);
  background-color: var(--ligth-gray);
  font-weight: 700;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
`



export default Main