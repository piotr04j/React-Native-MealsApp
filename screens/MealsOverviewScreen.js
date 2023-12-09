import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const MealsOverviewScreen = ({route, navigation}) => {
    const {categoryId} = route.params

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => {
            return category.id === categoryId
        }).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [categoryId, navigation])

    const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.indexOf(categoryId) !== -1)

    return <MealsList displayedMeals={displayedMeals} />

}

export default MealsOverviewScreen
