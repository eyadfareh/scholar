/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bc90uaxbzu7y7ox")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kpyausve",
    "name": "section",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "i4319s8hy8isttb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b2qnefxl",
    "name": "answer",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bc90uaxbzu7y7ox")

  // remove
  collection.schema.removeField("kpyausve")

  // remove
  collection.schema.removeField("b2qnefxl")

  return dao.saveCollection(collection)
})
