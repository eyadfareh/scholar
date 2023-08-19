/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i4319s8hy8isttb",
    "created": "2023-08-19 16:46:49.187Z",
    "updated": "2023-08-19 16:46:49.187Z",
    "name": "sections",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5tobh7gk",
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
        "id": "fkzy05lo",
        "name": "title",
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
        "id": "kwm3b8lu",
        "name": "notes",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("i4319s8hy8isttb");

  return dao.deleteCollection(collection);
})
