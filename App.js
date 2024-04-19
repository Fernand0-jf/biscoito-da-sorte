import React, { useState } from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

export default function App(){
    const [img,setImg] = useState(require('./src/biscoito.png'));

    return(
    <View style={styles.container}>
        
        <Image
        source={img}
        style={styles.img}
        />

        <Text style={styles.textoFrase}>"Frase biscoito"</Text>
        <TouchableOpacity style={styles.botao} onPress={()=>alert('')}>
            <View style={styles.btnArea}>
                <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
            </View>
        </TouchableOpacity>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:230,
        height:230
    },
    textoFrase:{
        fontSize:20,
        color:'#dd7b22',
        margin:30,
        fontStyle:'italic',
        textAlign:'center'
    },
    botao:{
        width:230,
        heigth:50,
        borderColor:'#dd7b22',
        borderWidth:2,
        borderRadius:25,
    },
    btnArea:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnTexto:{

    }
});