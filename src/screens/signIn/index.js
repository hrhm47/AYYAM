import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {app_icons, app_images} from '../../utils';
import {
  fontPixel,
  heightPixel,
  widthPixel,
} from '../../utils/pixelRatio/PixelRatio';

const SignInScreen = () => {
  return (
    <ImageBackground
      source={app_images.background}
      style={styles.container}
      resizeMethod="auto"
      resizeMode="cover">
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'ios' ? 'height' : null}
        // onStartShouldSetResponderCapture={() => setIsUserClicked(false)}
      >
        <ScrollView style={{flex: 1}}>
          <View style={styles.innerContainer}>
            <View style={styles.imageView}>
              <Image source={app_icons.logo} style={styles.logoStyle} />
            </View>
            <View style={styles.headingView}>
              <Text style={styles.header}>Welcome Back!</Text>
              <Text style={styles.subHeader}>Welcome back we missed you</Text>
            </View>

            <LinearGradient
              colors={[
                'rgba(255, 255, 255, 0.08)',
                'rgba(255, 255, 255, 0.06)',
                'rgba(255, 255, 255, 0.02)',
              ]}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.inputLinerStyle}>
              <Image source={app_icons.user} style={styles.iconStyle} />
              <TextInput
                placeholder="Username"
                style={styles.input}
                placeholderTextColor={'#A4A4A4'}
              />
            </LinearGradient>
            <LinearGradient
              colors={[
                'rgba(255, 255, 255, 0.08)',
                'rgba(255, 255, 255, 0.06)',
                'rgba(255, 255, 255, 0.02)',
              ]}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              style={styles.inputLinerStyle}>
              <Image source={app_icons.password} style={styles.iconStyle} />
              <TextInput
                placeholder="*********"
                style={styles.input}
                placeholderTextColor={'#A4A4A4'}
              />
            </LinearGradient>

            <TouchableOpacity style={styles.button}>
              <LinearGradient
                colors={['rgba(0, 0, 0, 1)', 'rgba(198, 86, 71, 1)']}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
                style={styles.buttonGradient}>
                <Text style={styles.buttonText}>Sign in</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <LinearGradient
                colors={['rgba(217, 217, 217, 0)', 'rgba(217, 217, 217, 0.75)']}
                style={styles.divider}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
              />
              <Text style={styles.dividerText}>Or continue with</Text>
              <LinearGradient
                colors={['rgba(217, 217, 217, 0.75)', 'rgba(217, 217, 217, 0)']}
                style={styles.divider}
                start={{x: 0, y: 1}}
                end={{x: 1, y: 1}}
              />
            </View>

            <View style={styles.socialIconView}>
              <ImageBackground
                source={app_icons.card}
                resizeMode="contain"
                style={styles.socialIconStyle}>
                <Image
                  source={app_icons.google}
                  resizeMode="contain"
                  style={styles.socialIconInnerStyle}
                />
              </ImageBackground>
              <ImageBackground
                source={app_icons.card}
                resizeMode="contain"
                style={styles.socialIconStyle}>
                <Image
                  source={app_icons.apple}
                  resizeMode="contain"
                  style={styles.socialIconInnerStyle}
                />
              </ImageBackground>
              <ImageBackground
                source={app_icons.card}
                resizeMode="contain"
                style={styles.socialIconStyle}>
                <Image
                  source={app_icons.facebook}
                  resizeMode="contain"
                  style={styles.socialIconInnerStyle}
                />
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: heightPixel(20),
    flex: 1,
    // backgroundColor: 'black',
  },

  innerContainer: {
    flex:1,
    paddingHorizontal: widthPixel(20),
    borderRadius: heightPixel(10),
    margin: heightPixel(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    alignSelf: 'center',
    marginTop:heightPixel(20),
  },
  logoStyle: {
    width: widthPixel(135),
    height: widthPixel(63),
  },
  headingView: {
    marginTop: heightPixel(30),
  },
  header: {
    fontSize: fontPixel(32),
    color: '#EFEFEF',
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: fontPixel(14),
    fontFamily: 'Poppins-Medium',
    color: '#A4A4A4',
    textAlign: 'center',
    marginBottom: heightPixel(20),
  },
  inputLinerStyle: {
    width: widthPixel(315),
    height: heightPixel(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginVertical: heightPixel(10),
    paddingHorizontal: widthPixel(15),
  },
  input: {
    width: widthPixel(250),
    height: heightPixel(50),
    paddingHorizontal: widthPixel(10),
    color: '',
  },
  iconStyle: {
    width: widthPixel(19),
    height: widthPixel(19),
  },
  button: {
    marginVertical: 20,
  },
  buttonGradient: {
    width: widthPixel(315),
    height: heightPixel(50),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    fontSize: heightPixel(17),
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPixel(5),
  },
  divider: {
    flex: 1,
    height: heightPixel(1),
  },
  dividerText: {
    marginHorizontal: widthPixel(10),
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: heightPixel(11),
  },
  socialIconView: {
    marginTop: heightPixel(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: heightPixel(20),
  },
  socialIconStyle: {
    width: widthPixel(58),
    height: widthPixel(44),
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIconInnerStyle: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
});

export default SignInScreen;
