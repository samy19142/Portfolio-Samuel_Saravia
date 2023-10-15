import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeding from "../../svg/linkedin.svg";
import logoWebsite from "../../svg/website.svg";
import logoYoutube from "../../svg/youtube.svg";
const AboutMe = () => {
  const socialNetworks = [
    {
      name: "Github",
      link: "https://github.com/samy19142",
      logo: logoGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/samuel-saravia-7005941a6",
      logo: logoLinkeding,
    },
    {
      name: "Website",
      link: "https://www.udemy.com/user/samuel-armando-saravia/",
      logo: logoWebsite,
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCd67zZidG3lRLNoHwZKtgXQ",
      logo: logoYoutube,
    },
  ];

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>👋Hola, soy</p>
            <p>Samuel Saravia</p>

            <p>Desarrollador Fronted y Backend</p>
            <p>Las tecnologías que utilizo son:</p>
            <ul>
              <li>REACT JS</li>
              <li>C#</li>
              <li>.NET</li>
              <li>JAVA</li>
              <li>VBA</li>
            </ul>
          </S.Title>

          <S.ContainerText>
          <p>Apasionado en el campo de la programación y las nuevas tecnologías.</p>
          </S.ContainerText>

          <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="_blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name}/>
              </a>
            ))}
          </S.ContainerIcons>
        </S.ContainerText>

        <S.ContainerImage>
                <img src="img/Perfil.png" alt="Samuel Saravia"/>
        </S.ContainerImage>

      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
