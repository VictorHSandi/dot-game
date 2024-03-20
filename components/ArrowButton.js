import {StyleSheet, Image, Pressable} from 'react-native'

export default {
    ArrowButtonLeft: function() {
        return(
            <Pressable>
                <Image 
                style={styles.buttonLeft}
                source={require('../assets/backarrow.png')}/>
            </Pressable>
        );
    },
    ArrowButtonRight: function () {
        return(
            <Pressable>
                <Image 
                style={styles.buttonRight}
                source={require('../assets/backarrow.png')}/>
            </Pressable>
        );
    }
}


const styles = StyleSheet.create({
    buttonLeft: {
        width: 50,
        height: 50,
    },
    buttonRight: {
        width: 50,
        height: 50,
        transform: [{rotate: '180deg'}]
    }
});