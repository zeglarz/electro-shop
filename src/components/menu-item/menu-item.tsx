import React from 'react';
import * as S from "@styles";

type Props = {
    name: string;
    imageSrc: string,
    large?: string
}


const MenuItem: React.FC<Props> = ({name, imageSrc, large}) => {
    return (
        <S.MenuItem large={large}>
            <S.ImageContainer imageSrc={imageSrc}/>
            <S.Content>
                <S.Title>{name}</S.Title>
                <S.Subtitle>Shop Now</S.Subtitle>
            </S.Content>
        </S.MenuItem>);
};

export default MenuItem;
