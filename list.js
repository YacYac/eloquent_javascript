function arrayToList(array,list) {
  if (list === undefined) list = {};
  if (array.length === 0) {
    return list
  } else {
    if (list["rest"] === undefined) {
      list["value"] = array.pop();
      list["rest"] = {}
    } else {
      list["rest"] = {value: list["value"], rest: list["rest"]};
      list["value"] = array.pop();
    }
    return arrayToList(array,list);
  }
}

function prepend(element, list) {
  list["rest"] =  {value: list["value"], rest: list["rest"]};
  list["value"] = element;
  return list;
}

function listToArray(list,array) {
  if (array === undefined) array = [];
  if (!("rest" in list)) {
    return array;
  } else {
    array.push(list["value"]);
    list = list["rest"];
    return listToArray(list,array);
  }
}

function nth(list,index,counter) {
  if (counter === undefined) counter = 0;
  if (!("rest" in list)) {
    return undefined;
  } else if (index === counter) {
    return list["value"];
  } else {
    return nth(list["rest"],index,counter + 1);
  }
}

var list = arrayToList([1,2,3,4,5]);
list = prepend(0,list);
console.log(list);
console.log(listToArray(list));
console.log(nth(list,8));
