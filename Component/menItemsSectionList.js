import React, { useState } from 'react';
import { StyleSheet,View, Text, SectionList,Pressable } from 'react-native';

const menuItemsToDisplay = [
    {
        title:'Appetizers',
        data :['Hummus','Moutabal', 'Falafel','Marinated', 'Olives','Kofta','Eggplant Salad'],
    },
    {
        title:'Main dishes',
        data:['Fries','Buttered','Rice','Bread','Sticks','Pita','Pocket','Lentil','Soup','Greek','Salad','Rice','Pilaf' ],
    },
    {
        title:'sides',
        data:['Lentil','Burger','Smoked','Salmon','Burger','Turkish','Kebab'],
    },
    {
        title:'Deserts',
        data:['Baklava','Tartufo','Tiramisu','Panna','Cotta']
    },   
];

const Separator = () => <View style={mItems.separator} />;
const Header =() => <Text style={mItems.mtStyle}>View Menu</Text>
const Footer =()=>(
    <Text style={mItems.footer}> 
        All rights are reserved by Little Lemon 2022
    </Text>
)

const Item = ({ name }) => (
    <View style={mItems.mvStyle}>
    <Text style={mItems.mtStyle}>{name}</Text>
    </View>
)

const MenuItemsSectionList= ({navigation}) => {
    const [showMenu, setShowMenu]=useState(false);
    const renderItem = ({ item }) => < Item name={item} />;
    const renderSectionHeader =({section:{title}}) =>(
        <Text style={mItems.sectionHeader}>{title}</Text>
    )
  return (
    <View style={mItems.mvStyle}> 
    {!showMenu &&(
        <Text style={mItems.dStyles}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us! View our Menu to explore the cuisines with daily specials!
      </Text>
    )}
      <Pressable style={mItems.button} onPress={() => {setShowMenu(!showMenu);}}>
        <Text style={mItems.buttonText}>{showMenu ? 'Home' : 'Menu'}</Text>
      </Pressable>
    {showMenu && 
    (
    <SectionList 
    sections={menuItemsToDisplay} 
    renderItem={renderItem} 
    renderSectionHeader={renderSectionHeader}
    ItemSeparatorComponent={Separator}
    ListFooterComponent={Footer}></SectionList>   
    )}
    <Pressable onPress={() => navigation.goBack()}>
      <Text style={mItems.buttonText}>Go Back</Text>
    </Pressable>
    </View>
  );
};

export default MenuItemsSectionList;

const mItems=StyleSheet.create({

dStyles:
{
color: 'black',
textAlign:'center',
marginVertical:20,
fontSize:26
},

 mvStyle:
 { flex: 1 },

 sectionHeader:
 { backgroundColor:'yellow',
 fontSize:25,
 textAlign:'center'
},

 msStyle:
 {paddingHorizontal: 40,
  paddingVertical: 40,
  backgroundColor: "black"},

 mtStyle:
 { color: 'black',
 fontSize: 40,
 flexWrap: 'wrap' },

 mttStyle:
 {color: '#F4CE14',
  fontSize: 36 },

separator:
{borderBottomWidth: 1,
borderColor:'black'},

footer:
{backgroundColor:'white',color:'black',
fontSize:20,
flexWrap:'wrap'},

button:
{   fontSize:22,
    padding:10,
    marginVertical:8,
    margin:40,
    backgroundColor:'white',
    borderColor:'white',
    borderWidth:2,
    borderRadius:12
},

buttonText:
{color:'black',
textAlign:'center',
fontSize:32
}
});

