import {
  Container,
  Wrapper,
  Title,
  Desc,
  SkillsContainer,
  Skill,
  SkillItem,
  SkillImage,
  SkillList,
  SkillTitle,
  SpacerBottom,
} from "./skills.styled";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <div>
      <Container id="skills">
        <Wrapper>
          {/* <Desc>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </Desc> */}
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem>
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </Wrapper>
      </Container>
      <SpacerBottom />
    </div>
  );
};

export default Skills;
