import { View, Text, StyleSheet } from 'react-native'

const Subtitle = ({children}) => {
    return (
        <View style={styles.subtitleContianer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContianer: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6
    },
    subtitle: {
        color: '#e2b497',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }
})