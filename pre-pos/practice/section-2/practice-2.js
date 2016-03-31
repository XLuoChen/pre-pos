function count_same_elements(collection) {
  
  var same_elements_array = [];

   for(var i = 0;i < collection.length;i++)
   {

      same_elements_array = find_same_elements(collection[i],same_elements_array);
   }

   return same_elements_array; 

}

function find_same_elements(string,same_elements_array)

{

   element = string.split("-");  
 
   if(element[0] == string)

   {

      for(var k = 0;k < same_elements_array.length && same_elements_array[k].key != element;k++);

         if(k < same_elements_array.length)

            same_elements_array[k].count++;

         else

            same_elements_array.push({key:string,count:1});

    }

   else

   {
       
      same_elements_array.push({key:element[0],count:parseInt(element[1])});

   }    

   return same_elements_array;

}

