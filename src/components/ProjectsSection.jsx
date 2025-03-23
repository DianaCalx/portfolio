import styled from "styled-components";
import { projects, secondaryProjects } from "../data/data";
import { FaLink } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const elements = document.getElementsByClassName("projectimg");

  //Agregar efecto 3D a las imagenes de los proyectos
  Array.from(elements).forEach((el) => {
    const height = el?.clientHeight;
    const widht = el?.clientWidth;

    el?.addEventListener("mousemove", (event) => {
      const { layerX, layerY } = event;

      const yRotation = ((layerX - widht / 2) / widht) * 20;

      const XRotation = ((layerY - height / 2) / widht) * 20;

      const string = `
        perspective(500px)
        scale(1.02)
        rotateX(${XRotation}deg)
        rotateY(${yRotation}deg)
      `;

      el.style.transform = string;
    });

    el?.addEventListener("mouseout", () => {
      el.style.transform = `
        perspective(500px)
        scale(1)
        rotateX(0)
        rotateY(0)
      `;
    });
  });

  return (
    <div id="projects">
      <Title>
        {"</>"}
        {t("projects")}
      </Title>
      {projects.map((project) => (
        <Project key={project.title}>
          <ImageLink
            href={project.link}
            target="_blank"
            className="projectimg"
          >
            <Image
              src={project.image}
              alt={project.title}
            />
          </ImageLink>
          <div>
            <TitleProject>{t(project.title)}</TitleProject>
            <Warning>
              {(t(project.title) === "Netflix Website" ||
                t(project.title) === "Sitio web de Netflix") &&
                t("netflixWarning")}
            </Warning>
            <DescProject>{t(project.description)}</DescProject>

            <div>
              <Link
                href={project.link}
                target="_blank"
              >
                <FaLink />
                Demo
              </Link>
            </div>
          </div>
        </Project>
      ))}

      <div>
        <Title>
          {"</>"}
          {t("otherprojects")}
        </Title>
        <OtherProjects>
          {secondaryProjects.map((project) => {
            return (
              <Project
                key={project.title}
                className="others"
              >
                <ImageLink
                  href={project.link}
                  target="_blank"
                  className="projectimg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                  />
                </ImageLink>
                <div>
                  <TitleProject>{t(project.title)}</TitleProject>
                  <Warning>
                    {(t(project.title) === "Netflix Website" ||
                      t(project.title) === "Sitio web de Netflix") &&
                      t("netflixWarning")}
                  </Warning>
                </div>
              </Project>
            );
          })}
        </OtherProjects>
      </div>
    </div>
  );
};

const Title = styled.h2`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const ImageLink = styled.a`
  display: inline-block;
  text-decoration: none;
  width: auto;
  height: auto;

  :hover {
    transform: scale(1.05);
    transition: transform 0.5s;
  }
`;

const Image = styled.img`
  border-radius: 1rem;
  width: 40rem;
  height: auto;
  transition: box-shadow 0.1s, transform 0.1s;

  :hover {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 1);
  }
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }

  &.others {
    flex-direction: column;
    gap: 1rem;
  }
`;

const TitleProject = styled.p`
  font-size: 3rem;
  font-weight: 700;
`;

const Warning = styled.p`
  font-weight: 600;
  margin: 1rem 0;
  font-size: 1.7rem;
  color: var(--blue);
`;

const DescProject = styled.p`
  font-size: 1.5rem;
  line-height: 2;
  opacity: 0.8;
`;

const Link = styled.a`
  padding: 0.5rem 2rem;
  color: var(--mint);
  font-weight: 700;
  background-color: var(--ligth-gray);
  border-radius: 50rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: 2px solid var(--mint);
  text-decoration: none;
`;

const OtherProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default ProjectsSection;
