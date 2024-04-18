import React,{useState} from 'react';
import {View,Text,Button} from 'react-native';

export default function App(){
    const [nome,setnome] = useState('jorge');
    function entrar(){
        alert('entrou');
    }

    return(
    <View style={{marginTop:25}}>
        <Button title="Mudar Nome" onPress={entrar}/>
        <Text style={{fontSize:19}}>{nome}</Text>
    </View>
    );
}

