import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Button, TouchableOpacity } from 'react-native';

export default function Price({ price }) {
    const [cost, setCost] = useState('')
    switch (price) {
        case 'barato':
            setCost('$');
            break;
        case 'moderado':
            setCost('$$');
            break;
        case 'caro':
            setCost('$$$');
            break;

        default:
            break;
    }
    return (
        <Text>{cost}</Text>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: 50,
        width: 100,
    }

});
