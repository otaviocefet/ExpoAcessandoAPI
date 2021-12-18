import React from 'react'
import {View, Text} from 'react-native';
import { playerStyle } from '../styles/player.style';

const Player = () => {
    return (
        <View style={playerStyle.container}>
            <Text>Player</Text>
        </View>
    );
};


export default Player;