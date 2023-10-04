from flask import Flask, render_template, request, redirect, url_for, flash
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
csrf = CSRFProtect(app)

app = Flask(__name__)
app.secret_key = 'sua_chave_secreta'
csrf = CSRFProtect(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        flash('Login bem-sucedido!', 'success')
        return redirect(url_for('index'))

    return render_template('login.html')

@app.route('/cadastro', methods=['GET', 'POST'])
def cadastro():
    if request.method == 'POST':
        flash('Cadastro realizado com sucesso!', 'success')
        return redirect(url_for('index'))

    return render_template('cadastro.html')

if __name__ == '__main__':
    app.run(debug=True)
