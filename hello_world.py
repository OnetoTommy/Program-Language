def greet(name: str = "World") -> str:
    """
    A simple greeting function that returns a hello message
    Args:
        name (str): Name to greet, defaults to "World"
    Returns:
        str: The greeting message
    """
    return f"Hello, {name}!"

def main():
    # Simple hello world
    print(greet())
    
    # Greeting with a custom name
    name = input("请输入你的名字 (Enter your name): ")
    print(greet(name))
    
    # Print in Chinese
    print("你好，世界！")

if __name__ == "__main__":
    main() 