import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';
import giveClassesBgImg from '../../assets/images/give-classes-background.png';

function GiveClasses() {

    const { goBack } = useNavigation();

    return (
        <View style={styles.container}>
            <ImageBackground
                source={giveClassesBgImg}
                style={styles.content}
                resizeMode="center"
            >
                <Text style={styles.title}>
                    Quer ser um proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>

            </ImageBackground>
            <RectButton style={styles.okButton} onPress={() => goBack()}>
                <Text style={styles.okButtonText}>
                    Tudo bem
                </Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;