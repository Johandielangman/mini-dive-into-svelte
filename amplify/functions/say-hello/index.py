import json


def handler(event, context):
    # Extract name from event["arguments"] (used in Amplify queries)
    name = event.get("arguments", {}).get("name", "World")  # Default to "World"

    return {
        "statusCode": 200,
        "body": json.dumps({"hello": f"Hello, {name}!"}),
    }
