import React, { useState } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import api from '../../services/api';
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

export interface Teacher {
    id: number;
    user_id: number
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    whatsapp: string;
    subject: String;
}

export interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

    const [isFavorited, serIsFavorited] = useState(favorited);

    async function createNewConnection() {

        await api.post('/connections', {
            user_id: teacher.user_id,
        });

        console.log('Conexão criada com sucesso');
    }

    function handleLinkToWhatsapp() {
        createNewConnection();
        Linking.openURL(`whatsapp://send?&phone=+55${teacher.whatsapp}`);
    }

    async function handleToggleFavorite() {
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((item: Teacher) => {
                return item.id === teacher.id;
            });

            favoritesArray.splice(favoriteIndex, 1);
            serIsFavorited(false);

        } else {
            favoritesArray.push(teacher);

            serIsFavorited(true);
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: teacher.avatar }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                {teacher.bio}
            </Text>
            <View style={styles.footer}>
                <Text style={styles.price} >
                    Preço/hora {'     '}
                    <Text style={styles.priceValue}>
                        R$ {teacher.cost}
                    </Text>
                </Text>
                <View style={styles.buttonContainer}>
                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[
                            styles.favoriteButton,
                            isFavorited ? styles.checkFavorite : {}
                        ]}>
                        {isFavorited
                            ? <Image source={unFavoriteIcon} />
                            : <Image source={heartOutLineIcon} />
                        }
                    </RectButton>

                    <RectButton style={styles.contactButton}
                        onPress={handleLinkToWhatsapp}
                    >
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;