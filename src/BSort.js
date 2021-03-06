(function() {
  var bubble_sort;
  bubble_sort = function(list) {
    var i, j, _ref, _ref2, _ref3;
    for (i = 1, _ref = list.length; 1 <= _ref ? i < _ref : i > _ref; 1 <= _ref ? i++ : i--) {
      for (j = 0, _ref2 = list.length - i; 0 <= _ref2 ? j < _ref2 : j > _ref2; 0 <= _ref2 ? j++ : j--) {
        if (list[j] > list[j + 1]) {
          _ref3 = [list[j + 1], list[j]], list[j] = _ref3[0], list[j + 1] = _ref3[1];
        }
      }
    }
    return list;
  };
  console.log(bubble_sort([3, 2, 1]).join(' ') === '1 2 3');
  console.log(bubble_sort([9, 2, 7, 0, 1]).join(' ') === '0 1 2 7 9');
}).call(this);
