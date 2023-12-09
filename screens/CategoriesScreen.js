import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native'

const CategoriesScreen = ({navigation}) => {
    const gridTileRender = (itemData) => {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id
            })
        }

        return (
            <CategoryGridTile itemText={itemData.item.title} itemColor={itemData.item.color} onPress={pressHandler} />
        )
    }

    return ( 
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => {
                return item.id
            }}
            renderItem={gridTileRender}
            numColumns={2}
        />
    )
}

export default CategoriesScreen