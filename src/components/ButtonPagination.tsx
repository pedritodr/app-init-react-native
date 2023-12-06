import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';

interface Props {
  url: string | null | undefined;
  icon: string;
  setPage: (url: string) => void;
  initialState: string;
}
const ButtonPagination: React.FC<Props> = ({
  url,
  icon,
  setPage,
  initialState,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={url === null || undefined ? true : false}
      onPress={() => setPage(url ? url : initialState)}>
      <Icon
        name={icon}
        size={35}
        color={url === null || undefined ? 'gray' : 'green'}
      />
    </TouchableOpacity>
  );
};

export default ButtonPagination;
