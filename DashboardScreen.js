import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const [books, setBooks] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch data from the Google Books API
    fetch('https://www.googleapis.com/books/v1/volumes?q=react%20native&maxResults=30')
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.items || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDownload = (bookId) => {
    // Implement your download logic here
    console.log(`Downloading book with ID: ${bookId}`);
    // You can add the download logic based on your requirements.
  };

  const handleLogout = () => {
    // Implement logout logic here
    // For simplicity, this example just navigates to the login screen
    navigation.navigate('Login');
  };

  const renderBookItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image
        source={{ uri: item.volumeInfo.imageLinks?.thumbnail }}
        style={styles.bookImage}
      />
      <Text style={styles.bookTitle}>{item.volumeInfo.title}</Text>
      <TouchableOpacity
        style={styles.downloadButton}
        onPress={() => handleDownload(item.id)}
      >
        <Text style={styles.buttonText}>Download</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={renderBookItem}
        contentContainerStyle={styles.flatListContent}
      />
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={[styles.buttonText, { color: '#fff' }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  flatListContent: {
    alignItems: 'stretch',
  },
  bookContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  bookImage: {
    width: 80,
    height: 120,
    borderRadius: 4,
    marginBottom: 8,
  },
  bookTitle: {
    textAlign: 'center',
  },
  downloadButton: {
    marginTop: 8,
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 4,
    marginTop: 16,
  },
});

export default DashboardScreen;
