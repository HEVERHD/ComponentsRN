import { View, ScrollView, RefreshControl } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export default function PullToRefreshScreen() {
    const {
        theme: { colors },
    } = useContext(ThemeContext);

    const [refresing, setRefresing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefresing(true);

        setTimeout(() => {
            console.log('terminamos');
            setRefresing(false);
            setData('hola mundo');
        }, 2500);
    };

    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refresing}
                    onRefresh={onRefresh}
                    progressViewOffset={380}
                    progressBackgroundColor={colors.border}
                    colors={[colors.primary]}
                />
            }>
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull To Refresh" />
                {data && <HeaderTitle title={data} />}
            </View>
        </ScrollView>
    );
}
