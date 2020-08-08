import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/core';

import styles from './styles';
import PageHeader from '../../components/PageHeader/index';
import TeacherItem, { Teacher } from '../../components/TeacherItem/index';

function Favorites() {

    const [favorites, setFavorites] = useState<Teacher[]>([]);

    useFocusEffect(() => {
        AsyncStorage.getItem('favorites').then((response) => {

            if (response) {
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        });
    });

    return (
        <View style={styles.container}>
            <PageHeader title="Meus proffys favoritos" />
            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 10,

                }}
            >
                {favorites.map((teacher) =>
                    (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                )}
            </ScrollView>
        </View>
    );
}

export default Favorites;