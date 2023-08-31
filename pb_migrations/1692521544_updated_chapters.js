/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qq15m6a7s3vsi1j")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qq15m6a7s3vsi1j")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
