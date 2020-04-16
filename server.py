
from flask import Flask, url_for, render_template, request
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/config', methods=['GET', 'POST'])
def config():

    if (request.method == 'GET'):
        if (not os.path.exists(file_name)):
            return ({})
        else:
            f = open("bjtubot.conf", "r")
            return (f.read())
        
    elif (request.method == 'POST'):
        data = request.form
        f = open("bjtubot.conf", "w")
        f.write(data)
        f.close()
        command = os.popen('./run.sh restart')
    return ""
