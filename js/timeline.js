var timeline = {
    entries: [
        { 
            title: "1A",
            year: 2008,
            term: 3
        },
        { 
            title: "1B",
            year: 2009,
            term: 1
        },
        { 
            title: "2A",
            year: 2009,
            term: 3
        },
        { 
            title: "2B",
            year: 2010,
            term: 2
        },
        { 
            title: "3A",
            year: 2011,
            term: 1
        },
        { 
            title: "3B",
            year: 2011,
            term: 3
        },
        { 
            title: "4A",
            year: 2012,
            term: 2
        },
    ],
    uniqueEntryPerTerm: function(){
        var uniques = {}
        for (entry in this.entries){
            var year = entry.year;
            var term = entry.term;
            
        }
    }
}




$(function() {
    for (entry in timeline.entries){
        
        
    }
});
