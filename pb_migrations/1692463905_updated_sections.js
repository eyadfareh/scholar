/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i4319s8hy8isttb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qxybp3xv",
    "name": "chapter",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "qq15m6a7s3vsi1j",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i4319s8hy8isttb")

  // remove
  collection.schema.removeField("qxybp3xv")

  return dao.saveCollection(collection)
})
