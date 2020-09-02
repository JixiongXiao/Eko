import device from "./device";

// const welcome = device.aspectRatio<0.512 ? require("../assets/Image/375x812/Intro.jpg") : require("../assets/Image/360x640/Intro.jpg");
// const story = device.aspectRatio<0.512 ? require("../assets/Image/375x812/Story.jpg") : require("../assets/Image/360x640/Story.jpg");
// const home = device.aspectRatio<0.512 ? require("../assets/Image/375x812/Home.jpg") : require("../assets/Image/360x640/Home.jpg");

const welcomeWide= require("../assets/Image/360x640/Intro.jpg");
const welcomeMedium = require("../assets/Image/370x722/Intro.jpg");
const welcomeNarrow = require("../assets/Image/375x812/Intro.jpg");
const storyWide= require("../assets/Image/360x640/Story.jpg");
const storyMedium = require("../assets/Image/370x722/Story.jpg");
const storyNarrow = require("../assets/Image/375x812/Story.jpg");
const homeWide= require("../assets/Image/360x640/Home.jpg");
const homeMedium = require("../assets/Image/375x812/Home.jpg");
const homeNarrow = require("../assets/Image/375x812/Home.jpg");
const recommendWide = require("../assets/Image/360x640/Recommend.jpg");
const recommendMedium = require("../assets/Image/370x722/Recommend.jpg");
const recommendNarrow = require("../assets/Image/375x812/Recommend.jpg");
const timeWide = require("../assets/Image/360x640/Time.jpg");
const timeMedium = require("../assets/Image/370x722/Time.jpg");
const timeNarrow = require("../assets/Image/375x812/Time.jpg");


let welcome,story,home,recommend,time;
if (device.aspectRatio > 0.52894) {
    welcome = welcomeWide;
    story= storyWide;
    home=homeWide;
    recommend=recommendWide;
    time=timeWide;
} else if(0.52894 >= device.aspectRatio && device.aspectRatio >= 0.49538){
    welcome = welcomeMedium;
    story= storyMedium;
    home=homeMedium;
    recommend=recommendMedium;
    time=timeMedium;
} else {
    welcome = welcomeNarrow;
    story= storyNarrow;
    home=homeNarrow;
    recommend=recommendNarrow;
    time=timeNarrow;
}
export default{
    welcome: welcome,
    story:story,
    home:home,
    recommend:recommend,
    time:time,
}
