const { ObjectId } = require('mongodb');
const connection = require('./connection');

const registerProduct = async (name, quantity) => {
  const db = await connection();
  const insertData = await db.collection('products').insertOne({ name, quantity });

  return insertData.ops[0];
};

const getProdByName = async (name) => {
  const db = await connection();
  const getProd = await db.collection('products').findOne({ name });
  return getProd;
};

const getProdById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  const db = await connection();
  const getProd = await db.collection('products').findOne(ObjectId(id));
  return getProd;
};

const getAllProducts = async () => {
  const db = await connection();
  const getArrayProducts = await db.collection('products').find().toArray();
  return getArrayProducts;
};

const updateProduct = async (id, name, quantity) => {
  const db = await connection();
  await db.collection('products').updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } });
};

const deleteProduct = async (id) => {
  const db = await connection();
  await db.collection('products').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  registerProduct,
  getProdByName,
  getAllProducts,
  getProdById,
  updateProduct,
  deleteProduct,
};
