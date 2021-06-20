# ('b' + 'a' + + 'a' + 'a').toLowerCase()
Following the precedence of js operators, the calculation starts from the left.

- The first calculation is easy:  
`'b' + 'a'`  
`'ba'`


- Then after it encounters the next operator, it's going to expect a variable coming next, but instead it encounters two plus operators (**NOT** ++ as one operator).
A single plus operator cannot become a variable in this case, therefore it considers `+ 'a'` as a variable and calculate its value first.  
`+ 'a'`  
`NaN`

- Then it adds the String `'ba'` with the Number `NaN`.  
Just like `'ba' + 0 = 'ba' + String(0) = 'ba0'`  
`'ba' + NaN`  
`'ba' + String(NaN)`  
`'ba' + 'NaN'`  
`'baNaN'`

- The rest becomes easy:  
`('baNaN' + 'a').toLowerCase()`  
`('baNaNa').toLowerCase()`  
`'banana'`
