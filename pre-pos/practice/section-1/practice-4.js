function collect_same_elements(collection_a, collection_b) {

  var same_elements = [];

   for(var i = 0;i < collection_a.length;i++){

      if(isExsists(collection_a[i].key,collection_b)){

         same_elements.push(collection_a[i].key);

	}
}
   
   return same_elements;
}

function isExsists(element,collection_b)
{
   for(var k = 0;k < collection_b.value.length;k++)

       if(collection_b.value[k] === element)

           return true;

   return false;
}


