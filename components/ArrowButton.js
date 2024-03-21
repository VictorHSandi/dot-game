import {StyleSheet, Image, Pressable} from 'react-native'

export default {
    ArrowButtonLeft: function({greyed}) {
        if(greyed) {
            return(
                <Pressable>
                    <Image 
                    style={styles.buttonLGrey}
                    source={require('../assets/backarrow.png')}/>
                </Pressable>
            );
        }
        else{
            return(
                <Pressable>
                    <Image 
                    style={styles.buttonLeft}
                    source={require('../assets/backarrow.png')}/>
                </Pressable>
            );
        }
    },
    ArrowButtonRight: function ({greyed}) {
        if(greyed) {
            return(
                <Pressable>
                    <Image 
                    style={styles.buttonRGrey}
                    source={require('../assets/backarrow.png')}/>
                </Pressable>
            );
        }
        else{
            return(
                <Pressable>
                    <Image 
                    style={styles.buttonRight}
                    source={require('../assets/backarrow.png')}/>
                </Pressable>
            );
        }
    }
}

const styles = StyleSheet.create({
    buttonLeft: {
        width: 50,
        height: 50,
        margin: 'auto'
    },
    buttonRight: {
        width: 50,
        height: 50,
        margin: 'auto',
        transform: [{rotate: '180deg'}]
    },
    buttonLGrey: {
        tintColor: 'grey',
        width: 50,
        height: 50,
        margin: 'auto'
    },
    buttonRGrey: {
        tintColor: 'grey',
        width: 50,
        height: 50,
        margin: 'auto',
        transform: [{rotate: '180deg'}]
    }
});