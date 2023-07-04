
//Analogies
let anologies = [
    {
        question: `Odometer is to mileage as compass is to`,
        op1: `	speed`,
        op2: `	hiking`,
        op3: `	needle`,
        op4: `direction`,
        answer: 'Answer: Option D',
        exp: `

Explanation:

An odometer is an instrument used to measure mileage. A compass is an instrument used to determine direction. Choices a, b, and c are incorrect because none is an instrument.`,
    },
    {
        question: `	
Optimist is to cheerful as pessimist is to`,
        op1: `gloomy`,
        op2: `mean`,
        op3: `petty`,
        op4: `helpful`,
        answer: 'Answer: Option A',
        exp: `

Explanation:

An optimist is a person whose outlook is cheerful. A pessimist is a person whose outlook is gloomy. The answer is not (choice b) because a pessimist does not have to be mean. (Choices c) and d are incorrect because neither adjective describes the outlook of a pessimist.`,
    },
    {
        question: `	
Reptile is to lizard as flower is to`,
        op1: `petal`,
        op2: `	stem`,
        op3: `daisy`,
        op4: `alligator`,
        answer: 'Answer: Option C',
        exp: `

Explanation:

A lizard is a type of reptile; a daisy is a type of flower. Choices a and b are incorrect because a petal and a stem are parts of a flower, not types of flowers. (Choice d) is incorrect because an alligator is another type of reptile, not a type of flower.`,
    },
    {
        question: `Sponge is to porous as rubber is to`,
        op1: `massive`,
        op2: `solid`,
        op3: `	elastic`,
        op4: `inflexible`,
        answer: 'Answer: Option C',
        exp: `

Explanation:

A sponge is a porous material. Rubber is an elastic material. (Choice a) is incorrect because rubber would not generally be referred to as massive. The answer is not (choice b) because even though rubber is a solid, its most noticeable characteristic is its elasticity. Choice d is incorrect because rubber has flexibility.`,
    },
    {
        question: ` 	
Careful is to cautious as boastful is to`,
        op1: `arrogant`,
        op2: `humble`,
        op3: `joyful`,
        op4: `	suspicious`,
        answer: 'Answer: Option A',
        exp: `

Explanation:

Careful and cautious are synonyms (they mean the same thing). Boastful and arrogant are also synonyms. The answer is not (choice b) because humble means the opposite of boastful. The answer is not choice c or d because neither means the same as boastful.`,
    }
]

//letter & symbol series

let letter_series = [
    {
        question: ` 	
SCD, TEF, UGH, ____, WKL`,
        op1: `CMN`,
        op2: `	UJI`,
        op3: `	VIJ`,
        op4: `IJT	`,
        answer: 'Answer: Option C',
        exp: `

Explanation:

There are two alphabetical series here. The first series is with the first letters only: STUVW. The second series involves the remaining letters: CD, EF, GH, IJ, KL.`,
    },
    {
        question: `FAG, GAF, HAI, IAH, ____`,
        op1: `JAK	`,
        op2: `HAL`,
        op3: `HAK`,
        op4: `JAI`,
        answer: 'Answer: Option A',
        exp: `

Explanation:

The middle letters are static, so concentrate on the first and third letters. The series involves an alphabetical order with a reversal of the letters. The first letters are in alphabetical order: F, G, H, I , J. The second and fourth segments are reversals of the first and third segments. The missing segment begins with a new letter.`,
    },
    {
        question: `	
QPO, NML, KJI, _____, EDC`,
        op1: `HGF`,
        op2: `	CAB`,
        op3: `JKL`,
        op4: `GHI`,
        answer: 'Answer: Option A',
        exp: `

Explanation:

This series consists of letters in a reverse alphabetical order.`,
    },
    {
        question: ` 	
QAR, RAS, SAT, TAU, _____`,
        op1: `	UAV`,
        op2: `	UAT`,
        op3: `TAS`,
        op4: `	TAT`,
        answer: 'Answer: Option A',
        exp: `

Explanation:

In this series, the third letter is repeated as the first letter of the next segment. The middle letter, A, remains static. The third letters are in alphabetical order, beginning with R.`,
    },
    {
        question: `	
CMM, EOO, GQQ, _____, KUU`,
        op1: `GRR`,
        op2: `GSS`,
        op3: `	ISS`,
        op4: `ITT`,
        answer: 'Answer: Option C',
        exp: `

Explanation:

The first letters are in alphabetical order with a letter skipped in between each segment: C, E, G, I, K. The second and third letters are repeated; they are also in order with a skipped letter: M, O, Q, S, U.`,
    }
]
//Number Series


let number_series = [
    {
        question: `Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?`,
        op1: `7`,
        op2: `10`,
        op3: `12`,
        op4: `13`,
        answer: 'Answer: Option B',
        exp: `

Explanation:

This is a simple alternating addition and subtraction series. In the first pattern, 3 is added; in the second, 2 is subtracted.`,
    },
    {
        question: `Look at this series: 36, 34, 30, 28, 24, ... What number should come next?`,
        op1: `20`,
        op2: `22`,
        op3: `23`,
        op4: `26`,
        answer: 'Answer: Option B',
        exp: `

Explanation:

This is an alternating number subtraction series. First, 2 is subtracted, then 4, then 2, and so on.`,
    },
    {
        question: `	
Look at this series: 31, 29, 24, 22, 17, ... What number should come next?`,
        op1: `15`,
        op2: `14`,
        op3: `13`,
        op4: `12`,
        answer: 'Answer: Option A',
        exp: `

Explanation:

This is a simple alternating subtraction series, which subtracts 2, then 5.`,
    },
    {
        question: `Look at this series: 544, 509, 474, 439, ... What number should come next?`,
        op1: `404`,
        op2: `414`,
        op3: `420`,
        op4: `445`,
        answer: 'Answer: Option A',
        exp: `

Explanation:

This is a simple subtraction series. Each number is 35 less than the previous number.`,
    },
    {
        question: ` 	
Look at this series: 8, 6, 9, 23, 87 , ... What number should come next?`,
        op1: `	128`,
        op2: `226`,
        op3: `324`,
        op4: `429`,
        answer: 'Answer: Option D',
        exp: `

Explanation:

8 x 1 - 2 = 6
6 x 2 - 3 = 9
9 x 3 - 4 = 23
23 x 4 - 5 = 87
87 x 5 - 6 = 429 ...`,
    }
]

//Logical Deduction

let logical_deduction = [
    {
        question: `Statements: All bags are cakes. All lamps are cakes.

Conclusions: 1.Some lamps are bags.   2.No lamp is bag.`,
        op1: `Only conclusion I follows`,
        op2: `Only conclusion II follows`,
        op3: `Either I or II follows`,
        op4: `Neither I nor II follows`,
        answer: 'Answer: Option C',
        exp: `

Explanation:

Since the middle term 'cakes' is not distributed even once in the premises, no definite conclusion follows. However, I and II involve only the extreme terms and form a complementary pair. So, either I or II follows.`,
    },
    {
        question: `Statements: All mangoes are golden in colour. No golden-coloured things are cheap.

Conclusions:   1.All mangoes are cheap.    2.Golden-coloured mangoes are not cheap.`,
        op1: `Only conclusion I follows`,
        op2: `	Only conclusion II follows`,
        op3: `Either I or II follows`,
        op4: `	Neither I nor II follows`,
        answer: 'Answer: Option B',
        exp: `

Explanation:

Clearly, the conclusion must be universal negative and should not contain the middle term. So, it follows that 'No mango is cheap'. Since all mangoes are golden in colour, we may substitute 'mangoes' with 'golden-coloured mangoes'. Thus, II follows.`,
    },
    {
        question: `	
Statements: Some kings are queens. All queens are beautiful.

Conclusions:  1.All kings are beautiful.  2.All queens are kings.`,
        op1: `Only conclusion I follows`,
        op2: `Only conclusion II follows`,
        op3: `	Either I or II follows`,
        op4: `	Neither I nor II follows`,
        answer: 'Answer: Option D',
        exp: `

Explanation:

Since one premise is particular, the conclusion must be particular. So, neither I nor II follows.`,
    },
    {
        question: ` 	
Statements: Some doctors are fools. Some fools are rich.

Conclusions: 1.Some doctors are rich   2.Some rich are doctors.  `,
        op1: `Only conclusion I follows`,
        op2: `Only conclusion II follows`,
        op3: `Either I or II follows`,
        op4: `Neither I nor II follows`,
        answer: 'Answer: Option D',
        exp: `

Explanation:

Since both the premises are particular, no definite conclusion follows.`,
    },
    {
        question: `	
Statements: No bat is ball. No ball is wicket.

Conclusions:  1.No bat is wicket.   2.All wickets are bats.`,
        op1: `Only conclusion I follows`,
        op2: `Only conclusion II follows`,
        op3: `Either I or II follows`,
        op4: `Neither I nor II follows`,
        answer: 'Answer: Option D',
        exp: `

Explanation:

Since both the premises are negative, no definite conclusion follows.`,
    }
]

//Essential Part

let essential_part = [
    {
        question: `school`,
        op1: `student`,
        op2: `report card`,
        op3: `test`,
        op4: `learning`,
        answer: 'Answer: Option A',
        exp: `

Explanation:

Without students, a school cannot exist; therefore, students are the essential part of schools. The other choices may be related, but they are not essential.`,
    },
    {
        question: ` 	
language`,
        op1: `tongue`,
        op2: `slang`,
        op3: `	writing`,
        op4: `words`,
        answer: 'Answer: Option D',
        exp: `

Explanation:

Words are a necessary part of language. Slang is not necessary to language (choice b). Not all languages are written (choice c). Not all languages are spoken (choice a).`,
    },
    {
        question: `	
pain`,
        op1: `cut`,
        op2: `	burn`,
        op3: `nuisance`,
        op4: `hurt`,
        answer: 'Answer: Option D',
        exp: `

Explanation:

Pain is suffering or hurt, so choice d is the essential element. Without hurt, there is no pain. A cut (choice a) or a burn (choice b) may cause pain, but so do many other types of injury. A nuisance (choice c) is an annoyance that may or may not cause pain.`,
    },
    {
        question: ` 	
election`,
        op1: `president`,
        op2: `	voter`,
        op3: `	November`,
        op4: `nation`,
        answer: 'Answer: Option B',
        exp: `

Explanation:

An election does not exist without voters. The election of a president (choice a) is a byproduct. Not all elections are held in November (choice c), nor are they nationwide (choice d).`,
    },
    {
        question: ` 	
lightning`,
        op1: `	electricity`,
        op2: `thunder`,
        op3: `brightness`,
        op4: `rain`,
        answer: 'Answer: Option A',
        exp: `

Explanation:

Lightning is produced from a discharge of electricity, so electricity is essential. Thunder and rain are not essential to the production of lightning (choices b and d). Brightness may be a byproduct of lightning, but it is not essential (choice c).`,
    }
]