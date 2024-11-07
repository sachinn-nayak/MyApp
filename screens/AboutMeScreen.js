import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useIsFocused } from '@react-navigation/native';

export default function AboutMeScreen() {
    const isFocused = useIsFocused(); // Hook to check if the screen is focused

    // Refs to reference the animated components
    const titleRefs = useRef([]);
    const textRefs = useRef([]);

    useEffect(() => {
        if (isFocused) {
            // Trigger animations when the screen is focused
            titleRefs.current.forEach((ref, index) => {
                if (ref) ref.fadeInLeft(100 + index * 100); // Delay for each title
            });
            textRefs.current.forEach((ref, index) => {
                if (ref) ref.fadeInRight(200 + index * 100); // Delay for each text
            });
        }
    }, [isFocused]); // Re-run effect when the tab is focused

    return (
        <View style={styles.container}>
            <Animatable.Text ref={el => (titleRefs.current[0] = el)} style={styles.title}>Frontend Developer</Animatable.Text>
            <Animatable.Text ref={el => (textRefs.current[0] = el)} style={styles.text}>
                I specialize in creating responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and ReactJS. I enjoy bringing designs to life.
            </Animatable.Text>

            <Animatable.Text ref={el => (titleRefs.current[1] = el)} style={styles.title}>Basic Knowledge of Backend & Databases</Animatable.Text>
            <Animatable.Text ref={el => (textRefs.current[1] = el)} style={styles.text}>
                I have basic experience with backend technologies, including Python, Java, PHP, and MySQL databases.
            </Animatable.Text>

            <Animatable.Text ref={el => (titleRefs.current[2] = el)} style={styles.title}>Continuous Learner</Animatable.Text>
            <Animatable.Text ref={el => (textRefs.current[2] = el)} style={styles.text}>
                I'm always learning and improving my skills in frontend development and exploring new technologies.
            </Animatable.Text>

            <Animatable.Text ref={el => (titleRefs.current[3] = el)} style={styles.title}>Mobile Application Development</Animatable.Text>
            <Animatable.Text ref={el => (textRefs.current[3] = el)} style={styles.text}>
                I have a keen interest in React Native Expo and am developing my skills in building mobile applications using this framework.
            </Animatable.Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f3e5f5',
    },
    title: {
        fontSize: 22,
        top: 10,
        fontWeight: 'bold',
        marginTop: 30,
        color: '#333',
    },
    text: {
        fontSize: 16,
        top: 10,
        marginTop: 7,
        color: '#555',
    },
});
