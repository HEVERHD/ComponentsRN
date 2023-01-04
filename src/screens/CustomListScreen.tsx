import { SectionList, Text, View, StyleSheet } from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';
import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: 'DC Comics',
        data: [
            'Batman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
            'Batman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
            'Superman',
            'Robin',
            'Batman',
            'Superman',
        ],
    },
    {
        casa: 'Marvel Comics',
        data: [
            'Antman',
            'Thor',
            'Spiderman',
            'Antman',
            'Spiderman',
            'Antman',
            'Spiderman',
            'Antman',
            'Spiderman',
            'Antman',
            'Antman',
            'Thor',
            'Spiderman',
            'Antman',
            'Spiderman',
            'Antman',
            'Spiderman',
            'Antman',
            'Spiderman',
            'Antman',
        ],
    },
    {
        casa: 'Anime',
        data: [
            'Kenshin',
            'Goku',
            'Saitama',
            'Goku',
            'Saitama',
            'Goku',
            'Saitama',
            'Goku',
            'Saitama',
            'Goku',
            'Saitama',
            'Kenshin',
            'Goku',
            'Saitama',
            'Goku',
            'Saitama',
            'Goku',
            'Saitama',
            'Goku',
            'Saitama',
            'Goku',
            'Saitama',
        ],
    },
];

export default function CustomListScreen() {
    const {
        theme: { colors },
    } = useContext(ThemeContext);

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <SectionList
                style={{}}
                sections={casas}
                keyExtractor={(item, index) => item + index}
                ListHeaderComponent={() => <HeaderTitle title="Section List" />}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 50 }}>
                        <HeaderTitle title="Total de elementos" />
                    </View>
                )}
                renderItem={({ item }) => (
                    <Text style={{ color: colors.primary }}>{item}</Text>
                )}
                renderSectionHeader={({ section }) => (
                    <View>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <HeaderTitle title={'total:' + section.data.length} />
                )}
                // SectionSeparatorComponent={() => <ItemSeparator />}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
