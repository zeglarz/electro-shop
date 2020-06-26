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
            <DirectoryMenu>
                <MenuItem>
                    <Content>
                        <Title>JACKETS</Title>
                        <Subtitle>Shop Now</Subtitle>
                    </Content>
                </MenuItem>
                <DirectoryMenu>
                    <MenuItem>
                        <Content>
                            <Title>SNEAKERS</Title>
                            <Subtitle>Shop Now</Subtitle>
                        </Content>
                    </MenuItem>
                </DirectoryMenu>
                <DirectoryMenu>
                    <MenuItem>
                        <Content>
                            <Title>HATS</Title>
                            <Subtitle>Shop Now</Subtitle>
                        </Content>
                    </MenuItem>
                </DirectoryMenu>
                <DirectoryMenu>
                    <MenuItem>
                        <Content>
                            <Title>JACKETS</Title>
                            <Subtitle>Shop Now</Subtitle>
                        </Content>
                    </MenuItem>
                </DirectoryMenu>
                <DirectoryMenu>
                    <MenuItem>
                        <Content>
                            <Title>JACKETS</Title>
                            <Subtitle>Shop Now</Subtitle>
                        </Content>
                    </MenuItem>
                </DirectoryMenu>
            </DirectoryMenu>
        </Home>
    );
}

export default Homepage;
