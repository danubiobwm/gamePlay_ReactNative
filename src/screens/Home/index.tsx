import React from 'react';
import { View } from 'react-native';
import { Background } from '../../components/Background';
import { Profile } from '../../components/Profile';
import {styles} from './styles';

export function Home(){
  return(
    <Background>
      <View>
        <View style={styles.header}>
          <Profile />
        </View>
      </View>
    </Background>
  );
}