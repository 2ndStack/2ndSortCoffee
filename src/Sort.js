(function() {
  var NilaiRating, Sorter, basisData, sorted, sorter, x, y, _i, _j, _len, _len2;
  NilaiRating = (function() {
    function NilaiRating(id, jk, rat) {
      this.id = id;
      this.jk = jk;
      this.rat = rat;
    }
    NilaiRating.prototype.show = function() {
      return "Id :" + this.id + ",\tJk: " + this.jk + ",\tRat: " + this.rat + " ";
    };
    return NilaiRating;
  })();
  Sorter = (function() {
    function Sorter() {}
    Sorter.prototype.sortByRating = function(basisData) {
      var holder, i, j, _ref, _ref2;
      for (i = 1, _ref = basisData.length; 1 <= _ref ? i < _ref : i > _ref; 1 <= _ref ? i++ : i--) {
        for (j = 0, _ref2 = basisData.length - i; 0 <= _ref2 ? j < _ref2 : j > _ref2; 0 <= _ref2 ? j++ : j--) {
          if (basisData[j].rat > basisData[j + 1].rat) {
            holder = basisData[j + 1];
            basisData[j + 1] = basisData[j];
            basisData[j] = holder;
          }
        }
      }
      return basisData;
    };
    return Sorter;
  })();
  basisData = [new NilaiRating(1, 'p', 5), new NilaiRating(2, 'w', 2), new NilaiRating(3, 'w', 4), new NilaiRating(4, 'w', 1), new NilaiRating(5, 'w', 2), new NilaiRating(6, 'p', 4), new NilaiRating(7, 'p', 3), new NilaiRating(8, 'p', 4), new NilaiRating(9, 'p', 1), new NilaiRating(10, 'w', 5), new NilaiRating(11, 'w', 3), new NilaiRating(12, 'w', 1), new NilaiRating(13, 'w', 1), new NilaiRating(14, 'p', 4), new NilaiRating(15, 'p', 5), new NilaiRating(16, 'w', 3), new NilaiRating(17, 'p', 3), new NilaiRating(18, 'w', 4), new NilaiRating(19, 'p', 2), new NilaiRating(20, 'w', 5)];
  console.log("Data Sebelum Diurutkan");
  for (_i = 0, _len = basisData.length; _i < _len; _i++) {
    x = basisData[_i];
    console.log(x.show());
  }
  console.log("Data Setelah Diurutkan");
  sorter = new Sorter;
  sorted = sorter.sortByRating(basisData);
  for (_j = 0, _len2 = sorted.length; _j < _len2; _j++) {
    y = sorted[_j];
    console.log(y.show());
  }
}).call(this);
