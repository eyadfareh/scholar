/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bc90uaxbzu7y7ox")

  // remove
  collection.schema.removeField("b2qnefxl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1vktbscj",
    "name": "answer",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bc90uaxbzu7y7ox")

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

  // remove
  collection.schema.removeField("1vktbscj")

  return dao.saveCollection(collection)
})
