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
                "appName": "Sample CMS"
            }
        }
    ],
    "models": [
        {
            "name": "Product",
            "table": "products",
            "fields": [
                {
                    "name": "id",
                    "primaryKey": true,
                    "type": "integer"
                },
                {
                    "name": "title",
                    "type": "string",
                    "required": true,
                    "label": "Title"
                },
                {
                    "name": "description",
                    "type": "string",
                    "required": false,
                    "label": "Product Description",
                    "control": "textarea"
                }
            ]
        }
    ]
}
```


then run `codetron -i project.json` and wait for the magic to happen :)
