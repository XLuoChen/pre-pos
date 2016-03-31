function collect_same_elements(collection_a, object_b) {

var same_elements = [];

   for(var i = 0;i < collection_a.length;i++){

      if(isExsists(collection_a[i],object_b)){

         same_elements.push(collection_a[i]);

	}
}
   
   return same_elements;

}

function isExsists(x,object_b)
{
   for(var k = 0;k < object_b.value.length;k++)

       if(object_b.value[k] === x)

           return true;

   return false;
}


