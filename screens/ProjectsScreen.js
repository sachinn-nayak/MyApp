import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useIsFocused } from '@react-navigation/native';

export default function ProjectsScreen() {
  const isFocused = useIsFocused(); // Hook to check if the screen is focused

  const projects = [
    {
      title: 'JobConnect',
      description: 'A user-friendly web-based job portal designed for job seekers and employers. Built with HTML, CSS, JavaScript, PHP, and MySQL.',
      sourceCode: 'https://github.com/sachinn-nayak/Job-Connect',
      demoLink: 'https://job-connect-mvim.vercel.app/',
    },
    {
      title: 'PTA - Parent Teacher Association Website',
      description: 'A web-based application for educational institutions that streamlines administration with features like student information management, attendance tracking, and grading.',
      sourceCode: 'https://github.com/sachinn-nayak/PTA',
      demoLink: 'https://pta-zeta.vercel.app/',
    },
    {
      title: 'InnovateHub',
      description: 'InnovateHub is a blog website showcasing my work and thoughts. Built with HTML, CSS, JavaScript, and ReactJS, it provides a sleek, responsive user experience.',
      sourceCode: 'https://github.com/sachinn-nayak/InnovateHub',
      demoLink: 'https://blogsite-dusky.vercel.app/',
    }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {projects.map((project, index) => (
        <Animatable.View
          key={index}
          animation={isFocused ? "fadeInUp" : undefined} // Trigger animation only when focused
          delay={isFocused ? index * 200 : 0} // Delay for each project card
          style={styles.projectCard}
        >
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.projectDescription}>{project.description}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL(project.sourceCode)}
            >
              <Text style={styles.buttonText}>Source Code</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL(project.demoLink)}
            >
              <Text style={styles.buttonText}>Demo Link</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f3e5f5',
    alignItems: 'center',
  },
  projectCard: {
    width: '100%',
    bottom: -30,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  projectDescription: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
