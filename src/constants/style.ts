import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    borderRadius: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainerInfo: {
    flexDirection: 'row',
  },
  textInput: {
    fontSize: 15,
    marginTop: 25,
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 50,
  },
  characterCardContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: 350,
    marginVertical: 10,
    borderRadius: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleLocationEpisode: {
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 5,
  },
  textLocationEpisode: {fontSize: 15},
  isAlive: {
    width: 15,
    height: 15,
    borderRadius: 100,
  },
  text: {
    fontSize: 20,
  },
  btnContainer: {
    alignItems: 'center',
    borderWidth: 0.3,
    borderRadius: 10,
    padding: 10,
    minWidth: '80%',
  },
  characterImgContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  characterImg: {
    width: 75,
    height: 75,
    borderRadius: 100,
    marginVertical: 5,
  },
});
