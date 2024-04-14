
// App.js

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const App = () => {
  const [videoUrl, setVideoUrl] = useState('');

  const downloadVideo = async () => {
    try {
      const response = await fetch('http://localhost:5000/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: videoUrl })
      });
      const data = await response.json();
      Alert.alert('Success', data.message);
    } catch (error) {
      Alert.alert('Error', 'Failed to download video');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Enter YouTube video URL"
        onChangeText={text => setVideoUrl(text)}
        value={videoUrl}
      />
      <Button title="Download" onPress={downloadVideo} />
    </View>
  );
}

export default App;
