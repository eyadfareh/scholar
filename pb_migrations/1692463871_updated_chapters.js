/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qq15m6a7s3vsi1j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c9ru7yd6",
    "name": "chapter",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "kcogfbmiukrmlbs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qq15m6a7s3vsi1j")

  // remove
  collection.schema.removeField("c9ru7yd6")

  return dao.saveCollection(collection)
})
