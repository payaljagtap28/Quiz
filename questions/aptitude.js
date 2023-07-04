
// HCM & LCM
const hcf = [
      {
            question: `Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case.`,
            op1: `4`,
            op2: `7`,
            op3: `9`,
            op4: `13`,
            answer: 'Answer: Option A',
            exp: `

Explanation: Required number = H.C.F. of (91 - 43), (183 - 91) and (183 - 43)
        = H.C.F. of 48, 92 and 140 = 4.`,
      },
      {
            question: `The H.C.F. of two numbers is 23 and the other two factors of their L.C.M. are 13 and 14. The larger of the two numbers is:`,
            op1: `276`,
            op2: `299`,
            op3: `322`,
            op4: `345`,
            answer: 'Answer: Option C',
            exp: `

Explanation: Clearly, the numbers are (23 x 13) and (23 x 14).

Larger number = (23 x 14) = 322.`,
      },
      {
            question: `	
Let N be the greatest number that will divide 1305, 4665 and 6905, leaving the same remainder in each case. Then sum of the digits in N is:`,
            op1: `4`,
            op2: `5`,
            op3: `6`,
            op4: `8`,
            answer: 'Answer: Option A',
            exp: `

Explanation: N = H.C.F. of (4665 - 1305), (6905 - 4665) and (6905 - 1305)

= H.C.F. of 3360, 2240 and 5600 = 1120.

Sum of digits in N = ( 1 + 1 + 2 + 0 ) = 4`,
      },
      {
            question: `The greatest number of four digits which is divisible by 15, 25, 40 and 75 is:`,
            op1: `9000`,
            op2: `9400`,
            op3: `9600`,
            op4: `9800`,
            answer: 'Answer: Option C',
            exp: `

Explanation: Greatest number of 4-digits is 9999.

L.C.M. of 15, 25, 40 and 75 is 600.

On dividing 9999 by 600, the remainder is 399.

 Required number (9999 - 399) = 9600.`,
      },
      {
            question: `Three number are in the ratio of 3 : 4 : 5 and their L.C.M. is 2400. Their H.C.F. is:`,
            op1: `40`,
            op2: `80`,
            op3: `120`,
            op4: `200`,
            answer: 'Answer: Option A',
            exp: `

Explanation: Let the numbers be 3x, 4x and 5x.

Then, their L.C.M. = 60x.

So, 60x = 2400 or x = 40.

 The numbers are (3 x 40), (4 x 40) and (5 x 40).

Hence, required H.C.F. = 40.`,
      },
];

//Calender
let calender = [
      {
            question: `It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?`,
            op1: `Sunday`,
            op2: `Saturday`,
            op3: `Friday`,
            op4: `Wednesday`,
            answer: 'Answer: Option C',
            exp: `

Explanation: On 31st December, 2005 it was Saturday.

Number of odd days from the year 2006 to the year 2009 = (1 + 1 + 2 + 1) = 5 days.

 On 31st December 2009, it was Thursday.

Thus, on 1st Jan, 2010 it is Friday.`,
      },
      {
            question: `	
January 1, 2007 was Monday. What day of the week lies on Jan. 1, 2008?`,
            op1: `Monday`,
            op2: `Tuesday`,
            op3: `	Wednesday`,
            op4: `	Sunday`,
            answer: 'Answer: Option B',
            exp: `

Explanation: The year 2007 is an ordinary year. So, it has 1 odd day.

1st day of the year 2007 was Monday.

1st day of the year 2008 will be 1 day beyond Monday.

Hence, it will be Tuesday.`,
      },
      {
            question: `What was the day of the week on 28th May, 2006?`,
            op1: `	Thursday`,
            op2: `	Friday`,
            op3: `Saturday`,
            op4: `	Sunday`,
            answer: 'Answer: Option D',
            exp: `Explanation: 28 May, 2006 = (2005 years + Period from 1.1.2006 to 28.5.2006)

Odd days in 1600 years = 0

Odd days in 400 years = 0

5 years = (4 ordinary years + 1 leap year) = (4 x 1 + 1 x 2)  6 odd days

Jan.  Feb.   March    April    May 
(31 +  28  +  31   +   30   +   28 ) = 148 days
 148 days = (21 weeks + 1 day)  1 odd day.

Total number of odd days = (0 + 0 + 6 + 1) = 7  0 odd day.

Given day is Sunday.`,
      },
      {
            question: ` 	
Which of the following is not a leap year?`,
            op1: `700`,
            op2: `800`,
            op3: `1200`,
            op4: `2000`,
            answer: 'Answer: Option A',
            exp: `

Explanation: The century divisible by 400 is a leap year.

The year 700 is not a leap year.`,
      },
      {
            question: `The calendar for the year 2007 will be the same for the year:`,
            op1: `2014`,
            op2: `2016`,
            op3: `2017`,
            op4: `2018`,
            answer: 'Answer: Option D',
            exp: `

Explanation: Count the number of odd days from the year 2007 onwards to get the sum equal to 0 odd day.

Year    : 2007 2008 2009 2010 2011 2012 2013 2014 2015 2016 2017
Odd day : 1    2    1    1    1    2    1    1    1    2    1    
Sum = 14 odd days  0 odd days.

 Calendar for the year 2018 will be the same as for the year 2007.`,
      },
];

//Numbers
let numbers = [
      {
            question: `	
Which one of the following is not a prime number?`,
            op1: `31`,
            op2: `61`,
            op3: `71`,
            op4: `91`,
            answer: 'Answer: Option D',
            exp: `

Explanation: 91 is divisible by 7. So, it is not a prime number.`,
      },
      {
            question: `1397 x 1397 = ?`,
            op1: `1951609`,
            op2: `	1981709`,
            op3: `18362619`,
            op4: `	2031719`,
            answer: 'Answer: Option A',
            exp: `

Explanation:

1397 x 1397	= (1397)2
= (1400 - 3)2
= (1400)2 + (3)2 - (2 x 1400 x 3)
= 1960000 + 9 - 8400
= 1960009 - 8400
= 1951609. `,
      },
      {
            question: `What least number must be added to 1056, so that the sum is completely divisible by 23 ?`,
            op1: `2`,
            op2: `3`,
            op3: `18`,
            op4: `21`,
            answer: 'Answer: Option A',
            exp: `

Explanation:

 23) 1056 (45
      92
      ---
      136
      115
      ---
       21
      ---
     
 Required number = (23 - 21)    
                 = 2. `,
      },
      {
            question: ` 	
(935421 x 625) = ?`,
            op1: `575648125`,
            op2: `584638125`,
            op3: `	584649125`,
            op4: `585628125`,
            answer: 'Answer: Option B',
            exp: `

Explanation: 935421 x 625 = 935421 x 54 = 935421 x		10		4
2
=	935421 x 104	=	9354210000
24	16
= 584638125`,
      },
      {
            question: `	
The largest 4 digit number exactly divisible by 88 is:`,
            op1: `	9944`,
            op2: `	9768`,
            op3: `	9988`,
            op4: `8888`,
            answer: 'Answer: Option A',
            exp: `

Explanation: Largest 4-digit number = 9999

88) 9999 (113
    88
    ----
    119
     88
    ----
     319
     264
     ---
      55
     ---
      
Required number = (9999 - 55)
                = 9944.     `,
      },
];

//Square root * Cube root
let numSeries3 = [
      {
            question: `	
The cube root of .000216 is:`,
            op1: `.6`,
            op2: `	.06`,
            op3: `77`,
            op4: `87`,
            answer: 'Answer: Option B',
            exp: `
      Explanation:

(.000216)1/3	=		216		1/3
106
   =		6 x 6 x 6		1/3
102 x 102 x 102
   =	6
102
   =	6
100
   = 0.06`,
      },
      {
            question: `	
What should come in place of both x in the equation	x	=	162	.
128	x
`,
            op1: `	12`,
            op2: `14`,
            op3: `144`,
            op4: `196`,
            answer: 'Answer: Option A ',
            exp: `Explanation:

Let	x	=	162
128	x
Then x2 = 128 x 162

   = 64 x 2 x 18 x 9

   = 82 x 62 x 32

   = 8 x 6 x 3

   = 144.

 x = 144 = 12. `,
      },
      {
            question: `The least perfect square, which is divisible by each of 21, 36 and 66 is:`,
            op1: `213444`,
            op2: `214344`,
            op3: `	214434`,
            op4: `231444`,
            answer: 'Answer: Option A',
            exp: `Explanation:

L.C.M. of 21, 36, 66 = 2772.

Now, 2772 = 2 x 2 x 3 x 3 x 7 x 11

To make it a perfect square, it must be multiplied by 7 x 11.

So, required number = 22 x 32 x 72 x 112 = 213444 `,
      },
      {
            question: `	
If 35 + 125 = 17.88, then what will be the value of 80 + 65 ?`,
            op1: `13.41`,
            op2: `20.46`,
            op3: `21.66`,
            op4: `22.35`,
            answer: 'Answer: Option D',
            exp: `Explanation:

35 + 125 = 17.88

 35 + 25 x 5 = 17.88

 35 + 55 = 17.88

 85 = 17.88

 5 = 2.235

 80 + 65 = 16 x 5 + 65

   = 45 + 65

   = 105 = (10 x 2.235) = 22.35 `,
      },
      {
            question: `	
If a = 0.1039, then the value of 4a2 - 4a + 1 + 3a is:`,
            op1: `0.1039`,
            op2: `0.2078`,
            op3: `1.1039`,
            op4: `2.1039`,
            answer: 'Answer: Option C',
            exp: `4a2 - 4a + 1 + 3a = (1)2 + (2a)2 - 2 x 1 x 2a + 3a

= (1 - 2a)2 + 3a

= (1 - 2a) + 3a

= (1 + a)

= (1 + 0.1039)

= 1.1039 `,
      },
];

//Decimal Fraction
let decimal_fraction = [
      {
            question: `	
What decimal of an hour is a second ?`,
            op1: `.0025`,
            op2: `.0256`,
            op3: `.00027`,
            op4: `.000126`,
            answer: 'Answer: Option C',
            exp: `

Explanation:

Required decimal =	1	=	1	= .00027
60 x 60	3600
`,
      },
      {
            question: `	
If 2994 ÷ 14.5 = 172, then 29.94 ÷ 1.45 = ?`,
            op1: `0.172`,
            op2: `1.72`,
            op3: `17.2`,
            op4: `172`,
            answer: 'Answer: Option C',
            exp: `

Explanation:

29.94	=	299.4
1.45	14.5
=		2994	x	1		[ Here, Substitute 172 in the place of 2994/14.5 ]
14.5	10
=	172
10
= 17.2`,
      },
      {
            question: `	
The expression (11.98 x 11.98 + 11.98 x x + 0.02 x 0.02) will be a perfect square for x equal to:`,
            op1: `0.02`,
            op2: `0.2`,
            op3: `0.04`,
            op4: `0.4`,
            answer: 'Answer: Option C',
            exp: `

Explanation:

Given expression = (11.98)2 + (0.02)2 + 11.98 x x.

For the given expression to be a perfect square, we must have

11.98 x x = 2 x 11.98 x 0.02 or x   = 0.04`,
      },
      {
            question: `	
0.04 x 0.0162 is equal to:`,
            op1: `6.48 x 10-3`,
            op2: `6.48 x 10-4`,
            op3: `6.48 x 10-5`,
            op4: `6.48 x 10-6`,
            answer: 'Answer: Option B',
            exp: `

Explanation:

4 x 162 = 648. Sum of decimal places = 6.
So, 0.04 x 0.0162 = 0.000648 = 6.48 x 10-4`,
      },
      {
            question: `	
The price of commodity X increases by 40 paise every year, while the price of commodity Y increases by 15 paise every year. If in 2001, the price of commodity X was Rs. 4.20 and that of Y was Rs. 6.30, in which year commodity X will cost 40 paise more than the commodity Y ?`,
            op1: `2010`,
            op2: `2011`,
            op3: `2012`,
            op4: `2013`,
            answer: 'Answer: Option B',
            exp: `

Explanation:

Suppose commodity X will cost 40 paise more than Y after z years.

Then, (4.20 + 0.40z) - (6.30 + 0.15z) = 0.40

 0.25z = 0.40 + 2.10

 z =	2.50	=	250	= 10.
0.25	25
 X will cost 40 paise more than Y 10 years after 2001 i.e., 2011.`,
      },
];

