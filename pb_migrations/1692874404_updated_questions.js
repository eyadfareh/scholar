/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bc90uaxbzu7y7ox")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z3otdaek",
    "name": "type",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "exact",
        "multiple choice",
        "memory"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bc90uaxbzu7y7ox")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
