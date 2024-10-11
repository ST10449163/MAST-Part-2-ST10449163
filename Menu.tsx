
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';



const MenuScreen = ({ navigation }) => {

  const MealCategory = ['Starter','Main','Dessert'];
  const [mealName, setMealName] = useState<string>('');
  const [mealDesc, setMealDesc] = useState<string>('');
  const [mealPrice, setMealPrice] = useState<string>('');
  const [mealCat, setMealCat] = useState<string>('');
  const [mealCreated, setMealsCreated] = useState<MealInputs[]>([]);
  
  type MealInputs = {
    Meal_Name: string;    
    Meal_Desc: string;
    Meal_Price: number;
    Meal_Cat: string;  
}

const captureData = () => {
    const myMeals: MealInputs = {
        Meal_Name: mealName,
        Meal_Desc: mealDesc,
        Meal_Price: parseInt(mealPrice),
        Meal_Cat: mealCat,
    };

    
    setMealsCreated((prevMeals) => [...prevMeals, myMeals]);

    
    setMealName('');
    setMealDesc('');
    setMealPrice('');
    setMealCat('');
};
  return (
    <View>
      <Text style={styles.titleCustom} >Our Meals For Today</Text>
      
      <View style={styles.menuDesign}>
        <FlatList style = {styles.theList}
        data={mealCreated} keyExtractor={(item, index) => index.toString()} renderItem={({item}) =>(
          <View style = {styles.listOfMeals}>
            <Text>Meal: {item.Meal_Name}</Text>
            <Text>Meal: {item.Meal_Desc}</Text>
            <Text>Meal: {item.Meal_Price}</Text>
            <Text>Meal: {item.Meal_Cat}</Text>
          </View>
        )}></FlatList>
      </View>
      <Button
        title="Add Meals"
        onPress={() => navigation.navigate('AddMenu')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  navigation: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuDesign: {
    backgroundColor: 'pink',
    margin: 20,
    height: 500,
    opacity: 0.5,
  },
  inputListView: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    marginVertical: 5,
    backgroundColor: '#ADD8E6',
    marginTop: 50,
    marginBottom: 50,
    padding: 15,
    borderRadius: 30,
  },
  theList: {
    maxHeight: 800,
  },
  listOfMeals:{
    flex: 1,
    width:540,
    backgroundColor: '#BDB5D5',
    alignItems: 'center',
    justifyContent:
    'space-around',
    marginVertical: 10,
    padding: 10,
    marginLeft: 10,
    borderRadius: 10
},
titleCustom: {
  backgroundColor: '#E30B5C',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 50,
},
});

export default MenuScreen;

