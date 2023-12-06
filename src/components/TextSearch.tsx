import {TextInput} from 'react-native';
import React from 'react';
import styles from '../constants/style';
interface Props {
  placeholder: string;
  setSearch: (value: string) => void;
}

const TextSearch: React.FC<Props> = ({placeholder, setSearch}: Props) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      onChangeText={value => setSearch(value)}
    />
  );
};

export default TextSearch;
