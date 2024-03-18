import React from 'react';
import { StyleSheet,View, Text, FlatList } from 'react-native';

const menuItemsToDisplay = [
    { name: 'Hummus', id: '1A' },
    { name: 'Moutabal', id: '2B' },
    { name: 'Falafel', id: '3C' },
    { name: 'Marinated Olives', id: '4D' },
    { name: 'Kofta', id: '5E' },
    { name: 'Eggplant Salad', id: '6F' },
    { name: 'Lentil Burger', id: '7G' },
    { name: 'Smoked Salmon', id: '8H' },
    { name: 'Kofta Burger', id: '9I' },
    { name: 'Turkish Kebab', id: '10J' },
    { name: 'Fries', id: '11K' },	
    { name: 'Buttered Rice', id: '12L' },
    { name: 'Bread Sticks', id: '13M' },
    { name: 'Pita Pocket', id: '14N' },
    { name: 'Lentil Soup', id: '15O' },
    { name: 'Greek Salad', id: '16Q' },
    { name: 'Rice Pilaf', id: '17R' },
    { name: 'Baklava', id: '18S' },
    { name: 'Tartufo', id: '19T' },
    { name: 'Tartufo', id: '20U' },
    { name: 'Tiramisu', id: '21V' },
    { name: 'Panna Cotta', id: '22W' },
];

const Separator = () => <View style={mItems.separator} />;
const Header =() => <Text style={mItems.mtStyle}>View Menu</Text>
const Footer =()=>(
    <Text style={mItems.footer}> 
        All rights are reserved by Little Lemon 2022
    </Text>
)

const Items = ({ name }) => (
    <View style={mItems.mvStyle}>
    <Text style={mItems.mtStyle}>{name}</Text>
    </View>
);

const MenuItemsFlatList= () => {
    const renderItem = ({ item }) => < Items name={item.name} />;
  return (
    <View style={mItems.mvStyle}>   
        <FlatList
        data={menuItemsToDisplay}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator} 
        ListHeaderComponent={Header}
        ListFooterComponent={Footer}    
        />
    </View>
  );
};

export default MenuItemsFlatList;

const mItems=StyleSheet.create({
 mvStyle:
 { flex: 1 },

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
  fontSize: 36 },

separator:
{borderBottomWidth: 1,
borderColor:'#EDEFEE'},

footer:
{color:'white',
fontSize:20,
flexWrap:'wrap'},
});

