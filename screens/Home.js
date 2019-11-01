import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    
} from "react-native";
import {Container, Content, Header, Left, Right, Icon,Item,Input, Card, CardItem} from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import { ScrollView } from "react-native-gesture-handler";
import RecommendedItem from '../components/RecommendedItem';

class Home extends Component {
    render() {
        return (
            <Container>
                 <Header style={{backgroundColor: '#273343', height:80}}>
                 <Left style={{ flexDirection: 'row' }}>
    <Icon  onPress={() => this.props.navigation.openDrawer()}
    name="md-menu" style={{ color: 'white', marginRight: 15 }} />
    <FAIcon name="amazon" style={{fontSize: 32, color: 'white'}} />
</Left>
<Right>
    <Icon name="md-cart" style={{ color: 'white' }} />
</Right>
</Header>
<View
 style={{
   position: 'absolute',
   left: 0,
   right: 0,
   top: 70,
   height: 70,
   backgroundColor: '#273343',
   flexDirection: 'row',
   alignItems: 'center',
   paddingHorizontal: 5,
 }}>
     <TouchableOpacity>
  <View
    style={{
      width: 100,
      backgroundColor: '#e7e7eb',
      height: 50,
      borderRadius: 4,
      padding: 10,
      marginLeft:7
    }}>
    <Text style={{fontSize: 12}}>Shop by</Text>
    <Text style={{fontWeight: 'bold'}}>Category</Text>
  </View>
</TouchableOpacity>
<View
  style={{
    flex: 1,
    height: '100%',
    marginLeft: 5,
    justifyContent: 'center',
  }}>
  <Item
    style={{
      backgroundColor: 'white',
      paddingHorizontal: 10,
      borderRadius: 4,
    }}>
    <Icon name="search" style={{fontSize: 27, paddingTop: 4,color:"grey"}} />
    <Input placeholder="Search" />
    <Icon name="camera" style={{fontSize: 27, paddingTop: 3,color:"grey"}} />
  </Item>
</View>
 </View>
 <Content style={{backgroundColor: '#d5d5d6', marginTop: 60}}>
  <View
    style={{
      height: 40,
      backgroundColor: '#425260',
      flexDirection: 'row',
      paddingHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
    <View style={{flexDirection: 'row'}}>
      <Icon type="MaterialIcons" name="room" style={{fontSize: 22, color:"white"}} />
      <Text style={{color:"white"}}>Select a location to see product availability</Text>
      <Icon type="MaterialIcons" name="expand-more" style={{fontSize: 22,color:"white"}} />
    </View>
  </View>
  <ScrollView>
  <Swiper style={{height: 150}}>
  <View style={{flex: 1}}>
  <Image
               style={{
                 flex: 1,
                 height: null,
                 width: null,
                 resizeMode: 'stretch',
               }}
               source={require('../assets/amazonAd_11.jpg')}
             />
  </View>
  <View style={{flex: 1}}>
  <Image
               style={{
                 flex: 1,
                 height: null,
                 width: null,
                 resizeMode: 'stretch',
               }}
               source={require('../assets/amazonAd_9.jpg')}
             />
  </View>
  <View style={{flex: 1}}>
  <Image
               style={{
                 flex: 1,
                 height: null,
                 width: null,
                 resizeMode: 'stretch',
               }}
               source={require('../assets/amazonAd_8.jpg')}
             />
  </View>
  <View style={{flex: 1}}>
  <Image
               style={{
                 flex: 1,
                 height: null,
                 width: null,
                 resizeMode: 'stretch',
               }}
               source={require('../assets/amazonAd_2.jpg')}
             />
  </View>
  <View style={{flex: 1}}>
  <Image
               style={{
                 flex: 1,
                 height: null,
                 width: null,
                 resizeMode: 'stretch',
               }}
               source={require('../assets/amazonAd_4.jpeg')}
             />
  </View>
</Swiper>

<Card style={{ marginLeft: 5, marginRight: 5 }}>
      <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
         <Text style={{fontSize:20,fontWeight:"400"}}>Related to items you've viewed</Text>
      </CardItem>
      <RecommendedItem
  itemName="The Alchemist"
  itemCreator="Paulo Coelho"
  itemPrice="$2.69"
  savings="2.27"
  imageUri={require('../assets/alchemist.jpg')}
  rating={4}
/>
<RecommendedItem
  itemName="The Monk Who Sold His Ferrari"
  itemCreator="Robin Sharma"
  itemPrice="$1.71"
  savings="1.47"
  imageUri={require('../assets/monk.jpg')}
  rating={4.5}
/>
<RecommendedItem
  itemName="OnePlus 7"
  itemCreator="OnePlus"
  itemPrice="$425"
  savings="42"
  imageUri={require('../assets/oneplus7.png')}
  rating={4}
/>


</Card>
<Card style={{ marginLeft: 5, marginRight: 5 , flexDirection:"column"}}>
      <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' , alignItems:'center',justifyContent:'space-between'}}>
         <Text style={{color:"#0984e3",fontWeight:"400",fontSize:15}}>Check out more games</Text>
         <Icon type="MaterialIcons" name="chevron-right" style={{fontSize: 22,color:"#0984e3"}} />
      </CardItem>
    
      <CardItem cardBody>
  <Image
               style={{
                 flex: 1,
                 height: null,
                 width: null,
                 height:190,
                 resizeMode: 'stretch',
               }}
               source={require('../assets/quiz.jpg')}
             />
  </CardItem>
  </Card>  
<Card style={{ marginLeft: 5, marginRight: 5 , flexDirection:"column"}}>
      <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
         <Text style={{fontSize:20,fontWeight:"400"}}>Inspired by your Wish List</Text>
      </CardItem>
      <RecommendedItem
  itemName="Dre Solo3 Wireless On-Ear Headphones"
  itemCreator="Beats"
  rating={4.5}
  itemPrice="$337.32"
  savings="0.01"
  imageUri={require('../assets/Beats.jpeg')}
  
/>

<RecommendedItem
  itemName="Timex Analog Black Dial Men's Watch"
  itemCreator="Timex"
  rating={4}
  itemPrice="$12.69"
  savings="8.58"
  imageUri={require('../assets/timex.png')}
  
/>
<RecommendedItem
  itemName="The 5 AM Club"
  itemCreator="Robin Sharma"
  rating={4}
  itemPrice="$2.75"
  savings="2.21"
  imageUri={require('../assets/5amClub.jpg')}
  
/>
<RecommendedItem
  itemName="Sell It Like Serhant"
  itemCreator="Ryan Serhant"
  rating={4.5}
  itemPrice="$4.76"
  savings="0.89"
  imageUri={require('../assets/serhant.jpg')}
  
/>

</Card>
</ScrollView>
</Content>

             </Container>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});