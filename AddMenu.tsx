
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TouchableHighlight, FlatList,Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
  
  
   
   export const AddMenu = ({ navigation }) => {
    
  
  const MealCategory = ['Starter','Main','Dessert'];
  const [mealName, setMealName] = useState<string>('');
  const [mealDesc, setMealDesc] = useState<string>('');
  const [mealPrice, setMealPrice] = useState<string>('');
  const [mealCat, setMealCat] = useState<string>('');
  const [mealCreated, setMealsCreated] = useState<MealInputs[]>([]);
  const allMeals = mealCreated.length;
  
  type MealInputs = {
    Meal_Name: string;    
    Meal_Desc: string;
    Meal_Price: number;
    Meal_Cat: string;  
}

const captureData = () => {
  if(mealName && mealDesc && mealPrice && MealCategory) {
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
} else {
  Alert.alert(
    'Did not enter All inforamtion',
    'Please enter all infomration to capture',
    [{text: 'thank you'}]
  );
}

}
  return (
    <SafeAreaView>
    <View>
      <Text style={styles.titleCustom}>Please Add a meal</Text>
      </View>
      <View>
        <Text style={styles.titleCustom2}>Total Meals Created: {allMeals}</Text>
      </View>
     
      <View style={styles.inputListView}> 
      <TextInput style={styles.info} placeholder='Meal Name' value= {mealName} onChangeText={setMealName}></TextInput> 
      <TextInput style={styles.info} placeholder='Meal Description' value= {mealDesc}  onChangeText={setMealDesc}></TextInput> 
      <TextInput style={styles.info} placeholder='Meal Price R ' value= {mealPrice}  onChangeText={setMealPrice}></TextInput> 

      <Picker style={styles.info} selectedValue={mealCat} onValueChange={(itemValue) => setMealCat} >
        {MealCategory.map ((mealCat) => (
          <Picker.Item label = {mealCat} value={mealCat} key={mealCat} />
        ))}

      </Picker>

      <TouchableHighlight style={styles.myButton} onPress={captureData}>
        <Text style={styles.buttonTitle}>Add Meal</Text>
      </TouchableHighlight>
      <View style={styles.menuDesign}>
        <FlatList style = {styles.theList}
        data={mealCreated} keyExtractor={(item, index) => index.toString()} renderItem={({item}) =>(
          <View style = {styles.listOfMeals}>
            <Text style={styles.editText}>Meal : {item.Meal_Name}</Text>
            <Text style={styles.editText}>Meal Description : {item.Meal_Desc}</Text>
            <Text style={styles.editText}>Meal Price in R: {item.Meal_Price}</Text>
            <Text style={styles.editText}>Meal Category: {item.Meal_Cat}</Text>
          </View>
        )}></FlatList>
      </View>
      </View>
      
      
      </SafeAreaView>
    
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
    backgroundColor: 'red',
    margin: 20,
    height: 200,
    opacity: 0.8,
  },
  inputListView: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    marginVertical: 5,
    backgroundColor: '#ADD8E6',
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    height: '100%',
  
  },
  info:{
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: -15,
    borderRadius: 5,
    color: 'black',
    marginTop: 60,
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
    
  
  },
  titleCustom: {
    backgroundColor: '#E30B5C',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 50,
  },
  myButton: {
    backgroundColor: 'white',
    paddingHorizontal: 80,
    marginTop: 40,
    marginVertical: 10,
    paddingVertical: 25,
    borderRadius: 40,
    alignItems: 'center',

  },
  buttonTitle: {
    fontSize: 25,
  },
  theList: {
    maxHeight: 800,
  },
  listOfMeals:{
    flex: 1,
    width:540,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:
    'space-around',
    marginVertical: 10,
    padding: 10,
    marginLeft: 0,
    borderRadius: 10
},
editText: {
  fontStyle: 'normal',
  fontSize: 20,
  fontWeight: 'bold',
  color: 'blue'
},
titleCustom2: {
  backgroundColor: '#E30B5C',
  fontWeight: 'bold',
  textAlign: 'center',
  fontSize: 30,
},
 
  
  
});
  


export default AddMenu;







