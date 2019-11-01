import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import {Icon, Container, Content, Header, Left, Body, Right,List, ListItem} from 'native-base';
import Home from './screens/Home';

const CustomDrawerContentComponent = props => {
  return (
    <Container>
      <Header style={{backgroundColor: '#273343', height: 140}}>
        <Left style={{ flex: 1, flexDirection: 'row', alignItems: 'center',paddingHorizontal:10}}>
          <Icon type="MaterialIcons"name="account-circle" style={{ color: 'white' , fontSize: 35}} />
          <Text style={{ marginLeft: 10, fontSize: 22, color: 'white', fontStyle: 'italic' }}>Hello, Abhishek</Text>
        </Left>
        </Header>
       <Content>
        <FlatList
          data={[
            'Home', 'Shop by Category', "Today's Deals"
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
        <FlatList
          style={{ borderTopWidth: 1, borderTopColor: '#dfe6e9' }}
          data={[
            'Your Orders','Buy Again','Your Wish List', 'Your Account', "Amazon Pay", "Try Prime", "Sell on Amazon"
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
        <FlatList
          style={{ borderTopWidth: 1, borderTopColor: '#dfe6e9' }}
          data={[
            'Settings', 'Customer Service'
          ]}
          renderItem={({ item }) => (
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        />
       </Content>
      
    </Container>
  );
};
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
},
{
  drawerPosition: 'left', 
    contentComponent: CustomDrawerContentComponent
  },
);

export default createAppContainer(MyDrawerNavigator);