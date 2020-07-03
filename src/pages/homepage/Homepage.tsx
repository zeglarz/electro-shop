import * as React from 'react';
import * as S from '@styles';
import Directory from "../../components/directory/directory";

const Homepage = (props: any) => {
    return (
        <>
            <S.GlobalStyle/>
            <S.Home>
                <h1>Welcome to my Homepage</h1>
                <Directory/>
            </S.Home>
        </>
    );
}

export default Homepage;
