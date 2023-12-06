import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {Result} from '../../interfaces/Location.interface';
import LocationCard from '../cards/LocationCard';
import CharacterImage from '../CharacterImage';
import styles from '../../constants/style';

interface Props {
  route: {params: Result};
}

const LocationDetail: React.FC<Props> = ({
  route: {params: location},
}: Props) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <LocationCard {...location} />
        <View style={styles.characterImgContainer}>
          <CharacterImage residents={location.residents} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocationDetail;
