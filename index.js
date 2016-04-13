// load the template file, then render it with data\
var data={title:'haha',supplies:[1,2,3,4,5,6]}
var html = new EJS({url: 'cleaning.ejs'}).render(data);
document.getElementById('target').innerHTML=html;