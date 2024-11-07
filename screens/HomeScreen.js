import React, { useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation(); // Get the navigation object
    const isFocused = useIsFocused(); // Hook to check if the screen is focused

    // Refs to reference the animated components
    const pinkEllipseRef = useRef(null);
    const blueEllipseRef = useRef(null);
    const profileImageRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    const handleGetStarted = () => {
        navigation.navigate('About Me'); // Navigate to AboutMe screen
    };

    useEffect(() => {
        if (isFocused) {
            // Trigger animations when the screen is focused
            if (pinkEllipseRef.current) pinkEllipseRef.current.bounceIn(1000);
            if (blueEllipseRef.current) blueEllipseRef.current.bounceIn(1500);
            if (profileImageRef.current) profileImageRef.current.bounceIn(2000);
            if (titleRef.current) titleRef.current.fadeIn(2000);
            if (subtitleRef.current) subtitleRef.current.fadeIn(2500);
        }
    }, [isFocused]); // Re-run effect when the tab is focused

    return (
        <View style={styles.container}>
            {/* Pink Ellipse - Top Right */}
            <Animatable.View 
                ref={pinkEllipseRef} 
                animation="bounceIn" 
                duration={2000} 
                style={styles.pinkEllipse} 
            />

            {/* Blue Ellipse - Bottom Left */}
            <Animatable.View 
                ref={blueEllipseRef} 
                animation="bounceIn" 
                delay={500} 
                style={styles.blueEllipse} 
            />

            <Animatable.Image 
                ref={profileImageRef} 
                animation="bounceIn" 
                duration={2000} 
                source={require('../assets/Myimg.jpg')} 
                style={styles.profileImage} 
            />
            <Animatable.Text ref={titleRef} animation="fadeIn" style={styles.title}>Hi, I am Sachin</Animatable.Text>
            <Animatable.Text ref={subtitleRef} animation="fadeIn" delay={500} style={styles.subtitle}>Graduate</Animatable.Text>
            <Animatable.Text ref={subtitleRef} animation="fadeIn" delay={500} style={styles.subtitle}>
                I'm passionate about creating responsive and visually appealing web applications. Recently completed my BCA degree, and I’m actively seeking opportunities in frontend web development.
            </Animatable.Text>
            <Animatable.View animation="pulse" iterationCount="infinite" style={styles.buttonContainer}>
                <Button title="Get Started" color="#ff6347" onPress={handleGetStarted} />
            </Animatable.View>
        </View>
    );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#f3e5f5',
    },
    profileImage: {
        width: 170, 
        height: 170, 
        borderRadius: 85, 
        marginBottom: 20,
        borderWidth: 4, // Border width
        borderColor: '#6C757D', // Border color
        borderStyle: 'solid', // Border style (optional, solid is default)
        overflow: 'hidden', // Ensures content is clipped to the border
    },
    title: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        color: '#333' 
    },
    subtitle: { 
        fontSize: 18, 
        marginVertical: 10, 
        color: '#666',
        fontWeight: 'bold',
    },
    buttonContainer: {
        marginTop: 20,
        width: "25%",
        borderRadius: 10,
        overflow: 'hidden',
    },
    pinkEllipse: {
        position: 'absolute',
        width: width * 0.5, // 50% of screen width
        height: height * 0.25, // 25% of screen height
        borderRadius: 200, 
        backgroundColor: '#ff69b4', // Pink color
        top: -100, // Slightly offscreen at the top
        right: -50, // Slightly offscreen to the right
    },
    blueEllipse: {
        position: 'absolute',
        width: width * 0.5, // 50% of screen width
        height: height * 0.25, // 25% of screen height
        borderRadius: 150, 
        backgroundColor: '#007BFF', // Light blue color
        bottom: -100, // Slightly offscreen at the bottom
        left: -50, // Slightly offscreen to the left
    },
});
