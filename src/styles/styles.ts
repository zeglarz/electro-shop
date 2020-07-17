import styled, {createGlobalStyle} from 'styled-components';

type Custom1 = {
    imageSrc?: string
}

type Custom2 = {
    large?: string
}

export const Home = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 80px;
`;

export const DirectoryMenu = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ImageContainer = styled.div<Custom1>`
    background-image: ${({imageSrc}) => imageSrc ? `url("${imageSrc}")` : 'none'};
    width:100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &::before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(89,102,115,0.1);
}
`;


export const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
`;


export const MenuItem = styled.div<Custom2>`
    min-width: 30%;
    height: ${({large}) => large ? '500px' : '300px'};
    display: flex;
    flex: auto;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    &:first-child {
    margin-right: 7.5px;
    }
    &:last-child {
    margin-left: 7.5px;
    }
    &:hover ${ImageContainer},
    &:focus ${ImageContainer} {
    transform: scale(1.1);
    transition: all 1.5s ease-in-out;

    }
     &:hover ${ImageContainer}::before,
     &:focus ${ImageContainer}::before {
        -webkit-transition: background-color 1.2s ease;
        -moz-transition: background-color 1.2s ease;
        -ms-transition: background-color 1.2s ease;
        -o-transition: background-color 1.2s ease;
        transition:  background-color 1.2s ease;
        background-color: rgba(89,102,115,0.4);
        display: block;
    }
    overflow: hidden;
    
    &:hover ${Content} {
    transition: background .5s.1s ease-in-out;
    background: rgba(255, 255, 255, 1);
    }
`;


export const Title = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #5b5b5b;
`;

export const Subtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300;700&display=swap');

body {
    margin: 0;
    font-family: 'Open Sans Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

* {
  user-select: none;
}
`;
