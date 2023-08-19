/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "kcogfbmiukrmlbs",
    "created": "2023-08-19 16:44:20.404Z",
    "updated": "2023-08-19 16:44:20.404Z",
    "name": "courses",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ua6th54q",
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
  const collection = dao.findCollectionByNameOrId("kcogfbmiukrmlbs");

  return dao.deleteCollection(collection);
})
