from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session, abort
import os
app = Flask(__name__)

# @app.route('/')
# def index():
#     return "Hello World!"

@app.route('/')
def home(): 
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return "Hello !"


@app.route('/login', methods=['POST'])
def do_admin_login():
    if request.form['password'] == 'admin' and request.form['username'] == 'admin':
        session['logged_in'] = True
        return "you logged" 
    else:
        flash('wrong password!')
        return "WRONG"

if __name__ == "__main__":
    app.secret_key = os.urandom(12)
    app.run( debug=True, host='localhost', port=4000)

#     if __name__ == "__main__":
#         app.secret_key = os.urandom(12)
#         app.run(debug=True, host='0.0.0.0', port=4000)
