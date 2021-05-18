import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Button, TouchableOpacity } from 'react-native';
import Price from '../Price';

export default function Establishment({ name, price }) {

    return (
        <TouchableOpacity>
            <Text>{name}</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: 50,
        width: 100,
    }

});
