import React, { Component } from 'react'

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Bweet from '../components/Bweet'
import api from '../services/api'

export default class Timeline extends Component {
    static navigationOptions = {
        title: 'Início',
        headerRight: (
            <TouchableOpacity onPress={() => { }}>
                <Icon
                    style={{ marginRight: 20 }}
                    name="add-circle-outline"
                    size={24}
                    color="#4BB0EE"
                />
            </TouchableOpacity>
        )
    }

    state = {
        bweets: [],
    }

    /**
     * Buscará todos os dados de API's quando montar o componente
     */
    async componentDidMount() {
        const response = await api.get('bweets')

        this.setState({ bweets: response.data })
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.bweets}
                    keyExtractor={bweet => bweet._id}
                    renderItem={({ item }) => <Bweet bweet={item}></Bweet>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    }
});