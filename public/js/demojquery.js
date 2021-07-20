function loadMore( a) {
    var p = [];// ti nua se lay tu
    $.ajax({ //
        url: "https://foodgroup.herokuapp.com/api/category/1",
        method:"GET",
        success:function (rs){
            category = rs.data.category

            foods = rs.data.foods;
            var row = $("#row");

            var cy = "<div>\n" +
                "                <p>Name : "+category.name+"</p><br>\n" +
                "                <img src=\""+ category.icon +"\"/>\n" +
                "            </div>" ;

            if(a===0){
                row.append("<h2>Ten san pham</h2>");
                row.append(cy);
            }




            for (var i = 0; i < foods.length; i++) {
                var ct = "<div class=\"item\">\n" +
                    "            <img src=\"" + foods[i].image + "\"/>\n" +
                    "            <p>name =" + foods[i].name + "</p>\n" +
                    "            <p>" + foods[i].price + "</p>\n" +
                    "        </div>"; // ct chi la 1 string thoi
                if(a===1){
                    row.append(ct); // row.html(row.html() +ct)
                }

                // row.prepend(ct) // row.html(ct+row.html());
            }
        }

    });

}
var a =0;
function xem() {
 a++;
}