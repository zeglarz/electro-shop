import React from 'react';
import * as S from "@styles";
import {withRouter, RouteComponentProps} from "react-router-dom";


interface Props extends RouteComponentProps<any> {
    name: string;
    imageSrc: string;
    large?: string;
    linkUrl: string;
}


const MenuItem: React.FC<Props> = ({name, imageSrc, large, linkUrl, history, match}) => {
    return (
        <S.MenuItem large={large} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <S.ImageContainer imageSrc={imageSrc}/>
            <S.Content>
                <S.Title>{name.toUpperCase()}</S.Title>
                <S.Subtitle>Shop Now</S.Subtitle>
            </S.Content>
        </S.MenuItem>
    );
};

export default withRouter(MenuItem);
