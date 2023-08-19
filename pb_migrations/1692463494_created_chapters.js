/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qq15m6a7s3vsi1j",
    "created": "2023-08-19 16:44:54.322Z",
    "updated": "2023-08-19 16:44:54.322Z",
    "name": "chapters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ao6gusgi",
        "name": "number",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "tj7hmsoz",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("qq15m6a7s3vsi1j");

  return dao.deleteCollection(collection);
})
