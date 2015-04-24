# CodeTron

A tool to generate code for your apps.


## Usage

create a json file defining your project structure:

```
{
    "name": "My Project",
    "description": "Awesome project.",
    "recipes": [
        {
            "rid": "cakephp2-core"
        },
        {
            "rid": "cakephp2-cms",
            "config": {
                "appName": "Awesome CMS"
            }
        }
    ],
    "models": [
        {
            "name": "Foo",
            "table": "foo",
            "fields": [
                {
                    "name": "id",
                    "primaryKey": true,
                    "type": "integer"
                },
                {
                    "name": "field1",
                    "type": "string",
                    "required": true,
                    "label": "Field 1"
                },
                {
                    "name": "field2",
                    "type": "string",
                    "required": false,
                    "label": "Field 2"
                }
            ]
        }
    ]
}
```


then run `codetron -i project.json` and wait for the magic to happen :)
