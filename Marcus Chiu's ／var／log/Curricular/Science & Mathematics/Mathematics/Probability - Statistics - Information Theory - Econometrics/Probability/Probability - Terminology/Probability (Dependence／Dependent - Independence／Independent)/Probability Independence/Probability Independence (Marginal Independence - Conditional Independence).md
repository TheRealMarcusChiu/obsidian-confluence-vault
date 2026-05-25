---
created: 2021-09-13T05:28:38.192-05:00
modified: 2026-05-24T19:52:17.424-05:00
parent: "[[Probability Independence]]"
children:
  - "[[Conditional Independence - (Decomposition, Contraction, Weak Union, Intersection) Rule]]"
---
# Marginal Independence (Independence)

Two random variables are <strong>independent</strong>, <strong>statistically independent</strong>, <strong>marginally independent</strong>, or <strong>stochastically independent</strong> if the realization of one does not affect the probability distribution of the other

the following implies each other:
1. <font style="color: rgb(128,0,0);">𝐴 and 𝐵 are Independent</font>
2. <font style="color: rgb(128,0,0);">𝐴 ⊥ 𝐵</font>
3. <font style="color: rgb(128,0,0);">𝐏(𝐴,𝐵) = 𝐏(𝐴)𝐏(𝐵)</font>
4. <font style="color: rgb(128,0,0);">𝐏(𝐴|𝐵) = 𝐏(𝐴)</font>
5. <font style="color: rgb(128,0,0);">𝐏(𝐵|𝐴) = 𝐏(𝐵)</font>

with equation 3 we can derive equation 2 and equation 4 as shown below:
```
𝐏(𝐴|𝐵)          = 𝐏(𝐴)      # equation 3
𝐏(𝐴|𝐵)𝐏(𝐵)      = 𝐏(𝐴)𝐏(𝐵)
𝐏(𝐴,𝐵)          = 𝐏(𝐴)𝐏(𝐵)  # equation 2
𝐏(𝐵|𝐴)𝐏(𝐴)      = 𝐏(𝐴)𝐏(𝐵)
𝐏(𝐵|𝐴)          = 𝐏(𝐵)      # equation 4
```
# Conditional Independence
The following implies each other:
1. <font style="color: rgb(128,0,0);">𝐴 and 𝐵 are Conditionally Independent when given 𝐶</font>
2. <font style="color: rgb(128,0,0);">𝐴 ⊥ 𝐵 | 𝐶</font>
3. <font style="color: rgb(128,0,0);">𝐏(𝐴,𝐵|𝐶) = 𝐏(𝐴|𝐶)𝐏(𝐵|𝐶)</font>
4. <font style="color: rgb(128,0,0);">𝐏(𝐴,𝐵|𝐶) = 𝐏(𝐴|𝐵,𝐶)𝐏(𝐵|𝐴,𝐶)</font>
5. <font style="color: rgb(128,0,0);">𝐏(𝐴|𝐵,𝐶) = 𝐏(𝐴|𝐶)</font>
6. <font style="color: rgb(128,0,0);">𝐏(𝐵|𝐴,𝐶) = 𝐏(𝐵|𝐶)</font>

with equation 2 we can derive equation 4 as shown below:
```
𝐏(𝐴,𝐵|𝐶) = 𝐏(𝐴,𝐵,𝐶)          / 𝐏(𝐶)
𝐏(𝐴,𝐵|𝐶) = 𝐏(𝐴|𝐵,𝐶) * 𝐏(𝐵,𝐶) / 𝐏(𝐶)
𝐏(𝐴,𝐵|𝐶) = 𝐏(𝐴|𝐵,𝐶) * 𝐏(𝐵|𝐶)
𝐏(𝐴,𝐵|𝐶) = 𝐏(𝐴|𝐶)   * 𝐏(𝐵|𝐶)
therefore
𝐏(𝐴|𝐵,𝐶) = 𝐏(𝐴|𝐶)
```
###### Formal Definition
two random events 𝐴 and 𝐵 are <strong>conditionally independent</strong> given a third event 𝐶 precisely if the occurrence of 𝐴 and the occurrence of 𝐵 are independent events in their [[Probability Independence (Marginal Independence - Conditional Independence)|conditional probability distribution]] given 𝐶. In other words, 𝐴 and 𝐵 are conditionally independent given 𝐶 if and only if, given knowledge that 𝐶 occurs, knowledge of whether 𝐴 occurs provides no information on the likelihood of 𝐵 occurring, and knowledge of whether 𝐵 occurs provides no information on the likelihood of 𝐴 occurring
# Independence ⟸|⟹ Conditional Independence

> [!expand]- independence ⇏ conditional independence
> say we have the following
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- 𝐴 = 3\n- 𝐵 = 3\n- 𝐴 and 𝐵 = 1\n- not (𝐴 or 𝐵) = 4\n- Ω (<em>sample space</em>) = 9\n- 𝐶 = 𝐴 or 𝐵 = 5",
>       "![[Probability Independence (Marginal Independence - Conditional Independence)/independence-does-not-imply-conditional-independence.png|301]]"
>     ]
>   ],
>   "tableStyle": "width: 78.7671%;"
> }
> ```
> ###### Show 𝐴 and 𝐵 are independent (i.e. 𝐏(𝐴|𝐵) = 𝐏(𝐴))
> - 𝐏(𝐴|𝐵) = 𝐏(𝐴,𝐵)/𝐏(𝐵) = (1/9)/(3/9) = 1/3
> - 𝐏(𝐴) = (3/9) = 1/3
>
> clearly 𝐏(𝐴|𝐵) = 𝐏(𝐴), therefore 𝐴 and 𝐵 are independent (with respect to the sample space)
> ###### Show 𝐴 and 𝐵 are NOT conditionally independent with respect to C (i.e. 𝐏(𝐴|𝐶,𝐵) ≠ 𝐏(𝐴|𝐶))
> - 𝐏(𝐴|𝐶,𝐵) = 𝐏(𝐴,𝐵,𝐶)/𝐏(𝐵,𝐶) = (1/9)/(1/9) = 1
> - 𝐏(𝐴|𝐶) = 𝐏(𝐴,𝐶)/𝐏(𝐶) = (3/9)/(5/9) = 3/5
>
> clearly 𝐏(𝐴|𝐶,𝐵) ≠ 𝐏(𝐴|𝐶), therefore 𝐴 and 𝐵 are not conditionally independent

> [!expand]- conditional independence ⇏ independence
> say we have the following
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- 𝐴 = 4\n- 𝐵 = 4\n- 𝐶 = 4\n- 𝐴∩𝐶 = 2\n- 𝐵∩𝐶 = 2\n- 𝐴∩𝐵 = 2\n- 𝐴∩𝐵∩𝐶 = 1\n- Ω (<em>sample space</em>) = 7",
>       "![[Probability Independence (Marginal Independence - Conditional Independence)/conditional-independence-does-not-imply-independence.png|301]]"
>     ]
>   ]
> }
> ```
> ###### Show that 𝐴 and 𝐵 are conditionally independent with respect to C (i.e. 𝐏(𝐴|𝐵,𝐶) = 𝐏(𝐴|𝐶))
> - 𝐏(𝐴,𝐶) = 2/7
> - 𝐏(𝐶) = 4/7
> - 𝐏(𝐴,𝐵,𝐶) = 1/7
> - 𝐏(𝐵,𝐶) = 2/7
> - 𝐏(𝐴|𝐶) = 𝐏(𝐴,𝐶)/𝐏(𝐶) = (2/7)/(4/7) = 1/2
> - 𝐏(𝐴|𝐵,𝐶) = 𝐏(𝐴,𝐵,𝐶)/𝐏(𝐵,𝐶) = (1/7)/(2/7) = 1/2
>
> clearly 𝐏(𝐴|𝐵,𝐶) = 𝐏(𝐴|𝐶), therefore 𝐴 and 𝐵 are conditionally independent with respect to 𝐶
> ###### Show that 𝐴 and 𝐵 are NOT independent (i.e. 𝐏(𝐴|𝐵) ≠ 𝐏(𝐴))
> - 𝐏(𝐴|𝐵) = 𝐏(𝐴,𝐵)/𝐏(𝐵) = (2/7)/(4/7) = 1/2
> - 𝐏(𝐴) = 4/7
>
> clearly 𝐏(𝐴|𝐵) ≠ 𝐏(𝐴), therefore 𝐴 and 𝐵 are NOT independent
