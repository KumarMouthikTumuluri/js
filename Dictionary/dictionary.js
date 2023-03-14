export function Dictionary() {
  this.add = add;
  this.datastore = new Array();
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count=count;
  this.clear=clear;
  this.showAllSort=showAllSort;
}
function add(key, value) {
  this.datastore[key] = value;
}

function find(key) {
  return this.datastore[key];
}
function remove(key) {
  delete this.datastore[key];
}
function showAll() {
  for (const [key, value] of Object.entries(this.datastore)) {
    console.log(key+" --> "+value);
  }
}
function count() {
 var n = 0;
 for(var key in Object.keys(this.datastore)) {
 ++n;
 }
 return n;
}
function clear() {
  for (const [key, value] of Object.entries(this.datastore)) {
      delete this.datastore[key];
  }
}

function showAllSort() {
  for (const [key, value] of Object.entries(this.datastore).sort()) {
    console.log(key+ " --> " + this.datastore[key]);
  }
}
