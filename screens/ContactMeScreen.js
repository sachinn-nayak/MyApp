import React, { useCallback } from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useFocusEffect } from '@react-navigation/native';

export default function ContactMeScreen() {
  const handlePhonePress = () => {
    Linking.openURL('tel:6364497927');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:sachinnayak9108@gmail.com');
  };

  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/sachin-nayak-169b85288');
  };

  const handleGitHubPress = () => {
    Linking.openURL('https://github.com/sachinn-nayak');
  };

  const handleResumeDownload = () => {
    Linking.openURL('https://drive.google.com/file/d/1_UX5odEi2ZMK-KOw7vKBch6tVKh0KlWS/view?usp=drive_link');
  };

  // Refs for Animatable elements
  const messageRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const linkedInRef = React.useRef(null);
  const gitHubRef = React.useRef(null);
  const resumeRef = React.useRef(null);

  useFocusEffect(
    useCallback(() => {
      // Restart animations when the screen is focused
      if (messageRef.current) messageRef.current.fadeIn(300);
      if (phoneRef.current) phoneRef.current.bounceIn(400);
      if (emailRef.current) emailRef.current.slideInRight(500);
      if (linkedInRef.current) linkedInRef.current.zoomIn(600);
      if (gitHubRef.current) gitHubRef.current.flipInX(700);
      if (resumeRef.current) resumeRef.current.fadeInUp(800);
    }, [])
  );

  return (
    <View style={styles.container}>
      {/* Pink Ellipse - Top Right */}
      <Animatable.View
        animation="bounceIn"
        duration={2000}
        style={styles.pinkEllipse}
      />

      {/* Blue Ellipse - Bottom Left */}
      <Animatable.View
        animation="bounceIn"
        delay={500}
        style={styles.blueEllipse}
      />

      {/* "Feel free to reach out!" message */}
      <Animatable.View ref={messageRef}>
        <Text style={styles.message}>Feel free to reach out!</Text>
      </Animatable.View>

      {/* Contact Number */}
      <Animatable.View ref={phoneRef}>
        <TouchableOpacity onPress={handlePhonePress}>
          <Text style={styles.link}>Contact Number</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* Email */}
      <Animatable.View ref={emailRef}>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={styles.link}>sachinnayak9108@gmail.com</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* LinkedIn */}
      <Animatable.View ref={linkedInRef}>
        <TouchableOpacity onPress={handleLinkedInPress}>
          <Text style={styles.link}>LinkedIn</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* GitHub */}
      <Animatable.View ref={gitHubRef}>
        <TouchableOpacity onPress={handleGitHubPress}>
          <Text style={styles.link}>GitHub</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* Download Resume */}
      <Animatable.View ref={resumeRef}>
        <TouchableOpacity onPress={handleResumeDownload}>
          <Text style={styles.link}>Download Resume</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3e5f5',
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  link: {
    fontSize: 18,
    color: '#1e90ff',
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  pinkEllipse: {
    position: 'absolute',
    width: 250, // 70% of screen width
    height: 250, // 40% of screen height
    borderRadius: 125,
    backgroundColor: '#ff69b4', // Pink color
    top: -100, // Slightly offscreen at the top
    right: -50, // Slightly offscreen to the right
  },
  blueEllipse: {
    position: 'absolute',
    width: 200, // 50% of screen width
    height: 200, // 25% of screen height
    borderRadius: 100,
    backgroundColor: '#007BFF', // Light blue color
    bottom: -100, // Slightly offscreen at the bottom
    left: -50, // Slightly offscreen to the left
  },
});
