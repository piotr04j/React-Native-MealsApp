import { createContext, useState } from "react";

export const FavortiesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})

const FavoritesContextProvider = ({children}) => {
    const [mealIds, setMealIds] = useState([])

    const addFavorite = (id) => {
        setMealIds((prev) => {
            return [...prev, id]
        })
    }
    
    const removeFavorite = (id) => {
        setMealIds((prev) => {
            return prev.filter(item => item !== id)
        })
    }

    const value = {
        ids: mealIds,
        addFavorite,
        removeFavorite
    }

    return <FavortiesContext.Provider value={value}>{children}</FavortiesContext.Provider>
}

export default FavoritesContextProvider
