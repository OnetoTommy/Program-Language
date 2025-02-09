# Building Python Dashboards with ChatGPT
# https://www.datacamp.com/datalab/w/f6c80906-f70a-440b-95ec-a8be64d1a325/edit
# https://datacamp-1.wistia.com/medias/uxg94e3ct6?wtime=185
# from sqlalchemy import create_engine
import pymysql
import pandas as pd


def get_connection():
    return pymysql.connect(host='127.0.0.1',
                           port=3306,
                           user='root',
                           password='12345678',
                           database="datacamp",
                           charset='utf8mb4')

def query_db(sql):
    conn = get_connection()
    try:
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute(sql)
        return cursor.fetchall()
    finally:
        conn.close()

def insert_db(sql):
    conn = get_connection()
    try:
        cursor = conn.cursor()
        cursor.execute(sql)
        conn.commit()
    finally:
        conn.close()

db = get_connection()
# print("success")
# cursor = db.cursor()
# sql = "CREATE TABLE test(id int, name varchar(20), age int);"
# cursor.execute(sql)
# db.commit()
# cursor.close()
df = query_db('select * from Traffic_Data_2024')
data = pd.DataFrame(df)
print(data.head())


db.close()