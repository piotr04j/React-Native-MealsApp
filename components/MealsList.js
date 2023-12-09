import { View, FlatList, StyleSheet  } from "react-native"
import MealItem from "./MealItem"

const MealsList = ({displayedMeals}) => {
    const renderMealItem = (itemData) => {
        const {affordability, complexity, duration, imageUrl, title, id} = itemData.item
        return (
            <View>
                <MealItem
                    id = {id}
                    text={title}
                    imageUrl={imageUrl}
                    affordability={affordability}
                    duration={duration}
                    complexity={complexity}
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(itemData) => itemData.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsList

const styles = StyleSheet.create({
    container: {
       flex: 1,
       padding: 16 
    }
})