from flask import Flask
import socket
app = Flask(__name__)

@app.route('/')
def hello():
    hostname = socket.gethostname()  # Lấy hostname để phân biệt instance
    return f"Hello from Flask on {hostname}!"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)