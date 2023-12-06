import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Result, Status} from '../../interfaces/Characters.interface';
import styles from '../../constants/style';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const CharacterCard: React.FC<Result> = (character: Result) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  const isAlive = (status: Status): string => {
    if (status === 'Alive') return 'green';
    if (status === 'Dead') return 'red';
    return 'gray';
  };

  const goToPage = async (url: any) => {
    const response = await fetch(url);
    const location = await response.json();
    navigation.navigate('Location Character details', location);
  };
  const Character = () => {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Image
          style={{width: '80%', height: 150, borderRadius: 20}}
          source={{uri: character.image}}
        />
        <Text style={styles.title} numberOfLines={1}>
          {character.name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[
              styles.isAlive,
              {backgroundColor: isAlive(character.status)},
            ]}
          />
          <Text style={styles.text}>{character.status}</Text>
        </View>
        <Text style={styles.text}>{character.species}</Text>
      </View>
    );
  };

  const Location = () => (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}>
      <TouchableOpacity
        onPress={() => goToPage(character.origin?.url)}
        style={[styles.btnContainer, {backgroundColor: 'lightgreen'}]}
        disabled={character.origin?.name === 'unknow'}>
        <Text style={styles.title}>Origen</Text>
        <Text>{character.origin?.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => goToPage(character.location?.url)}
        style={[styles.btnContainer, {backgroundColor: 'lightblue'}]}
        disabled={character.origin?.name === 'unknow'}>
        <Text style={styles.title}>Ubicación</Text>
        <Text>{character.location?.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.characterCardContainer}>
      <View style={styles.rowContainer}>
        <Character />
        <Location />
      </View>
    </View>
  );
};

export default CharacterCard;
