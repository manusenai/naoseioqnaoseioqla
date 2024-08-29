import theme from "@/theme";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import Button from "@/components/Button";
import { Link as ExpoRouterLink } from 'expo-router';

export default function Home() {
    return (
        <ContainerBody>
            <Container>
                <Title>MINHAS</Title>
                <Title>REDAÇÕES</Title>
            </Container>

            <Footer>
                <ButtonContainer href='/(groups)/newRedacao'>
                    <Icone source={require('../../assets/mais.png')} /> 
                </ButtonContainer>

                <ButtonContainer href='/(groups)/novomodelo'>
                    <Icone source={require('../../assets/editor-de-texto.png')} /> 
                </ButtonContainer>
            </Footer>
        </ContainerBody>
    );
}

const ContainerBody = styled.View`
    flex: 1;
    background-color: #F5F5F5;
    align-items: center;
`;

const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #18206f;
    margin-bottom: 8px;
`;

const Container = styled.View`
    flex: 1;
    background-color: #F5F5F5;
    padding: 16px;
    align-items: center;
    margin-top: 40px;
`;

const Footer = styled.View`
    width: 100%;
    position: absolute;
    bottom: 0;
    flex-direction: row;
    justify-content: space-around;
    background-color: #18206f;
    align-items: center;
    height: 90px;
`;

const ButtonContainer = styled(ExpoRouterLink)`
    height: 80px;
    width: 80px;
    align-items: center;
    border-radius: 8px;
    justify-content: center;
    padding-left: 20px;
    margin-top: 20px;
`;

const Icone = styled.Image`
    border-radius: 8px;
    width: 30px;  
    height: 30px;
`;