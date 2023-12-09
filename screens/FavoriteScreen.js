import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FavortiesContext } from '../store/context/favorites-context'
import MealsList from '../components/MealsList'
import { MEALS } from '../data/dummy-data'

const FavoriteScreen = () => {
    const favoriteMealsContext = useContext(FavortiesContext)
    const favoriteMeals = MEALS.filter(item => favoriteMealsContext.ids.includes(item.id))

    if(favoriteMeals.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You have no favroite meals yet.</Text>
            </View>
        )
    }
    
    return (
        <MealsList displayedMeals={favoriteMeals} />
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ff'
    }
})