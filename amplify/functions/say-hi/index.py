import json
import time


def handler(event, context):
    name = event.get("arguments", {}).get("name", "World")  # Default to "World"
    time.sleep(5)
    return {
        "hello": f"Hello, {name}!"
    }
