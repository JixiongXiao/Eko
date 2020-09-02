import {Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const originalWidth = 360;

export default function ElementWidth(uiElementW){
    return uiElementW * (deviceWidth/ originalWidth)

}
