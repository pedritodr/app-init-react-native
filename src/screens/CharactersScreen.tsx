import React, {useEffect, useRef, useState} from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import styles from '../constants/style';
import {Characters, Result} from '../interfaces/Characters.interface';
import CharacterCard from '../components/cards/CharacterCard';
import ButtonPagination from '../components/ButtonPagination';
import TextSearch from '../components/TextSearch';

const CharactersScreen = () => {
  const initialState = 'https://rickandmortyapi.com/api/character';
  const [page, setPage] = useState<string>(initialState);
  const [characters, setCharacters] = useState<Characters>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');

  const ref = useRef<NodeJS.Timeout>();

  const getCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(page);
      const data = await response.json();
      setCharacters(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getSearchCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${search}`,
      );
      const data = await response.json();
      setCharacters(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  useEffect(() => {
    ref.current && clearTimeout(ref.current);
    ref.current = setTimeout(() => {
      if (search.length) {
        getSearchCharacters();
      } else {
        setPage(initialState);
        getCharacters();
      }
    }, 1000);
  }, [search]);

  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <View style={styles.rowContainer}>
        <ButtonPagination
          url={characters?.info?.prev}
          setPage={setPage}
          icon="chevron-back-outline"
          initialState={initialState}
        />
        <ButtonPagination
          url={characters?.info?.next}
          setPage={setPage}
          icon="chevron-forward-outline"
          initialState={initialState}
        />
      </View>
      <ScrollView>
        <TextSearch placeholder={'Buscar por nombre'} setSearch={setSearch} />
        {characters?.results ? (
          characters.results.map((character: Result) => (
            <CharacterCard key={character.id} {...character} />
          ))
        ) : (
          <Text>{isLoading ? 'Cargando ...' : 'No hay resultados'}</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default CharactersScreen;
