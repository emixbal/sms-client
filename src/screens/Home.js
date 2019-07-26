import React from "react";
import { YellowBox , Button, View, Text } from 'react-native';
import io from 'socket.io-client';
import SocketIOClient from 'socket.io-client';
import axios from 'axios';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
])

const socket = io('http://192.168.1.3:3000');

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    kirimPesan(){
        socket.emit('chat:pesan', {nama:"iqbal",pesan:"halo"});
    }

    componentDidMount(){
        axios.get('http://192.168.1.3:3000/users')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          alert(error);
        })
        .finally(function () {
          // always executed
        });
    }

    render() {
        socket.on('chat:pesan', function (DataChat) {
            alert(JSON.stringify(DataChat))
        })

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button
                    title="kirim pesan"
                    onPress={() => this.kirimPesan()}
                />
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

export default Home;