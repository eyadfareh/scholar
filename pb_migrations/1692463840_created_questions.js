/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bc90uaxbzu7y7ox",
    "created": "2023-08-19 16:50:40.860Z",
    "updated": "2023-08-19 16:50:40.860Z",
    "name": "questions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "b1zlgsfj",
        "name": "text",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "z3otdaek",
        "name": "type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "mutliple choice",
            "exact",
            "number",
            "true or false"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bc90uaxbzu7y7ox");

  return dao.deleteCollection(collection);
})
