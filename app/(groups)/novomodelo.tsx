import React, { useState, useEffect } from 'react';
import { View, Alert, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Input from '@/components/Input';
import InputRedacao from '@/components/InputRedacao';
import { Link as ExpoRouterLink } from 'expo-router';
import theme from '@/theme';
import apiConfig from '../../api/axios';
import Modelos from './newRedacao';

export default function Home() {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const [height, setHeight] = useState(30);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ContainerBody>
<Pressable style={estilo.botaosalvar}><Text style={{color: '#fff'}}>Salvar</Text></Pressable>
                <Container>
                    <Input style={{marginTop:-90}} placeholder="Título" />
                    <InputRedacao 
                        placeholder="Escreva sua redação..."
                        multiline={true}
                        style={{ height, borderWidth: 1, padding: 10, marginBottom: 60 }}
                        onContentSizeChange={(event) => {
                            const lines = Math.floor(event.nativeEvent.contentSize.height / 22.5);
                            setHeight(event.nativeEvent.contentSize.height);
                            if (lines == 30) Alert.alert('Aviso', 'Você atingiu 30 linhas!');
                        }}
                    />
                </Container>
                {!keyboardVisible && (
                    <Footer>
                        <ButtonContainer href='/(groups)'>
                            <Icone source={require('../../assets/botao-de-inicio.png')} /> 
                        </ButtonContainer>
                        <ButtonContainer href='/(groups)'>
                            <Icone source={require('../../assets/editor-de-texto.png')} /> 
                        </ButtonContainer>
                    </Footer>
                )}
            </ContainerBody>
        </KeyboardAvoidingView>
    );
}

const ContainerBody = styled.View`
    flex: 1;
    background-color: #F5F5F5;
`;

const Container = styled.View`
    flex: 1;
    background-color: #F5F5F5;
    padding: 16px;
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

const estilo = StyleSheet.create({

botaosalvar:{
    marginLeft:300, 
    marginTop: 60, 
    backgroundColor: '#18206f', 
    paddingBottom: 13,
    paddingTop: 13,
    width: 80,
    alignItems: 'center',
    borderRadius: 10
}

})