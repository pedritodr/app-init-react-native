import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Result} from '../../interfaces/Episode';
import styles from '../../constants/style';
import CharacterImage from '../CharacterImage';
import EpisodeCard from '../cards/EpisodeCard';
interface Props {
  route: {params: Result};
}
const EpisodeDetail: React.FC<Props> = ({route: {params: episode}}: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <EpisodeCard {...episode} />
        <View style={styles.characterImgContainer}>
          <CharacterImage residents={episode.characters} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EpisodeDetail;
