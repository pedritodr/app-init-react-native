import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Result} from '../../interfaces/Location.interface';
import styles from '../../constants/style';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

const LocationCard: React.FC<Result> = (location: Result) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate('Location details', location);
      }}>
      <Icon name="location-outline" size={30} color={'blue'} />
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLocationEpisode}>Tipo:</Text>
        <Text style={styles.textLocationEpisode}>{location.type}</Text>
      </View>
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLocationEpisode}>Nombre:</Text>
        <Text style={styles.textLocationEpisode}>{location.name}</Text>
      </View>
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLocationEpisode}>Dimensión:</Text>
        <Text style={styles.textLocationEpisode}>{location.dimension}</Text>
      </View>
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLocationEpisode}>Habitantes:</Text>
        <Text style={styles.textLocationEpisode}>
          {location.residents?.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LocationCard;
