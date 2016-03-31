function collect_same_elements(collection_a, collection_b) {

   var same_elements = [];

   for(var i = 0;i < collection_a.length;i++){

      if(isExsists(collection_a[i],collection_b)){

         same_elements.push(collection_a[i]);
	}
}
   
   return same_elements;

}

function isExsists(x,collection_b)
{
   for(var k = 0;k < collection_b[0].length;k++)

       if(collection_b[0][k] === x)

           return true;

   return false;
}

