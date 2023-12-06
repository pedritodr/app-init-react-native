import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import styles from '../constants/style';
import {IEpisode, Result} from '../interfaces/Episode';
import ButtonPagination from '../components/ButtonPagination';
import TextSearch from '../components/TextSearch';
import EpisodeCard from '../components/cards/EpisodeCard';
const EpisodeScreen = () => {
  const initialState = 'https://rickandmortyapi.com/api/episode';
  const [page, setPage] = useState<string>(initialState);
  const [episodies, setEpisodies] = useState<IEpisode>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  const ref = useRef<NodeJS.Timeout>();

  const getEpisodes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(page);
      const data = await response.json();
      setEpisodies(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchEpisodes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode/?name=${search}`,
      );
      const data = await response.json();
      setEpisodies(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEpisodes();
  }, [page]);

  useEffect(() => {
    ref.current && clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      if (search.length) {
        getSearchEpisodes();
      } else {
        setPage(initialState);
        getEpisodes();
      }
    }, 1000);
  }, [search]);

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <View style={styles.rowContainer}>
        <ButtonPagination
          url={episodies?.info?.prev}
          setPage={setPage}
          icon="chevron-back-outline"
          initialState={initialState}
        />
        <ButtonPagination
          url={episodies?.info?.next}
          setPage={setPage}
          icon="chevron-forward-outline"
          initialState={initialState}
        />
      </View>
      <ScrollView>
        <TextSearch placeholder={'Buscar por episode'} setSearch={setSearch} />
        {episodies?.results ? (
          episodies.results.map((episode: Result) => (
            <EpisodeCard key={episode.id} {...episode} />
          ))
        ) : (
          <Text>{isLoading ? 'Cargando ...' : 'No hay resultados'}</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default EpisodeScreen;
