import styled from "styled-components";

export const ContainerProjects = styled.div`
    max-width:900px;
    margin: 0 auto;
    padding-top:50px;

    @media (max-width: 768px) {
        padding-top:10px;
    }
`;

export const Title = styled.h2`
    text-align:center;
    font-size:30px;

    span{
        font-size:40px;
        background: linear-gradient(135deg,#d6ff7f 0%, #00b3cc 100%);
        -webkit-background-clip:text !important;
        -webkit-text-fill-color:transparent !important;
    }
`