import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;
    function navigateToList() {
        navigation.goBack();
    }

    function sendEmail() {

    }

    function sendWpp() {
        Linking.openURL('whatsapp://send?phone=+5547992691973&text=eaeeeeee');
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity style={styles.listButton} onPress={navigateToList}>
                    <Feather name="arrow-left" size={28} color="#e02041" />
                </TouchableOpacity> 
            </View>
            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.nome} de {incident.city}/{incident.uf}</Text>
                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>
                <Text style={styles.incidentProperty}>DESCRICAO:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>
                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{incident.value}</Text>
            </View>
            <View style={styles.contact}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói deste caso.</Text>
                <Text style={styles.heroDescription}>Entre em Contato:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWpp}>
                        <Text style={styles.actionText}>Wpp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={navigateToList}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}