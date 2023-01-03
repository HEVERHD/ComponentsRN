import { View, ScrollView, RefreshControl } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import { useState } from 'react';

export default function PullToRefreshScreen() {
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
                    progressBackgroundColor="#d19fff"
                    colors={['#ffffff', '#b97900', '#e100ff']}
                />
            }>
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull To Refresh" />
                {data && <HeaderTitle title={data} />}
            </View>
        </ScrollView>
    );
}
