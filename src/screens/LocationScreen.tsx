import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import ButtonPagination from '../components/ButtonPagination';
import TextSearch from '../components/TextSearch';
import styles from '../constants/style';
import {ILocation, Result} from '../interfaces/Location.interface';
import LocationCard from '../components/cards/LocationCard';

const LocationScreen = () => {
  const initialState = 'https://rickandmortyapi.com/api/location';
  const [page, setPage] = useState<string>(initialState);
  const [locations, setLocations] = useState<ILocation>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  const ref = useRef<NodeJS.Timeout>();

  const getlocation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(page);
      const data = await response.json();
      setLocations(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchlocation = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location/?name=${search}`,
      );
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getlocation();
  }, [page]);

  useEffect(() => {
    ref.current && clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      if (search.length) {
        getSearchlocation();
      } else {
        setPage(initialState);
        getlocation();
      }
    }, 1000);
  }, [search]);

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <View style={styles.rowContainer}>
        <ButtonPagination
          url={locations?.info?.prev}
          setPage={setPage}
          icon="chevron-back-outline"
          initialState={initialState}
        />
        <ButtonPagination
          url={locations?.info?.next}
          setPage={setPage}
          icon="chevron-forward-outline"
          initialState={initialState}
        />
      </View>
      <ScrollView>
        <TextSearch placeholder={'Buscar por nombre'} setSearch={setSearch} />
        {locations?.results ? (
          locations.results.map((location: Result) => (
            <LocationCard key={location.id} {...location} />
          ))
        ) : (
          <Text>{isLoading ? 'Cargando ...' : 'No hay resultados'}</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default LocationScreen;
