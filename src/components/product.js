import React from 'react';
import { Link } from 'gatsby';

import { useForm } from '../hooks';
import { Form, Input, TextArea, CheckBox } from './form-elements';

export function Product({title,img,description,category,price }) {

  return (
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={img} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
  {description} </p>
  </div>
  <div class="px-6 py-4">
     <p class="text-gray-700 text-base">
Price:&nbsp;${price}
     </p>
     <p class="text-gray-700 text-base">
Category:&nbsp;{category}
     </p>
     
    </div>
</div>
  );
}
