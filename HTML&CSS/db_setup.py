import sqlite3
from sqlite3 import Error
from typing import Optional
import os
from datetime import datetime

class DatabaseManager:
    def __init__(self, db_file: str = "example.db"):
        """Initialize the database manager with the database file path"""
        self.db_file = os.path.join(os.path.dirname(__file__), db_file)
        self.conn = None

    def connect(self) -> None:
        """Create a database connection"""
        try:
            self.conn = sqlite3.connect(self.db_file)
            print(f"Successfully connected to SQLite database: {self.db_file}")
        except Error as e:
            print(f"Error connecting to database: {e}")
            raise

    def close(self) -> None:
        """Close the database connection"""
        if self.conn:
            self.conn.close()
            print("Database connection closed.")

    def create_tables(self) -> None:
        """Create example tables in the database"""
        try:
            cursor = self.conn.cursor()
            
            # Create Users table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS users (
                    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT NOT NULL UNIQUE,
                    email TEXT NOT NULL UNIQUE,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            ''')

            # Create Products table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS products (
                    product_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    name TEXT NOT NULL,
                    description TEXT,
                    price REAL NOT NULL,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            ''')

            # Create Orders table
            cursor.execute('''
                CREATE TABLE IF NOT EXISTS orders (
                    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
                    user_id INTEGER,
                    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    total_amount REAL NOT NULL,
                    FOREIGN KEY (user_id) REFERENCES users (user_id)
                )
            ''')

            self.conn.commit()
            print("Database tables created successfully")
        except Error as e:
            print(f"Error creating tables: {e}")
            raise

    def add_user(self, username: str, email: str) -> Optional[int]:
        """Add a new user to the database"""
        try:
            cursor = self.conn.cursor()
            cursor.execute('''
                INSERT INTO users (username, email)
                VALUES (?, ?)
            ''', (username, email))
            self.conn.commit()
            return cursor.lastrowid
        except Error as e:
            print(f"Error adding user: {e}")
            return None

    def add_product(self, name: str, description: str, price: float) -> Optional[int]:
        """Add a new product to the database"""
        try:
            cursor = self.conn.cursor()
            cursor.execute('''
                INSERT INTO products (name, description, price)
                VALUES (?, ?, ?)
            ''', (name, description, price))
            self.conn.commit()
            return cursor.lastrowid
        except Error as e:
            print(f"Error adding product: {e}")
            return None

    def get_user(self, user_id: int) -> Optional[tuple]:
        """Retrieve a user by ID"""
        try:
            cursor = self.conn.cursor()
            cursor.execute('SELECT * FROM users WHERE user_id = ?', (user_id,))
            return cursor.fetchone()
        except Error as e:
            print(f"Error retrieving user: {e}")
            return None

    def get_product(self, product_id: int) -> Optional[tuple]:
        """Retrieve a product by ID"""
        try:
            cursor = self.conn.cursor()
            cursor.execute('SELECT * FROM products WHERE product_id = ?', (product_id,))
            return cursor.fetchone()
        except Error as e:
            print(f"Error retrieving product: {e}")
            return None

def main():
    """Example usage of the DatabaseManager class"""
    db = DatabaseManager()
    
    try:
        # Connect to database
        db.connect()
        
        # Create tables
        db.create_tables()
        
        # Add example data
        user_id = db.add_user("john_doe", "john@example.com")
        product_id = db.add_product("Sample Product", "This is a sample product", 29.99)
        
        # Retrieve and display data
        if user_id:
            user = db.get_user(user_id)
            print(f"Added user: {user}")
        
        if product_id:
            product = db.get_product(product_id)
            print(f"Added product: {product}")
            
    except Error as e:
        print(f"An error occurred: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    main() 