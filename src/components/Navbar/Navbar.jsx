import * as S from "./Navbar.styles";
import { useState } from "react";


const Navbar = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);

const clickItemNav =(item)=>{
  document.getElementById(item).scrollIntoView({behavior:'smooth'});
}

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
        <p onClick={()=>clickItemNav('about-me')}>Acerca de mí</p>
        <p onClick={()=>clickItemNav('projects')}>Proyectos</p>
        <S.Button onClick={()=>clickItemNav('contact')}>Contacto 📧</S.Button>
      </S.Containeritems>
    </S.ContainerNavbars>
  );
};

export default Navbar;
