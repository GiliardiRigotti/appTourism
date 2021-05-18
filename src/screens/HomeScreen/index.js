import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Button, TouchableOpacity } from 'react-native';
import api from '../../services/api'
import Establishment from '../../components/Establishment';

export default function HomeScreen() {
    const [establishment, setEstablishment] = useState([])
    useEffect(() => {
        async function fetchEstablishment() {
            const { data } = await api.get('Picarras');
            console.log(data);
            setEstablishment(data);
        }
        fetchEstablishment();
    }, [])
    return (
        <View>
            <FlatList
                data={establishment}
                renderItem={({ item }) => (
                    <Establishment name={item.Name} price={item.Price} />
                )}
            />
        </View>
    );
}
