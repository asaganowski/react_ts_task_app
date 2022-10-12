export const baseUrl:string = 'https://newdemostock.gopos.pl/'
export const organizationID:string='219'
export const header={
  'Content-Type': 'application/json',
  'Authorization' : `${process.env.REACT_APP_AUTHORIZATION}`
}

 
export function createRequest<T>(endpoint: string, method:string, bodyData:string | null): Promise<T> {
    return fetch(`${baseUrl}ajax/${organizationID}/${endpoint}`, 
    {
        method: method,
        headers: header,
        body:bodyData
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json() as Promise<T>
    })
    .catch((error: Error) => {
      throw error 
    })

  }

export type AllCategoriesData = typeof initCategories;
export const initCategories = {
  "data": [
    {
      "id": 0,
      "uid": "string",
      "name": "string",
      "updated_at": "2022-09-30T06:46:29.512Z",
      "status": "ENABLED"
    }
  ],
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}

export type CategoryData = typeof initCategory;
export const initCategory = {
  "data":
    {
      "id": 0,
      "uid": "string",
      "name": "string",
      "updated_at": "2022-09-30T06:46:29.512Z",
      "status": "ENABLED"
    }
  ,
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}


export type AllProductsSS = typeof initProductsSS
export const initProductsSS = {
  "data": [
    {
      "id": 0,
      "label": "string",
      "value": "string",
      "group": "string"
    }
  ],
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}

export type ProductData = typeof initProductData
export const initProductData ={
  "data": {
    "id": 0,
    "component_id": 0,
    "name": "string",
    "recipe_amount": 0,
    "category_name": "string",
    "product_type": "BASIC",
    "measure_type": "sztuka",
    "components": [
      "string"
    ],
    "product_cost_price_money": {
      "amount": 0,
      "currency": "string",
      "negative": true,
      "zero": true,
      "positive": true
    },
    "product_cost_price_gross_money": {
      "amount": 0,
      "currency": "string",
      "negative": true,
      "zero": true,
      "positive": true
    },
    "last_price_money": {
      "amount": 0,
      "currency": "string",
      "negative": true,
      "zero": true,
      "positive": true
    },
    "last_price_gross_money": {
      "amount": 0,
      "currency": "string",
      "negative": true,
      "zero": true,
      "positive": true
    },
    "reference_price_money": {
      "amount": 0,
      "currency": "string"
    },
    "reference_price_gross_money": {
      "amount": 0,
      "currency": "string"
    }
  },
  "errors": [
    {
      "field": "string",
      "message": "string",
      "code": "string"
    }
  ]
}