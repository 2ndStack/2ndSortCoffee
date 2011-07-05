class NilaiRating
    constructor: (@id,@jk,@rat) ->

    show: () ->
        return "Id :#{@id},\tJk: #{@jk},\tRat: #{@rat} "


class Sorter
    sortByRating: (basisData) ->
        for i in [1...basisData.length]
            for j in [0...basisData.length - i]
                if basisData[j].rat > basisData[j+1].rat
                   holder = basisData[j+1];
                   basisData[j+1] = basisData[j]
                   basisData[j] = holder
        return basisData
        
basisData = [
    new NilaiRating 1, 'p', 5   
    new NilaiRating 2, 'w', 2  
    new NilaiRating 3, 'w', 4  
    new NilaiRating 4, 'w', 1  
    new NilaiRating 5, 'w', 2  
    new NilaiRating 6, 'p', 4  
    new NilaiRating 7, 'p', 3  
    new NilaiRating 8, 'p', 4  
    new NilaiRating 9, 'p', 1  
    new NilaiRating 10, 'w', 5  
    new NilaiRating 11, 'w', 3  
    new NilaiRating 12, 'w', 1  
    new NilaiRating 13, 'w', 1  
    new NilaiRating 14, 'p', 4  
    new NilaiRating 15, 'p', 5  
    new NilaiRating 16, 'w', 3  
    new NilaiRating 17, 'p', 3  
    new NilaiRating 18, 'w', 4  
    new NilaiRating 19, 'p', 2  
    new NilaiRating 20, 'w', 5
]

console.log "Data Sebelum Diurutkan"
for x in basisData
    console.log x.show()

console.log "Data Setelah Diurutkan"
sorter = new Sorter
sorted = sorter.sortByRating basisData
for y in sorted
    console.log y.show()

