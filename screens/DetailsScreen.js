import { View, Image, Text, StyleSheet, ScrollView } from 'react-native'
import { useContext, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/Subtitle'
import List from '../components/List'
import IconButton from '../components/IconButton'
import { FavortiesContext } from '../store/context/favorites-context'

const DetailsScreen = ({route, navigation}) => {
    const {mealId} = route.params
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    const {imageUrl, title, duration, affordability, complexity} = selectedMeal

    const favoriteMealsContext = useContext(FavortiesContext)

    const mealsIsFavorite = favoriteMealsContext.ids.includes(mealId)

    const changeFavoriteStatusHandler = () => {
        if(mealsIsFavorite) {
            favoriteMealsContext.removeFavorite(mealId)
        } else {
            favoriteMealsContext.addFavorite(mealId)
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onTap={changeFavoriteStatusHandler} icon={mealsIsFavorite ? 'star': 'star-outline'} color='#fff'/>
            }
        })
    }, [navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.contianer}>
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={styles.title}>
                {title}
            </Text>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability} style={{}} textStyle={{color: '#fff'}}/>
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingridients</Subtitle>
                    <List list={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List list={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default DetailsScreen

const styles = StyleSheet.create({
    contianer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#fff'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})