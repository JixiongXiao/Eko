import {Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const aspectRatio = deviceWidth/deviceHeight;

export default {
    deviceWidth,
    deviceHeight,
    aspectRatio,
}
