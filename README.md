# Amazon ( React JS )

## Feature : Keyword search to display realted Products

1. Route for every keyword search using useParams
2. Display keyword related products
3. Filter the products according to category wise

**1. Route for every keyword search using useParams**

`http://localhost:5173/search-product/iphone`

- Whatever enter any item name in navSearchBar, it shows related keywords
- if user selected the keyword among listed keywords that will be used to pass in local url as above.
- Here already setup route for every new keyword we created a page
- from the local url by useParams we capture the keyword in a variable
- based on the keyword we call api

```
let params = useParams();
let keyword = params.searchKeyword;
```

**2. Display keyword related products**

Now keyword is avaible so we able to call api to display related products

```
https://dummyjson.com/products/search?q=keyword

let response = await productSearch(keyword);
console.log(response.data.products)

```

**3. Filter the products according to category wise**

Filter was done based on serval conditions:

_I choose two filters in this project_

1. Price Based
2. Category Based

```
Category ✅ Price ✅
Category ❌ Price ✅
Category ✅ Price ❌
Category ❌ Price ❌
```

```
  useEffect(() => {
    // Filter done based on both filters are true [category filter ✅ price filter ✅]
    if (categoryFilterIndicator === true && priceFilterIndicator === true) {
      if (categorySelected !== undefined && categorySelected !== "") {
        let tempData = [...safeCopyOGData];
        let categoryFilteredProducts = tempData.filter((product) => {
          return product.category == categorySelected;
        });
        if (priceFilterSelected === "High") {
          let priceFilterDone = categoryFilteredProducts.sort((a, b) => {
            return b.price - a.price;
          });
          setData(priceFilterDone);
        }
        if (priceFilterSelected === "Low") {
          let priceFilterDone = categoryFilteredProducts.sort((a, b) => {
            return a.price - b.price;
          });
          setData(priceFilterDone);
        }
      } 
    } 
    // Filter done based on [ category filter ❌ price filter ✅ ]
    else if (
      categoryFilterIndicator === false &&
      priceFilterIndicator === true
    ) {
      if(priceFilterSelected === "High"){
        let tempData = [...safeCopyOGData];
        let priceFilter = tempData.sort((a,b) => {
          return b.price - a.price
        })
        setData(priceFilter)
      }
      if(priceFilterSelected === "Low"){
       let tempData = [...safeCopyOGData];
        let priceFilter = tempData.sort((a,b) => {
          return a.price - b.price
        })
        setData(priceFilter)
      }
    } 
    // Filter done based on [ category filter ✅ price filter ❌ ]
    else if (
      categoryFilterIndicator === true &&
      priceFilterIndicator === false
    ) {
      if (categorySelected !== undefined && categorySelected !== "") {
        let tempData = [...safeCopyOGData];
        let categoryFilteredProducts = tempData.filter((product) => {
          return product.category == categorySelected;
        });
        setData(categoryFilteredProducts);
      } else {
        setData(safeCopyOGData);
      }
    } 
    // Filter done based on [ category filter ❌ price filter ❌ ]
    else {
      console.log("nothing");
      setData(safeCopyOGData);
    }
  }, [priceFilterSelected, categorySelected, safeCopyOGData, priceFilterIndicator, categoryFilterIndicator]);
```
