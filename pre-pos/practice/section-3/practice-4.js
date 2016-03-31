function create_updated_collection(collection_a, object_b) {
  
   var collection_c = [];

   for(var i = 0;i < collection_a.length;i++)

      collection_c = count_same_elements(collection_c,collection_a[i]);

   collection_c = sub_same_element_count(collection_c,object_b);

   return collection_c;

}

function count_same_elements(new_array,string)
{

    var element = string.split("-");

    for(var k = 0;k < new_array.length && element != new_array[k].key;k++) ;

    if(element[0] === string && k === new_array.length)
        
           new_array.push({key:string,count:1});

    else if(k < new_array.length)

           new_array[k].count++;
    
    else if(element[0] != string)
    
        new_array.push({key:element[0],count:parseInt(element[1])});

    else

        new_array[k].count += parseInt(element[1]);
  
    return new_array;
}

function sub_same_element_count(collection_c,object_b)
{

   for(var i = 0;i < collection_c.length;i++)

      for(var k = 0;k < object_b.value.length;k++)

         if(collection_c[i].key === object_b.value[k])

            collection_c[i].count -= Math.floor(collection_c[i].count/3);

   return collection_c;

}
