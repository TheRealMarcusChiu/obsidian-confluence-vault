---
created: 2021-09-13T05:26:48.382-05:00
modified: 2026-05-24T19:50:59.128-05:00
parent: "[[MN／MRF - Inferring Probabilities]]"
children: []
---
read: [[Probabilistic Inference - Inference by Enumeration Algorithm|Inference by Enumeration]] & [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|Variable Elimination]]
# Inference by Enumeration & Variable Elimination in Markov Networks
![[MN／MRF - Exact Inference - Inference by Enumeration & Variable Elimination/markov-network-chain.png|450]]
###### Prior Marginal Query
the [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|prior marginal query]] 𝐏(E=e) can be calculated as
- 𝐏(e) = 𝛴<sub>d∊D</sub>𝛴<sub>c∊C</sub>𝛴<sub>b∊B</sub>𝛴<sub>a∊A</sub><strong>\[</strong> 𝐏(a,b,c,d,e)<strong> \]</strong>
- 𝐏(e) = 𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> 𝛴<sub>a∊A</sub> <strong>\[ </strong>(1/𝘡) 𝛱<sub>𝑐∊</sub><sub>𝐶</sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \] <strong>\]</strong>
- 𝐏(e) = 𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> 𝛴<sub>a∊A</sub> <strong>\[</strong> (1/Z) 𝜙(a, b)𝜙(b, c)𝜙(c, d)𝜙(d, e) <strong>\]</strong>
- 𝐏(e) = (1/Z) 𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> 𝛴<sub>a∊A</sub> <strong>\[</strong> 𝜙(a, b)𝜙(b, c)𝜙(c, d)𝜙(d, e) <strong>\]</strong> <font style="color: rgb(128,128,128);">\# solving this naively is Inference by Enumeration</font>
- 𝐏(e) = (1/Z) 𝛴<sub>d∊D</sub> <font style="color: rgb(255,0,0);"><strong>\[</strong></font> 𝜙(d, e) \* 𝛴<sub>c∊C</sub><strong> <font style="color: rgb(51,153,102);">\[</font></strong> 𝜙(c, d) \* 𝛴<sub>b∊B</sub> <font style="color: rgb(0,204,255);"><strong>\[</strong></font> 𝜙(b, c) \* 𝛴<sub>a∊A</sub> <strong>\[</strong> 𝜙(a, b) <strong>\] <font style="color: rgb(0,204,255);">\]</font> <font style="color: rgb(51,153,102);">\]</font> <font style="color: rgb(255,0,0);">\]</font></strong> <font style="color: rgb(128,128,128);">\# pushing summation operators into factor products is Variable Elimination</font>

then enumerate through each summation while plugging in the appropriate domain value into each potential function 𝜙
###### Posterior Conditional Query
the [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|posterior conditional query]] 𝐏(E=e|A=a) can be calculated as
- 𝐏(E=e|A=a) = <font style="color: rgb(0,128,128);">𝐏(E=e,A=a)</font> / 𝐏(E=e)
- 𝐏(E=e|A=a) = <font style="color: rgb(0,128,128);">\[ </font><font style="color: rgb(0,128,128);">𝛴</font><font style="color: rgb(0,128,128);"><sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> \[ 𝐏(a,b,c,d,e) \] \]</font> / \[ 𝛴<sub>d∊D</sub>𝛴<sub>c∊C</sub>𝛴<sub>b∊B</sub>𝛴<sub>a∊A</sub>\[𝐏(a,b,c,d,e) \] \]
- 𝐏(E=e|A=a) = <font style="color: rgb(0,128,128);">\[ 𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> \[ (1/𝘡) 𝛱<sub>𝑐∊</sub><sub>𝐶</sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \] \] \]</font> / \[ 𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> 𝛴<sub>a∊A</sub> \[ (1/𝘡) 𝛱<sub>𝑐∊</sub><sub>𝐶</sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \] \] \]
- 𝐏(E=e|A=a) = <font style="color: rgb(0,128,128);">\[ </font><font style="color: rgb(0,128,128);">𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> \[ (1/Z) 𝜙(a, b)𝜙(b, c)𝜙(c, d)𝜙(d, e) \] \]</font> / \[ 𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> 𝛴<sub>a∊A</sub> \[ (1/Z) 𝜙(a, b)𝜙(b, c)𝜙(c, d)𝜙(d, e) \] \]
- 𝐏(E=e|A=a) = <font style="color: rgb(0,128,128);">\[ (1/Z) 𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> \[ 𝜙(a, b)𝜙(b, c)𝜙(c, d)𝜙(d, e) \] \]</font> / \[ (1/Z) 𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> 𝛴<sub>a∊A</sub> \[ 𝜙(a, b)𝜙(b, c)𝜙(c, d)𝜙(d, e) \] \]
- 𝐏(E=e|A=a) = <font style="color: rgb(0,128,128);">\[ 𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> \[ 𝜙(a, b)𝜙(b, c)𝜙(c, d)𝜙(d, e) \] \]</font> / \[ 𝛴<sub>d∊D</sub> 𝛴<sub>c∊C</sub> 𝛴<sub>b∊B</sub> 𝛴<sub>a∊A</sub> \[ 𝜙(a, b)𝜙(b, c)𝜙(c, d)𝜙(d, e) \] \] <font style="color: rgb(128,128,128);">\# solving this naively is Inference by Enumeration</font>
- 𝐏(E=e|A=a) = <font style="color: rgb(0,128,128);">\[ </font><font style="color: rgb(0,128,128);">𝛴<sub>d∊D</sub></font> <font style="color: rgb(255,0,0);"><strong>\[</strong></font> <font style="color: rgb(0,128,128);">𝜙(d, e) \* 𝛴<sub>c∊C</sub></font><strong> <font style="color: rgb(204,153,255);">\[</font></strong> <font style="color: rgb(0,128,128);">𝜙(c, d) \* 𝛴<sub>b∊B</sub></font> <font style="color: rgb(0,204,255);"><strong>\[</strong></font> <font style="color: rgb(0,128,128);">𝜙(b, c) 𝜙</font><font style="color: rgb(0,128,128);">(a, b)</font><strong> <font style="color: rgb(0,204,255);">\]</font> <font style="color: rgb(204,153,255);">\]</font> <font style="color: rgb(255,0,0);">\]</font></strong> <font style="color: rgb(0,128,128);">\]</font> / \[ 𝛴<sub>d∊D</sub> <font style="color: rgb(255,0,0);"><strong>\[</strong></font> 𝜙(d, e) \* 𝛴<sub>c∊C</sub><strong> <font style="color: rgb(51,153,102);">\[</font></strong> 𝜙(c, d) \* 𝛴<sub>b∊B</sub> <font style="color: rgb(0,204,255);"><strong>\[</strong></font> 𝜙(b, c) \* 𝛴<sub>a∊A</sub> <strong>\[</strong> 𝜙(a, b) <strong>\] <font style="color: rgb(0,204,255);">\]</font> <font style="color: rgb(51,153,102);">\]</font> <font style="color: rgb(255,0,0);">\]</font></strong> \] <font style="color: rgb(128,128,128);">\# pushing summation operators into factor products is Variable Elimination</font>

then enumerate through each summation while plugging in the appropriate domain value into each potential function 𝜙
