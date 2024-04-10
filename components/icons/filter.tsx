import React from 'react';
import type { SVGProps } from 'react';

// https://icon-sets.iconify.design/mdi/filter/
export default function Filter(props: SVGProps<SVGSVGElement>) {
	return (
    <svg 
     xmlns="http://www.w3.org/2000/svg"  
     viewBox="0 0 24 24" 
     {...props}
    >
      <path 
       fill="currentColor" 
       d="M14 12v7.88c.04.3-.06.62-.29.83a.996.996 0 0 1-1.41 0l-2.01-2.01a.99.99 0 0 1-.29-.83V12h-.03L4.21 4.62a1 1 0 0 1 .17-1.4c.19-.14.4-.22.62-.22h14c.22 0 .43.08.62.22a1 1 0 0 1 .17 1.4L14.03 12z">
        </path>
    </svg>
  );
}