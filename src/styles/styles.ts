import styled from 'styled-components';

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

export const MenuItem = styled.div`
    min-width: 30%;
    height: 240px;
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
`;

export const Content = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
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

