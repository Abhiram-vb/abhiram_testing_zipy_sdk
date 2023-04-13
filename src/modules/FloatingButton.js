import {Alert} from 'react-native';

import {FAB} from 'react-native-elements';
import React from 'react';
import {deleteData, getData} from './SqlHandling';

const FloatingButton = () => {
  const thisisclicked = () => {
    console.log('this is clicked');

    Alert.alert(
      'Do you want to report any bug',
      'You clicked floating action button you can do below actions',
      [
        {
          text: 'Get Data',
          onPress: () => {
            getData();
          },
        },
        {
          text: 'Drop Table',
          onPress: () => {
            deleteData();
          },
        },
        {
          text: 'Cancle',
          onPress: () => {
            console.log('cancle is clicked');
          },
        },
      ],
      {cancelable: true, onDismiss: () => console.log('alert popup is closed')},
    );
  };
  return (
    <>
      <FAB
        title="Report Bug"
        titleStyle={{backgroundColor: 'red'}}
        placement="right"
        upperCase
        color="red"
        onPress={thisisclicked}
      />
    </>
  );
};

export default FloatingButton;
