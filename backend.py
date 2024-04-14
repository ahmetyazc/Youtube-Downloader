# backend.py

from flask import Flask, request, jsonify
from pytube import YouTube

app = Flask(__name__)

@app.route('/download', methods=['POST'])
def download_video():
    url = request.json['url']
    yt = YouTube(url)
    video = yt.streams.filter(progressive=True, file_extension='mp4').first()
    video.download('./downloads')
    return jsonify({'message': 'Video downloaded successfully'})

if __name__ == '__main__':
    app.run(debug=True)
