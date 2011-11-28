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
}




$(function() {
    var str = '<ul id="theTimeline">';
    for (entry in timeline.entries){
       str += "<li><strong>"+entry.title+"</strong> - "+entry.year+"</li>";
    }
    str += '</ul>
    console.log(str);
    $('#timeline').html(str);
});
