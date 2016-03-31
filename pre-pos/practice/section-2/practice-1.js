function count_same_elements(collection) {
 
   var same_elements_array = [];

   same_elements_array.push({key:collection[0],count:1});

   for(var i = 1;i < collection.length;i++)
   {

      same_elements_array = find_same_elements(collection[i],same_elements_array);
   }

   return same_elements_array; 

}

function find_same_elements(element,same_elements_array)

{
   for(var k = 0;k < same_elements_array.length && same_elements_array[k].key != element;k++);

      if(k < same_elements_array.length)

         same_elements_array[k].count++;

      else

         same_elements_array.push({key:element,count:1});

  return same_elements_array;

}
