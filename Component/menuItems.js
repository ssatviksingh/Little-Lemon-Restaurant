import React from 'react';
import { StyleSheet,View, Text, ScrollView } from 'react-native';

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItems = () => {
  return (
    <View style={mItems.mvStyle}>
      <ScrollView
      indicatorStyle='white'
        style={mItems.msStyle}>
        <Text style={mItems.mtStyle}>
          View Menu
        </Text>
        <Text style={mItems.mttStyle}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
};

export default MenuItems;

const mItems=StyleSheet.create({
 mvStyle:
 { flex: 0.85 },

 msStyle:
 {paddingHorizontal: 40,
  paddingVertical: 40,
  backgroundColor: "black"},

 mtStyle:
 { color: 'white',
 fontSize: 40,
 flexWrap: 'wrap' },

 mttStyle:
 {color: '#F4CE14',
  fontSize: 36 }
});

