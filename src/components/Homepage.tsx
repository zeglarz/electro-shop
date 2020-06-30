import * as React from 'react';
import {
    Home,
    DirectoryMenu,
    MenuItem,
    Content,
    Title,
    Subtitle
} from '../styles/styles';

const Homepage = (props: any) => {
    return (
        <Home>
            <h1>Welcome to my Homepage</h1>
            <DirectoryMenu>
                <MenuItem>
                    <Content>
                        <Title>JACKETS</Title>
                        <Subtitle>Shop Now</Subtitle>
                    </Content>
                </MenuItem>
                <MenuItem>
                    <Content>
                        <Title>SNEAKERS</Title>
                        <Subtitle>Shop Now</Subtitle>
                    </Content>
                </MenuItem>
                <MenuItem>
                    <Content>
                        <Title>HATS</Title>
                        <Subtitle>Shop Now</Subtitle>
                    </Content>
                </MenuItem>
                <MenuItem>
                    <Content>
                        <Title>WOMENS</Title>
                        <Subtitle>Shop Now</Subtitle>
                    </Content>
                </MenuItem>
                <MenuItem>
                    <Content>
                        <Title>MENS</Title>
                        <Subtitle>Shop Now</Subtitle>
                    </Content>
                </MenuItem>
            </DirectoryMenu>
        </Home>
    );
}

export default Homepage;
