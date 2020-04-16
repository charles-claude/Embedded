
from flask import Flask, url_for, render_template, request
import os
import json

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
        data = request.get_json()
        print(data)
        f = open("bjtubot.conf", "w")
        f.write(json.dumps(data))
        f.close()
        command = os.system('bash run.sh restart')

    return ""
