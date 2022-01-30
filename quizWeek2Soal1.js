$(document).ready(function (){
    $("button").click(function(){
            $.getJSON("https://fakestoreapi.com/products", function(data){
                var products_data = [''];
                $.each(data,function(key,value){
                    products_data+='<tr>';
                    products_data+="<td>"+value.title+"</td>";
                    products_data+="<td>"+value.price+"</td>";
                    products_data+="<td>"+value.description+"</td>";
                    products_data+='</tr';
                    products_data+="<br>"
                    
                })
                $('#product_table').append(products_data);
            })       
    })
})

