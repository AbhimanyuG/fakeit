var utils = require('../../../../utils.js');
var is = require('joi');

module.exports = is.object({
  name: utils.string('Products'),
  type: utils.types.object,
  file: is.string(),
  root: is.string(),
  is_dependency: is.boolean(),
  key: utils.string('_id'),
  data: is.object({
    min: is.number().min(100).max(100),
    max: is.number().min(500).max(500),
    count: is.number().min(100).max(500),
    dependencies: is.array().length(0),
    inputs: is.object().length(0),
  }),
  properties: is.object({
    _id: utils.check('string', 'The document id', { post_build: is.func(), }),
    doc_type: utils.check('string', 'The document type', { value: is.string(), }),
    product_id: utils.check('string', 'Unique identifier representing a specific product', { build: is.func(), }),
    price: utils.check('double', 'The product price', { build: is.func(), }),
    sale_price: utils.check('double', 'The product price', { build: is.func(), post_build: is.func(), }),
    display_name: utils.check('string', 'Display name of product.', { fake: is.string(), }),
    short_description: utils.check('string', 'Description of product.', { fake: is.string(), }),
    long_description: utils.check('string', 'Description of product.', { fake: is.string(), }),
    keywords: utils.check('array', 'An array of keywords', { build: is.func(), }),
    availability: utils.check('string', 'The availability status of the product', { build: is.func(), }),
    availability_date: utils.check('integer', 'An epoch time of when the document was last modified', { fake: is.string(), post_build: is.func(), }),
    product_slug: utils.check('string', 'The URL friendly version of the product name', { post_build: is.func(), }),
    category: utils.check('string', 'Category for the Product', { fake: is.string(), }),
    category_slug: utils.check('string', 'The URL friendly version of the category name', { post_build: is.func(), }),
    image: utils.check('string', 'Image URL representing the product.', { fake: is.string(), }),
    alternate_images: utils.check('array', 'An array of alternate images for the product', { build: is.func(), }),
    created_on: utils.check('integer', 'An epoch time of when the document was first created', { fake: is.string(), post_build: is.func(), }),
    modified_on: utils.check('integer', 'An epoch time of when the document was last modified', { fake: is.string(), post_build: is.func(), }),
  }),
});