import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {Image} from 'react-native-elements';
import styles from '../constants/style';

const CharacterImage = ({residents}: any) => {
  return (
    <>
      {residents &&
        residents.map((resident: any, index: number) => (
          <View key={index}>
            <Image
              style={styles.characterImg}
              source={{
                uri: `https://rickandmortyapi.com/api/character/avatar/${resident.substring(
                  42,
                )}.jpeg`,
              }}
              PlaceholderContent={
                <ActivityIndicator size={'large'} color={'#0000ff'} />
              }
            />
          </View>
        ))}
    </>
  );
};

export default CharacterImage;
