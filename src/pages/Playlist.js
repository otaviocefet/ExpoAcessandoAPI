import React from 'react'
import {View, Text} from 'react-native';
import { playlistStyle } from '../styles/playlist.style';

const Playlist = () => {
    return (
        <View style={playlistStyle.container}>
            <Text>Playlist</Text>
        </View>
    );
};


export default Playlist;