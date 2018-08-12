define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/product/add/:productId",
    "title": "Add product to cart by productId",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"error\": false,\n  \"message\": \"Product Added to Cart \",\n  \"status\": 200,\n  \"data\": {\n      \"quantity\": Number,\n      \"_id\": String,\n      \"productId\": String,\n      \"__v\": Number\n  }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error Occured.,\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductAddProductid"
  },
  {
    "type": "post",
    "url": "/api/v1/product/create",
    "title": "Create product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "releaseDate",
            "description": "<p>Release date of the product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isAvailable",
            "description": "<p>Boolean True/False of the product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n      \"error\": false,\n      \"message\": \"Product Created successfully\",\n      \"status\": 200,\n      \"data\":{\n              \"name\": String,\n              \"description\": String,\n              \"category\": String,\n              \"price\": String,\n              \"releaseDate\": Date,\n              \"isAvailable\": Boolean,\n              \"_id\": String,\n              \"productId\": String,\n              \"__v\": number\n              }\n          }\n      }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error Occured.,\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductCreate"
  },
  {
    "type": "post",
    "url": "/api/v1/product/cart/remove/:productId",
    "title": "Remove product from cart",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"Product removed from Cart \",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n       \"error\": true,\n       \"message\": \"Error Occured.,\n       \"status\": 500,\n       \"data\": null\n      }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductCartRemoveProductid"
  },
  {
    "type": "post",
    "url": "/api/v1/product/:productId/delete",
    "title": "Delete product by productId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n \"error\": false,\n \"message\": \"Product Deleted Successfully\",\n \"status\": 200,\n \"data\": {\n     \"n\": 1,\n     \"ok\": 1\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n     \"error\": true,\n     \"message\": \"Error Occured.,\n     \"status\": 500,\n     \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductProductidDelete"
  },
  {
    "type": "put",
    "url": "/api/v1/product/:productId/edit",
    "title": "Edit product details",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>of the product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n \"error\": false,\n \"message\": \"Product Details Editted Successfully\",\n \"status\": 200,\n \"data\": {\n     \"n\": 1,\n     \"nModified\": 1,\n     \"ok\": 1\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n     \"error\": true,\n     \"message\": \"Error Occured.,\n     \"status\": 500,\n     \"data\": null\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductProductidEdit"
  },
  {
    "type": "get",
    "url": "api/v1/product/all",
    "title": "Get all products",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"error\": false,\n   \"message\": \"All Products Details\",\n   \"status\": 200,\n   \"data\": [\n               {\n       \"name\": String,\n       \"description\": String,\n       \"category\": String,\n       \"price\": String,\n       \"releaseDate\": Date,\n       \"isAvailable\": Boolean,\n       \"_id\": String,\n       \"productId\": String,\n       \"__v\": number\n               }\n           ]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductAll"
  },
  {
    "type": "get",
    "url": "/api/v1/product/:productId",
    "title": "Get a single product",
    "version": "0.0.1",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\"error\": false,\n\"message\": \"Product Details\",\n\"status\": 200,\n\"data\": {\n    \"name\": String,\n    \"description\": String,\n    \"category\": String,\n    \"price\": String,\n    \"releaseDate\": Date,\n    \"isAvailable\": Boolean,\n    \"_id\": String,\n    \"productId\": String,\n    \"__v\": number\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Error Occured.\",\n    \"status\": 500,\n    \"data\": null\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/routes.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductProductid"
  }
] });
