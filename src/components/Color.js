import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { getColorFromURL } from 'rn-dominant-color';

const imageUrl = 'http://donapr.com/wp-content/uploads/2016/03/RRUe0Mo.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10
    }
});

class Example extends Component {
    constructor() {
        super();
        this.state = {
            color: '#ffffff',
        };
    }

    componentWillMount() {
        let self = this;
        getColorFromURL(imageUrl).then(colors => {
            this.setState({color: colors.primary})
        })
    }

    render() {
        return (
            <View style={[styles.container, {backgroundColor: this.state.color }]}>
                <Image style={styles.image} source={{ uri: imageUrl}} />
            </View>
        );
    }
}