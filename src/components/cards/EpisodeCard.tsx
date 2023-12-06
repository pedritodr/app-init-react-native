import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Result} from '../../interfaces/Episode';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../../constants/style';

const EpisodeCard: React.FC<Result> = (episode: Result) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => {
        navigation.navigate('Episode details', episode);
      }}>
      <Icon name="videocam-outline" size={30} color={'blue'} />
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLocationEpisode}>Nombre:</Text>
        <Text style={styles.textLocationEpisode}>{episode.name}</Text>
      </View>
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLocationEpisode}>Episode:</Text>
        <Text style={styles.textLocationEpisode}>{episode.episode}</Text>
      </View>
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLocationEpisode}>Fecha:</Text>
        <Text style={styles.textLocationEpisode}>{episode.air_date}</Text>
      </View>
      <View style={styles.rowContainerInfo}>
        <Text style={styles.titleLocationEpisode}>Habitantes:</Text>
        <Text style={styles.textLocationEpisode}>
          {episode.characters?.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default EpisodeCard;
