import * as React from 'react';
import * as S from '@styles';

const Homepage = (props: any) => {
    return (
        <>
            <S.GlobalStyle/>
            <S.Home>
                <h1>Welcome to my Homepage</h1>
                <S.DirectoryMenu>
                    <S.MenuItem>
                        <S.Content>
                            <S.Title>JACKETS</S.Title>
                            <S.Subtitle>Shop Now</S.Subtitle>
                        </S.Content>
                    </S.MenuItem>
                    <S.MenuItem>
                        <S.Content>
                            <S.Title>SNEAKERS</S.Title>
                            <S.Subtitle>Shop Now</S.Subtitle>
                        </S.Content>
                    </S.MenuItem>
                    <S.MenuItem>
                        <S.Content>
                            <S.Title>HATS</S.Title>
                            <S.Subtitle>Shop Now</S.Subtitle>
                        </S.Content>
                    </S.MenuItem>
                    <S.MenuItem>
                        <S.Content>
                            <S.Title>WOMENS</S.Title>
                            <S.Subtitle>Shop Now</S.Subtitle>
                        </S.Content>
                    </S.MenuItem>
                    <S.MenuItem>
                        <S.Content>
                            <S.Title>MENS</S.Title>
                            <S.Subtitle>Shop Now</S.Subtitle>
                        </S.Content>
                    </S.MenuItem>
                </S.DirectoryMenu>
            </S.Home>
        </>
    );
}

export default Homepage;
