import React from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

function App () {

 function onSuccess(e){
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };
  
    return (
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.auto}
        showMarker={true}
        markerStyle={{borderColor:"white" , borderWidth:5}}
        reactivate={true}
        topContent={
          <Text style={styles.centerText}>
            Please move the camera over the QR code
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
        topViewStyle={{
          backgroundColor:"white",
        }}
        bottomViewStyle={{
          backgroundColor:"white",
          height:200
        }}
      />
    );
  }


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    color:"black",
    textAlign:"center",
    padding:30,
    marginTop:20
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  }
});

export default App