import _ from 'lodash';
/**
 * Maps all values in an object tree and returns a new object with the same structure as the original.
 * @param {Object} object - The object to map.
 * @param {Function} callback - The function to be called per iteration on any non-object value in the tree.
 *   Callback is invoked with 2 arguments: (value, propertyPath)
 *   propertyPath is the path of the current property, in array format.
 * @returns {Object}
 */
export function deepForEach(object, callback: (value, keyPath: string) => void, propertyPath?: string) {
  propertyPath = propertyPath || '';
  if (_.isArray(object)) {
    _.forEach(object, deepForEachIteratee);
  } else if (_.isObject(object) && !_.isDate(object) && !_.isRegExp(object) && !_.isFunction(object)) {
    _.extend({}, object, _.mapValues(object, deepForEachIteratee));
  } else {
    callback(object, propertyPath);
  }

  function deepForEachIteratee(value, key) {
    const valuePath = propertyPath ? propertyPath + '.' + key : key;
    return deepForEach(value, callback, valuePath);
  }
}
