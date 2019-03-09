from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import pypyodbc
import urllib

@app.route('/')
def index():
    return 'Index Page'

@app.route('/hello')
def hello():
    return 'Hello, World'


conDEBUG = "DRIVER={SQL Server};Database=pizza_base;SERVER=tcp:yorkpizzas.database.windows.net,1433';Uid=york2019;Pwd=talkadzhao;"
conDEBUG = urllib.quote_plus(conDEBUG)
conDEBUG = "mssql+pyodbc:///?odbc_connect=%s" % conDEBUG

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = conDEBUG

db = SQLAlchemy(app)

class Orders(db.Model):
    __tablename__ = 'dog_base'

    o_id = db.Column('O_id', db.Integer, primary_key=True)
    name = db.Column('name', db.String)
    item = db.Column('item', db.String)
    kind = db.Column('beef', db.String)
    count = db.Column('count', db.Integer)
    order_total = db.Column('order_total', db.Float)
    amount_paid = db.Column('amount_paid', db.Float)

    def __init__(self, o_id, name, item, kind, count, order_total, amount_paid):
        self.count = count
        self.order_total = order_total
        self.o_id = o_id
        self.name = name
        self.item = item
        self.kind = kind
        self.amdount_paid = amount_paid
