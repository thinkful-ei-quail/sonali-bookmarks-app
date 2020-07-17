//this file will export all functions to 

// ******* functions below are for need to be moved to store.js **********
const store = {
  items: [],
  adding: false,
  error: null,
  filter: 0,
};
  
  
  
function updatesLocalStore(item) {
//this is part of object oriented programming
  this.store.items.push(item); 
  console.log(store);
}
  
function getCurrentItemID(targetName) { 
  let targetObj = store.items.find(function(currentItem) {
    return currentItem.title === targetName;});
  return targetObj.id;
}


export default {
  store,
  updatesLocalStore,
  getCurrentItemID
};