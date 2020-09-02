import React from 'react';
import {StyleSheet,StatusBar,View,ScrollView,Text,ActivityIndicator,Platform,BackHandler} from 'react-native';
import Icon from "../component/Icon";
import ElementWidth from "../config/ElementWidth";
import ElementHeight from "../config/ElementHeight";
import device from "../config/device";
import colors from "../config/colors";
import AppButton from "../component/AppButton";
import stories from "../config/Story";
import {Audio} from "expo-av";
import AppSlider from "../component/AppSlider";
import LoadingScreen from "../component/LoadingScreen";
import AppText from "../component/AppText";

let _scrollView=null;
let timer;
export default class PlayingScreen extends React.Component {
    // constructor(props) {
    //     super(props);
    state = {
        //story
        storyIndex: this.props.route.params.storyIndex,
        storyIsPlaying: false,
        storyInstance: null,
        currentIndex: 0,
        storyVolume: 0.5,
        storyIsBuffering: true,
        storyDidJustFinish: false,
        //music
        musicIsPlaying: true,
        backgroundMusic: null,
        musicCurrentIndex: 0,
        musicVolume: 0.4,
        musicIsBuffering: true,
        //index
        previousIndex: 0,
        aToward: 0,
        bToward: 0,
        canGoBack:false,
        choiceA:null,
        choiceB:null,
        //screen
        loading:true,
        begin:true,
        showIndicator:false,
        scrollToEnd:false,
    };
//  }
    //background music
    async backgroundMusic() {

        const {storyIndex,musicIsPlaying,musicVolume} =this.state;
        try {
            const backgroundMusic = new Audio.Sound();
            const source = {
                uri: stories[storyIndex].backgroundMusic,
            }

            const status = {
                shouldPlay: musicIsPlaying,
                volume: musicVolume,
            }
            backgroundMusic.setOnPlaybackStatusUpdate(this.musicUpdate)
            await backgroundMusic.loadAsync(source, status, false)
            this.setState({
                backgroundMusic,
            })
        } catch (e) {
            console.log(e)
        }
    }
    async story() {
        const {storyIndex,currentIndex,storyIsPlaying,storyVolume} =this.state;
        try {
            const storyInstance = new Audio.Sound();
            const source = {
                uri: stories[storyIndex].content[currentIndex].uri
            }
            const status = {
                shouldPlay: storyIsPlaying,
                volume: storyVolume
            }
            // update UI
            storyInstance.setOnPlaybackStatusUpdate(this.storyUpdate) ;
            await storyInstance.loadAsync(source, status, false);
            this.setState({
                storyInstance,
                choiceA:stories[storyIndex].content[currentIndex].choiceA,
                choiceB:stories[storyIndex].content[currentIndex].choiceB,
                storyDidJustFinish: false,
            })
        } catch (e) {
            console.log(e)
        }
    }
    BackAndroid =()=>{
        const navigation = this.props.navigation;
        this.storyUnload().then(r =>navigation.navigate("Story") )

    }
    async componentDidMount() {
        if(Platform.OS ==='android'){
            BackHandler.addEventListener("hardwareBackPress", this.BackAndroid);
        }
        try {
            //setting
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                playsInSilentModeIOS: true,
                interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
                shouldDuckAndroid: true,
                staysActiveInBackground: true,
                playThroughEarpieceAndroid: false,
            })
            this.backgroundMusic();
            this.story();
        } catch (e) {
            console.log(e)
        }
    }

    storyUpdate = status => {
        this.setState({
            storyIsBuffering:status.isBuffering,
        });
        if(status.didJustFinish){
            this.setState({
                storyDidJustFinish:status.didJustFinish
            })
            this.storyFinishScrollEnd(_scrollView);
        };
        if(status.isBuffering ===false){
            this.setState({
                showIndicator:false,
            })
        }
    };
    storyFinishScrollEnd=(props)=>{
        let  _scrollView=props;
        if(this.state.storyDidJustFinish ===true){
            _scrollView.scrollToEnd();
            this.setState({
                storyDidJustFinish:false,
            })
        }
    };
    storyPlay = async ()=>{
        const { storyInstance} = this.state;
        await storyInstance.playAsync();
    }
    musicUpdate = status => {
        if(status.isBuffering === false){
            this.setState({musicIsBuffering: status.isBuffering});
            if(this.state.begin ===true){
                this.storyPlay().then(null);
                this.setState({
                    begin :false,
                    storyIsPlaying:true,
                })
            };

        }
        };

    playPause = async () => {
        const { storyIsPlaying,storyInstance,musicIsPlaying,backgroundMusic  } = this.state;
        storyIsPlaying ? await storyInstance.pauseAsync() : await storyInstance.playAsync();
        musicIsPlaying? await backgroundMusic.pauseAsync(): await backgroundMusic.playAsync();
        this.setState({
            storyIsPlaying: !storyIsPlaying,
            musicIsPlaying: !musicIsPlaying,
        })
    };

    goChoiceA= async (props)=>{
        const {storyInstance,storyIndex,currentIndex} =this.state;
        // let _scrollView =props;
        if (storyInstance) {
            this.setState({
                previousIndex:currentIndex,
                canGoBack:true,
                showIndicator:true,
            });
            clearTimeout(timer);
            await storyInstance.unloadAsync();
            this.setState({
                currentIndex: stories[storyIndex].content[currentIndex].aToward,
            });
            this.story();
            // _scrollView.scrollTo({x:0,y:0,animated:true})
        }
    };
    goChoiceB= async (props)=>{
        const {storyInstance,storyIndex,currentIndex} =this.state;
        // let _scrollView =props;
        if (storyInstance) {
            this.setState({
                previousIndex: currentIndex,
                canGoBack:true,
                showIndicator:true,
            });
            clearTimeout(timer);
            await storyInstance.unloadAsync();
            this.setState({
                currentIndex: stories[storyIndex].content[currentIndex].bToward
            })
            this.story();
            // _scrollView.scrollTo({x: 0, y: 0, animated: true})
        }
    };
    goPreviousChoice = async()=>{
        const {storyInstance} =this.state;
        const index = this.state.previousIndex;
        if(storyInstance){
            await storyInstance.unloadAsync();
            this.setState({
                currentIndex:index,
                canGoBack:false,
                showIndicator:true,
            });
            this.story();
        }
    };
    counting =()=> setTimeout(this.goChoiceA,15000);

    goNextChoiceAuto = ()=>{
        if(this.state.storyDidJustFinish){
            timer=this.counting();
    }};


    storyUnload= async() =>{
        let {storyInstance,backgroundMusic} =this.state;
        storyInstance && await storyInstance.unloadAsync();
        backgroundMusic && await backgroundMusic.unloadAsync();
        this.setState({
            storyInstance: null,
            backgroundMusic: null,
        })
    }
    handleStoryVolume=async (value)=>{
        let{storyInstance} = this.state;
        this.setState({
                storyVolume:value
            }
        );
        await storyInstance.setStatusAsync({volume:this.state.storyVolume});
    };
    handleMusicVolume=async (value)=>{
        let{backgroundMusic} = this.state;
        this.setState({
                musicVolume:value
            }
        );
        await backgroundMusic.setStatusAsync({volume:this.state.musicVolume});
    };


    render(){
        const navigation = this.props.navigation;
        // this.storyFinishScrollEnd(_scrollView);
        this.goNextChoiceAuto();
        return(
            <View style={styles.background}>
                <StatusBar hidden={true}/>
       {
           this.state.musicIsBuffering ?
               <LoadingScreen visible={true} />
           :
            <View style={{alignItems:'center'}}>
            <View style={styles.iconContainer}>
                <View style={styles.backContainer}>
                    {this.state.canGoBack &&<Icon style={{left:10,width:ElementWidth(30),height:ElementHeight(30)}}
                                       source={require('../assets/Image/Icons/16px/Arrow-Outline-Left.png')}
                                       onPress={this.goPreviousChoice}
                    />  }
                </View>
                <Text style={styles.title}>
                    {stories[this.state.storyIndex].title}
                </Text>
                <Icon style={{right:12,}}
                      source={require('../assets/Image/Icons/24px/Home.png')}
                      onPress={()=>{this.storyUnload().then(r =>navigation.navigate("Story") );}}
                />
            </View>
            <View style={styles.textContainer}>
                {  this.state.showIndicator?
                <ActivityIndicator animating={true}
                                   color={colors.secondary}
                                   size='large'
                                   style={styles.activityIndicator}/>:
            <ScrollView
            ref={scrollView=>_scrollView=scrollView}
            showVerticalScrollIndicator={true}
            indicatorStyle={colors.white}
            >
                    <AppText style={styles.text}>
                        {stories[this.state.storyIndex].content[this.state.currentIndex].text}
                    </AppText>
                {this.state.choiceA &&
                    < View style={{alignItems:'center'}}>
                    <AppButton title={this.state.choiceA}
                    onPress={()=>this.goChoiceA(_scrollView)}
                    />
                    {this.state.choiceB &&
                    <AppButton title={this.state.choiceB}
                    onPress={() => this.goChoiceB(_scrollView)}
                    />}
                    </View>

                }
            </ScrollView>
                }
        </View>
            <View style={styles.buttonContainer}>
                <Icon style={styles.playButton}
                      onPress={this.playPause}
                    source={this.state.storyIsPlaying ? require("../assets/Image/Icons/24px/Pause.png"):require("../assets/Image/Icons/24px/play-button.png")} />

            </View>
                <View style={styles.sliderContainer}>
                    <AppText style={styles.text}>Voice</AppText>
                    <AppSlider
                    volume={this.state.storyVolume}
                    onValueChange={this.handleStoryVolume}
                    />
                    <AppText style={styles.text}>Music</AppText>
                    <AppSlider
                        volume={this.state.musicVolume}
                        onValueChange={this.handleMusicVolume}
                    />
                </View>
            </View>
       }
            </View>


        )}
}

const styles = StyleSheet.create({
    background:{
        backgroundColor:"#4864E6",
        flex:1,
        alignItems: 'center',
    },
    iconContainer:{
        width:device.deviceWidth,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        top:ElementHeight(15),
        marginBottom:ElementHeight(3),
    },
    backContainer:{
        left:12,
        width:ElementWidth(30),
        height:ElementHeight(30)
    },
    title:{
        fontSize:ElementWidth(19),
        color:colors.white,
        fontWeight:'bold',
        left:ElementWidth(2),
    },
    textContainer:{
        top:ElementHeight(16),
        width:ElementWidth(275),
        height:ElementHeight(390),
        alignItems:'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:ElementWidth(19),
        color:colors.white,
        alignItems:'center',
        fontWeight: '600',
    },
    activityIndicator:{

    },
    buttonContainer:{
        marginTop:ElementHeight(25),
    },
    playButton:{
        marginTop:ElementHeight(5),
        width:ElementWidth(30),
        height:ElementHeight(36),
    },
    sliderContainer:{
    }
})


