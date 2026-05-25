---
created: 2023-07-12T13:21:43.280-05:00
modified: 2023-07-12T14:07:12.754-05:00
parent: "[[Real Analysis - Theory of Functions of a Real Variable - \"Theoretical Calculus\"]]"
children: []
---
###### Cauchy Criterion For Convergence
````excerpt
- <font style="color: rgb(0,128,0);">(𝛴<sub>1≤𝑖≤∞</sub>𝑎<sub>𝑖</sub>) is a convergent series</font> ↔ <font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁∊ℕ ∀𝑛≥𝑚≥𝑁 : |𝛴<sub>𝑚≤𝑖≤𝑛</sub>𝑎<sub>𝑖</sub>| \< 𝜀</font>
````
^excerpt

# Cauchy Criterion For Convergence - Proof

Let 𝑠<sub>𝑛</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>𝑎<sub>𝑖</sub>:
- <font style="color: rgb(0,128,0);">(𝑠<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is a convergent sequence<font style="color: rgb(51,51,51);"> ↔<sub>completeness</sub> </font><font style="color: rgb(255,102,0);">(𝑠<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is a [[Mathematical Space (Cauchy Sequences)|Cauchy sequence]]</font> </font><font style="color: rgb(122,134,154);">\# via completeness of the real numbers</font>
- <font style="color: rgb(0,128,0);">(𝑠<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is a convergent sequence<font style="color: rgb(51,51,51);"> ↔ <font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁∊ℕ ∀𝑛̃,𝑚̃≥𝛮 : |𝑠<sub>𝑛̃</sub> - 𝑠<sub>𝑚̃</sub>| \< 𝜀</font> <font style="color: rgb(122,134,154);">\# definition of a Cauchy sequence</font></font></font>
- <font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);"><font style="color: rgb(0,128,0);">(𝑠<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is a convergent sequence</font> ↔ <font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁∊ℕ ∀𝑛≥𝑚≥𝛮 : |𝑠<sub>𝑛</sub> - 𝑠<sub>𝑚-1</sub>| \< 𝜀</font></font></font>

# Cauchy Criterion For Convergence - Example
Prove (𝛴<sub>1≤𝑖≤∞</sub>(-1)<sup>𝑖</sup>) is not convergent via the Cauchy criterion.
- !(<font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁∊ℕ ∀𝑛≥𝑚≥𝑁 : |𝛴<sub>𝑚≤𝑖≤𝑛</sub>(-1)<sup>𝑖</sup>| \< 𝜀</font>) → !(<font style="color: rgb(0,128,0);">(𝛴<sub>1≤𝑖≤∞</sub>(-1)<sup>𝑖</sup>) is a convergent series</font>)
- <font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">(</font>∃𝜀\>0 ∀𝑁∊ℕ ∃𝑛≥𝑚≥𝑁 : |𝛴<sub>𝑚≤𝑖≤𝑛</sub>(-1)<sup>𝑖</sup>| ≥ 𝜀</font>) → <font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">(</font>𝛴<sub>1≤𝑖≤∞</sub>(-1)<sup>𝑖</sup>) is NOT a convergent series</font>)

Prove the following:
- <font style="color: rgb(255,102,0);">∃𝜀\>0 ∀𝑁∊ℕ ∃𝑛≥𝑚≥𝑁 : |𝛴<sub>𝑚≤𝑖≤𝑛</sub>(-1)<sup>𝑖</sup>| ≥ 𝜀</font>

Choose 𝜀=0.5:
- <font style="color: rgb(255,102,0);">∀𝑁∊ℕ ∃𝑛≥𝑚≥𝑁 : |𝛴<sub>𝑚≤𝑖≤𝑛</sub>(-1)<sup>𝑖</sup>| ≥ 0.5</font>

Let 𝑁∊ℕ:
- <font style="color: rgb(255,102,0);">∃𝑛≥𝑚≥𝑁 : |𝛴<sub>𝑚≤𝑖≤𝑛</sub>(-1)<sup>𝑖</sup>| ≥ 0.5</font>

Let 𝑚=𝑁 and 𝑛=𝑁+2:
- <font style="color: rgb(255,102,0);">|𝛴<sub>𝑁≤𝑖≤𝑁+2</sub>(-1)<sup>𝑖</sup>| ≥ 0.5</font>

If:
- 𝑁 is even → <font style="color: rgb(255,102,0);">|1 + (-1) + 1| = 1 ≥ 0.5</font>
- 𝑁 is odd → <font style="color: rgb(255,102,0);">|-1 + 1 + (-1)| = 1 ≥ 0.5</font>

Thus we proved <font style="color: rgb(255,102,0);"><font style="color: rgb(51,51,51);">(</font>∃𝜀\>0 ∀𝑁∊ℕ ∃𝑛≥𝑚≥𝑁 : |𝛴<sub>𝑚≤𝑖≤𝑛</sub>(-1)<sup>𝑖</sup>| ≥ 𝜀</font>) which means <font style="color: rgb(0,128,0);">(𝛴<sub>1≤𝑖≤∞</sub>(-1)<sup>𝑖</sup>) is NOT a convergent series</font>)
