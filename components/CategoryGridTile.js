import { View, Pressable, Text, StyleSheet, Platform } from "react-native"

const CategoryGridTile = ({itemText, itemColor, onPress}) => {
    return (
        <View style={styles.gridItem}>
            <Pressable
                style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
                android_ripple={{color: '#ccc'}}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: itemColor}]}>
                    <Text style={styles.title}>{itemText}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        backgroundColor: '#fff',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})