import React, {useState} from 'react';
import MenuItem from "../menu-item/menu-item";
import * as S from "@styles";

interface Sections {
    title: string,
    imageUrl: string,
    size?: string
    id: number,
    linkUrl: string
}

const sectionsBase: Sections[] = [
    {
        title: 'hats',
        imageUrl: '//unsplash.it/501/702',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: '//unsplash.it/503/706',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: '//unsplash.it/505/703',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: '//unsplash.it/500/700',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: '//unsplash.it/503/703',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }
];

const Directory: React.FC = (props) => {
    const [sections, setSections] = useState(sectionsBase);
    return (
        <S.DirectoryMenu>
            {sections.map(section => <MenuItem imageSrc={section.imageUrl} key={section.id}
                                               large={section.size} name={section.title.toUpperCase()}/>)}
        </S.DirectoryMenu>);
}

export default Directory;
