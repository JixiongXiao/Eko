import {Dimensions} from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const originalHeight = 640;

export default function ElementWidth(uiElementH){
    return uiElementH * (deviceHeight/ originalHeight)

}
