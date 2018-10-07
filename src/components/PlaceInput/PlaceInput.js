import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends Component{

    state = {
        placeName : ""
    };

    //to set display input in textinput
    placeNameChangedHandler = (val) => {
        this.setState({
            placeName: val
        });
    };

    //to save input in array
    placeSubmitHandler = () =>{
        if(this.state.placeName.trim() === ""){
            return;
        }
        //onPlaceAdded is property which will be fired onPress
        //This is property can be used by any Component that implements 
        //PlaceInput component
        this.props.onPlaceAdded(this.state.placeName);
    };
    render(){
        return(
            <View style={styles.inputContainer}>
                <TextInput 
                    style = {styles.placeInput}
                    value = {this.state.placeName}
                    onChangeText = {this.placeNameChangedHandler} />
                
                <Button 
                    title="Add" 
                    style={styles.placeButton} 
                    onPress = {this.placeSubmitHandler} />
            </View>
        );
    }
}

/*const placeInput = (props) => (
    <View style={styles.inputContainer}>
        <TextInput style = {styles.placeInput}
        value = {props.placeName}
        onChangeText = {this.placeNameChangedHandler} />
        
        <Button title="Add" 
            style={styles.placeButton} 
            onPress = {this.placeSubmitHandler} />
    </View>
);
*/
const styles = StyleSheet.create({
    inputContainer:{
        // flex: 1,
        width: "100%",
         flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center"
    },
     
    placeInput:{
    //  borderColor:"black", 
    //  borderWidth: 1,
        width: "70%"
    },
    
    placeButton:{
        width: "30%"
    }
});

export default PlaceInput;