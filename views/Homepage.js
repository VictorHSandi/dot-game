import { StyleSheet, Text, View, Pressable } from 'react-native';

//landing page
export default function Homepage() {
    return(
        <View>
         <Text style={styles.title}>Homepage</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        fontFamily: 'Roboto',
        color: '#1A1616'
    },
    container: {
        backgroundColor: '#D9D9D9'
    }
});