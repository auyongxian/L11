import React from "react";
import {View, Text, TextInput, Button, Alert} from 'react-native';
import {datasource} from "./Data";

const Edit = ({navigation, route}) => {
    const [letter, setLetter] = React.useState(route.params.key);
    const [type, setType] = React.useState(route.params.type);

    return (
        <View style={{marginTop: 40}}>
            <Text>Letter: </Text>
            <TextInput value={letter}              maxLength={1}
                       style={{borderWidth: 1}}
                       onChangeText={(text) => setLetter(text)}
            />
            <View style={{flexDirection: "row"}}>
                <View style={{margin: 10, flex: 1}}>

                </View>
            </View>

            <Button title='Save'
                    onPress={() => {
                        let indexnum = 1
                        if(route.params.type == "Vowels"){
                            indexnum = 0
                        }
                        datasource[indexnum].data[route.params.index].key = letter
                        navigation.navigate("Home")
                    }}/>

            <Button title='Delete' onPress={() => {
                let indexnum = 1;
                if (route.params.type === "Vowels") {
                    indexnum = 0;
                }
                Alert.alert('Confirm Delete', 'Are you sure?', [
                    {
                        text: 'Yes', onPress: () => {
                            datasource[indexnum].data.splice(route.params.index, 1);
                            navigation.navigate('Home');
                        }
                    },
                    {text: 'No'}
                ]);
            }} />

        </View>
    )
}

export default Edit;