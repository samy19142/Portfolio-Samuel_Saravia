import * as S from "./Navbar.styles";
import { useState } from "react";
const Navbar = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);

  return (
    <S.ContainerNavbars>
      <S.ContainerLogo>
        <S.ImageLogo src="/img/Logo.png" alt="Logo Samuel Saravia" />
        <div>
         
          <h2>Fronted Developer</h2>
        </div>
      </S.ContainerLogo>

      <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
        <S.BurguerMenu></S.BurguerMenu>
        <S.BurguerMenu></S.BurguerMenu>
        <S.BurguerMenu></S.BurguerMenu>
      </S.ContainerBurguer>

      <S.Containeritems showMenuBurguer={showMenuBurguer}>
        <p>Acerca de mí</p>
        <p>Proyectos</p>
        <S.Button>Contacto 📧</S.Button>
      </S.Containeritems>
    </S.ContainerNavbars>
  );
};

export default Navbar;
