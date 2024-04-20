import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';

export default function App(){
    

    const [img,setImg] = useState(require('./src/biscoito.png'));
    const [textoFrase,setTextoFrase] = useState('');

    let frases = [
        "Hoje é um bom dia para tentar algo novo!",
        "Confie na sua intuição.",
        "Uma oportunidade excitante surgirá em breve.",
        "Sua habilidade de superar desafios é impressionante.",
        "A sorte favorece o corajoso.",
        "Mantenha o foco, mantenha o rumo.",
        "Você encontrará o caminho se mantiver a mente aberta.",
        "A persistência é o caminho do êxito.",
        "Sua felicidade será encontrada ao seguir seu coração.",
        "Aproveite as oportunidades que estão diante de você."
    ];

    function quebraBiscoito(){
        let numeroAleatorio = Math.floor(Math.random() * frases.length)
        setTextoFrase(' " ' +frases[numeroAleatorio]+ ' " ');
        setImg(require('./src/biscoitoAberto.png'))
    }

    function reiniciarBiscoito(){
        setTextoFrase('');
        setImg(require('./src/biscoito.png'));
    }

    return(
    <View style={styles.container}>
        
        <Image
        source={img}
        style={styles.img}
        />

        <Text style={styles.textoFrase}>{textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
            <View style={styles.btnArea}>
                <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.botao,{marginTop:15, borderColor:'#121212'}]} onPress={reiniciarBiscoito}>
            <View style={styles.btnArea}>
                <Text style={[styles.btnTexto,{color:'#121212'}]}>Reiniciar Biscoito</Text>
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
        borderRadius:25
    },
    btnArea:{
        flex:0,
        justifyContent:'center',
        alignItems:'center'
    },
    btnTexto:{
        fontSize:17,
        fontWeight:'bold',
        color:'#dd7b22'
    }
});