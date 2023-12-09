import { View, Text, Image, Pressable, StyleSheet, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

const MealItem = ({id, text, imageUrl, duration, complexity, affordability}) => {
    const naviagtion = useNavigation()

    const showDetails = () => {
        naviagtion.navigate('Details', {
            mealId: id
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{color: '#ccc'}}
                style={({pressed}) => [pressed ? styles.buttonPressed : null]}
                onPress={showDetails}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{text}</Text>
                    </View>
                    <MealDetails duration={duration} affordability={affordability} complexity={complexity} />                 
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        overflow: 'hidden',
        borderRadius: 8
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    buttonPressed: {
        opacity: 0.5
    }
}) 