---
created: 2023-07-08T16:12:02.453-05:00
modified: 2023-07-12T15:39:38.689-05:00
parent: "[[Real Analysis - Theory of Functions of a Real Variable - \"Theoretical Calculus\"]]"
children: []
---
###### Sequences of Real Numbers ((𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>, 𝑎: ℕ → ℝ)
````excerpt
- is a [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|map]] from [[Numbers Classes／Classification of Numbers|natural numbers ℕ]] to [[Real Numbers System|real numbers ℝ]] (𝑎: ℕ → ℝ)
````
^excerpt

# Sequences of Real Numbers - Syntax
- ###### 𝑎: ℕ → ℝ
- (𝑎<sub>1</sub>, 𝑎<sub>2</sub>, ... )
- (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>

# Sequences of Real Numbers - Examples

```merge-table
{
  "rows": [
    [
      "(𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>",
      "(1)<sub>𝑛∊ℕ</sub>",
      "(1, 1, 1, 1, ...)"
    ],
    [
      "(𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>",
      "((-1)<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub>",
      "(-1, 1, -1, 1, ...)"
    ],
    [
      "(𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>",
      "(1/𝑛)<sub>𝑛∊ℕ</sub>",
      "(1/1, 1/2, 1/3, 1/4, ...)"
    ],
    [
      "(𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>",
      "(2<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub>",
      "(2, 4, 8, 16, 32, ...)"
    ]
  ]
}
```
# Sequences of Real Numbers - Properties

```merge-table
{
  "rows": [
    [
      {
        "content": "Property",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Definition",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Examples",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Proof",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Convergent",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "a sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is <em>convergent</em> if:\n- ∃𝑎̃∊ℝ ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |𝑎<sub>𝑛</sub>-𝑎̃|\\<𝜀",
        "rowspan": 2
      },
      "(1)<sub>𝑛∊ℕ</sub>",
      "> [!expand]- proof\n> ###### Proof by Confirmation\n>\n> Assume the sequence (1)<sub>𝑛∊ℕ</sub> is convergent:\n> - ∃𝑎̃∊ℝ ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |𝑎<sub>𝑛</sub>-𝑎̃|\\<𝜀\n> - ∃𝑎̃∊ℝ ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |1-𝑎̃|\\<𝜀\n>\n> Let 𝑎̃=1:\n> - ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |1-1|\\<𝜀\n> - ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |0|\\<𝜀\n> - ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → 0\\<𝜀\n>\n> Choose 𝜀 to be a constant 𝑐 greater than 0:\n> - ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → 0 \\< 𝑐 \\> 0\n> - ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → true\n> - ∃𝛮∊ℕ ∀𝑛∊ℕ : true <font style=\"color: rgb(122,134,154);\">\\# [[Conditional Statements - Antecedent - Consequent (Conditional - Converse - Inverse - Contrapositive - Biconditional)|conditional]] simplifies to true</font>\n> - true\n>\n> ###### Proof by Contradiction\n>\n> Assume the sequence (1)<sub>𝑛∊ℕ</sub> is divergent:\n> - ∀𝑎̃∊ℝ ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |𝑎<sub>𝑛</sub>-𝑎̃|≥𝜀\n> - ∀𝑎̃∊ℝ ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |1-𝑎̃|≥𝜀\n>\n> Choose 𝑎̃ = 1:\n> - ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |1-1|≥𝜀\n> - ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |0|≥𝜀\n> - ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND 0≥𝜀\n>\n> Let 𝜀 be some constant 𝑐 greater than 0:\n> - ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND 0≥𝑐\\>0\n>\n> Choose 𝛮 = 1:\n> - ∃𝑛∊ℕ : 𝑛≥1 AND 0≥𝑐\\>0\n>\n> Let 𝑛 be a number 𝑛≥1\n> - 0 ≥ 𝑐 \\> 0\n> - 0 \\> 0\n>\n> Thus contradiction"
    ],
    [
      "(1/𝑛)<sub>𝑛∊ℕ</sub>",
      "> [!expand]- proof\n> ###### Proof by Confirmation\n>\n> Assume the sequence (1/𝑛)<sub>𝑛∊ℕ</sub> is convergent:\n> - ∃𝑎̃∊ℝ ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |𝑎<sub>𝑛</sub>-𝑎̃|\\<𝜀\n> - ∃𝑎̃∊ℝ ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |1/𝑛-𝑎̃|\\<𝜀\n>\n> Let 𝑎̃=0:\n> - ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |1/𝑛-0|\\<𝜀\n> - ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |1/𝑛|\\<𝜀\n>\n> Let 𝜀 to be a constant 𝑐 greater than 0:\n> - ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |1/𝑛| \\< 𝑐 \\> 0\n>\n> Let 𝛮 = 1:\n> - ∀𝑛∊ℕ : 𝑛≥1 → |1/𝑛| \\< 𝑐 \\> 0\n>\n> Let 𝑛 go to ∞:\n> - ∞≥1 → |1/∞| \\< 𝑐 \\> 0\n> - true → |0| \\< 𝑐 \\> 0\n> - true → 0 \\< 𝑐 \\> 0\n> - true → true\n> - true <font style=\"color: rgb(122,134,154);\">\\# [[Conditional Statements - Antecedent - Consequent (Conditional - Converse - Inverse - Contrapositive - Biconditional)|conditional]] simplifies to true</font>\n>\n> ###### Proof by Contradiction\n>\n> Assume the sequence (1/𝑛)<sub>𝑛∊ℕ</sub> is divergent:\n> - ∀𝑎̃∊ℝ ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |𝑎<sub>𝑛</sub>-𝑎̃|≥𝜀\n> - ∀𝑎̃∊ℝ ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |1/𝑛-𝑎̃|≥𝜀\n>\n> Choose 𝑎̃ = 0:\n> - ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |1/𝑛-0|≥𝜀\n> - ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |1/𝑛|≥𝜀\n>\n> Let 𝜀 be some constant 𝑐 greater than 0:\n> - ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |1/𝑛|≥𝑐\\>0\n>\n> Choose 𝛮 = 1:\n> - ∃𝑛∊ℕ : 𝑛≥1 AND |1/𝑛|≥𝑐\\>0\n>\n> Let 𝑛 be a number 𝑛≥1\n> - |1/𝑛| ≥ 𝑐 \\> 0\n>\n> Let 𝑛 go to infinity:\n> - |1/∞| ≥ 𝑐 \\> 0\n> - |0| ≥ 𝑐 \\> 0\n> - 0 \\> 0\n>\n> Thus contradiction"
    ],
    [
      {
        "content": "Divergent",
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "a sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is <em>divergent</em> if it is not convergent:\n- ∀𝑎̃∊ℝ ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |𝑎<sub>𝑛</sub>-𝑎̃|≥𝜀",
        "rowspan": 2
      },
      "((-1)<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub>",
      "> [!expand]- proof\n> ###### Proof by Confirmation\n>\n> Assume ((-1)<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub> is divergent:\n> - ∀𝑎̃∊ℝ ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |𝑎<sub>𝑛</sub>-𝑎̃|≥𝜀\n> - ∀𝑎̃∊ℝ ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |(-1)<sup>𝑛</sup>-𝑎̃|≥𝜀\n>\n> Let 𝑎̃∊ℝ and 𝜀\\>0:\n> - ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |(-1)<sup>𝑛</sup>-𝑎̃|≥𝜀\\>0\n> - ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |(-1)<sup>𝑛</sup>-𝑎̃|\\>0\n>\n> Let 𝛮∊ℕ:\n> - ∃𝑛∊ℕ : 𝑛≥𝑁 AND |(-1)<sup>𝑛</sup>-𝑎̃|\\>0\n>\n> If 𝑎̃ = ?\n> > [!expand]- 𝑎̃ = 1\n> > - ∃𝑛∊ℕ : 𝑛≥𝑁 AND |(-1)<sup>𝑛</sup>-1|\\>0\n> >\n> > Let 𝑛 be an odd number greater than 𝑁:\n> > - true AND |-1-1|\\>0\n> > - |-2|\\>0\n> > - true\n> > [!expand]- 𝑎̃ = -1\n> > - ∃𝑛∊ℕ : 𝑛≥𝑁 AND |(-1)<sup>𝑛</sup>+1|\\>0\n> >\n> > Let 𝑛 be an even number greater than 𝑁:\n> > - true AND |1+1|\\>0\n> > - |2|\\>0\n> > - true\n> > [!expand]- 𝑎̃ = any other number\n> > - ∃𝑛∊ℕ : 𝑛≥𝑁 AND |(-1)<sup>𝑛</sup>-𝑎̃|\\>0\n> >\n> > Let 𝑛 be an even number greater than 𝑁:\n> > - true AND |(-1)<sup>𝑛</sup>-𝑎̃|\\>0\n> > - true AND |1-𝑎̃|\\>0\n> > - |1-𝑎̃|\\>0\n> > - true <font style=\"color: rgb(122,134,154);\">\\# since 𝑎̃ ≠ 1</font>\n>\n> 𝑛≥𝑁:\n> - true AND |(-1)<sup>𝑛</sup>-𝑎̃|\\>0\n> - |(-1)<sup>𝑛</sup>-𝑎̃| \\> 0\n>\n> ###### Proof by Contradiction\n>\n> > [!expand]- Proof #1\n> > Assume ((-1)<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub> is convergent to 𝑎̃∊ℝ. Then:\n> > - ∃𝑎̃∊ℝ ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |𝑎<sub>𝑛</sub>-𝑎̃|\\<𝜀\n> >\n> > Let 𝑎̃=𝑎̃ and 𝜀=1:\n> > - ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |𝑎<sub>𝑛</sub>-𝑎̃|\\<1\n> >\n> > then both:\n> > 1. |𝑎<sub>𝑛</sub> - 𝑎̃| \\< 1\n> > 2. |𝑎<sub>𝑛+1</sub> - 𝑎̃| \\< 1\n> >\n> > adding the above inequalities leads to:\n> > - |𝑎<sub>𝑛</sub> - 𝑎̃| + |𝑎<sub>𝑛+1</sub> - 𝑎̃| \\< 2\n> > - |1 - 𝑎̃| + |(-1) - 𝑎̃| \\< 2\n> > - |1 - 𝑎̃| + |-(1 + 𝑎̃)| \\< 2\n> > - |1 - 𝑎̃| + |1 + 𝑎̃| \\< 2 <font style=\"color: rgb(122,134,154);\">\\# absolute value</font>\n> >\n> > Let:\n> > - 2 = |1 - (-1)|\n> > - 2 = |1 - 𝑎̃ + 𝑎̃ - (-1)|\n> > - 2 ≤ |1 - 𝑎̃| + |𝑎̃ - (-1)|\n> > - 2 ≤ |1 - 𝑎̃| + |𝑎̃ + 1|\n> > - 2 ≤ |1 - 𝑎̃| + |𝑎̃ + 1| \\< 2 <font style=\"color: rgb(122,134,154);\">\\# above inequality</font>\n> > - 2 \\< 2 <font style=\"color: rgb(122,134,154);\">\\# contradiction</font>\n>\n> > [!expand]- Proof #2\n> > Assume ((-1)<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub> is convergent to 𝑎̃∊ℝ. Then:\n> > - ∃𝑎̃∊ℝ ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |𝑎<sub>𝑛</sub>-𝑎̃|\\<𝜀\n> > - ∃𝑎̃∊ℝ ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛∊ℕ : 𝑛≥𝑁 → |(-1)<sup>𝑛</sup>-𝑎̃|\\<𝜀\n> >\n> > Let 𝑎̃=𝑎̃, 𝜀=1, and 𝛮∊ℕ:\n> > - ∀𝑛∊ℕ : 𝑛≥𝑁 → |(-1)<sup>𝑛</sup>-𝑎̃|\\<1\n> >\n> > Let 𝑛=𝑁 and 𝑛=𝑁+1 then both:\n> > 1. 𝑁≥𝑁 → |(-1)<sup>𝑁</sup>-𝑎̃|\\<1\n> > 2. 𝑁+1≥𝑁 → |(-1)<sup>𝑁+1</sup>-𝑎̃|\\<1\n> >\n> > Both statements above can be simplified to:\n> > 1. true → |(-1)<sup>𝑁</sup>-𝑎̃|\\<1\n> > 2. true → |(-1)<sup>𝑁+1</sup>-𝑎̃|\\<1\n> >\n> > Both statements above can be simplified again to:\n> > 1. |(-1)<sup>𝑁</sup>-𝑎̃|\\<1\n> > 2. |(-1)<sup>𝑁+1</sup>-𝑎̃|\\<1\n> >\n> > If 𝑁 is odd then 𝑁+1 is even, and vice versa. Thus yielding the following inequalities:\n> > 1. |-1 - 𝑎̃| \\< 1\n> > 2. |1 - 𝑎̃| \\< 1\n> >\n> > adding the above inequalities leads to:\n> > - |1 - 𝑎̃| + |-1 - 𝑎̃| \\< 2\n> > - |1 - 𝑎̃| + |-(1 + 𝑎̃)| \\< 2\n> > - |1 - 𝑎̃| + |1 + 𝑎̃| \\< 2\n> >\n> > Let:\n> > - 2 = |1 - (-1)|\n> > - 2 = |1 - 𝑎̃ + 𝑎̃ - (-1)|\n> > - 2 ≤ |1 - 𝑎̃| + |𝑎̃ - (-1)|\n> > - 2 ≤ |1 - 𝑎̃| + |𝑎̃ + 1|\n> > - 2 ≤ |1 - 𝑎̃| + |𝑎̃ + 1| \\< 2 <font style=\"color: rgb(122,134,154);\">\\# substituting above inequality</font>\n> > - 2 \\< 2 <font style=\"color: rgb(122,134,154);\">\\# contradiction</font>"
    ],
    [
      "(2<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub>",
      "> [!expand]- proof\n> ###### Proof by Confirmation\n>\n> Assume (2<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub> is divergent:\n> - ∀𝑎̃∊ℝ ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |𝑎<sub>𝑛</sub>-𝑎̃|≥𝜀\n> - ∀𝑎̃∊ℝ ∃𝜀\\>0 ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |2<sup>𝑛</sup>-𝑎̃|≥𝜀\n>\n> Let 𝑎̃∊ℝ and 𝜀\\>0:\n> - ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |2<sup>𝑛</sup>-𝑎̃|≥𝜀\\>0\n> - ∀𝛮∊ℕ ∃𝑛∊ℕ : 𝑛≥𝑁 AND |2<sup>𝑛</sup>-𝑎̃|\\>0\n>\n> Let 𝛮∊ℕ:\n> - ∃𝑛∊ℕ : 𝑛≥𝑁 AND |2<sup>𝑛</sup>-𝑎̃|\\>0\n>\n> Choose 𝑛 such that 2<sup>𝑛</sup>\\> 𝑎̃ AND 𝑛≥𝑁:\n> - true AND |2<sup>𝑛</sup>-𝑎̃|\\>0\n> - |2<sup>𝑛</sup>-𝑎̃|\\>0\n> - true\n>\n> ###### Proof by Contradiction\n>\n> Assume (2<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub> is convergent to 𝑎̃∊ℝ. Then:\n> - ∀𝜀\\>0 ∃𝛮∊ℕ ∀𝑛≥𝑁 : |𝑎<sub>𝑛</sub> - 𝑎̃| \\< 𝜀\n>\n> Let 𝜀=1, so there exists an 𝑁 such that:\n> 1. |𝑎<sub>𝑁</sub> - 𝑎̃| \\< 1\n> 2. |𝑎<sub>𝑁</sub><sub>+𝑛</sub> - 𝑎̃| \\< 1\n> 3. |2<sup>𝑁+𝑛</sup> - 𝑎̃| \\< 1\n> 4. |2<sup>𝑁+∞</sup> - 𝑎̃| \\< 1 <font style=\"color: rgb(122,134,154);\">\\# let 𝑛 = ∞</font>\n> 5. |2<sup>∞</sup> - 𝑎̃| \\< 1\n> 6. |∞| \\< 1\n> 7. ∞ \\< 1 <font style=\"color: rgb(122,134,154);\">\\# contradiction</font>"
    ],
    [
      {
        "content": "Bounded",
        "bg": "#F4F5F7"
      },
      "a sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is <em>bounded</em> if:\n- ∃𝜀∊ℝ ∀𝑛∊ℕ : |𝑎<sub>𝑛</sub>| ≤ 𝜀",
      "((-1)<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub>",
      "> [!expand]- proof\n> ###### Proof by Confirmation\n>\n> Assume ((-1)<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub> is bounded:\n> - ∃𝜀∊ℝ ∀𝑛∊ℕ : |(-1)<sup>𝑛</sup>| ≤ 𝜀\n>\n> Let 𝜀=2, thus:\n> - ∀𝑛∊ℕ : |(-1)<sup>𝑛</sup>| ≤ 2\n>\n> ###### Proof by Contradiction\n>\n> Assume ((-1)<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub> is unbounded:\n> - ∀𝜀∊ℝ ∃𝑛∊ℕ : |𝑎<sub>𝑛</sub>| \\> 𝜀\n> - ∀𝜀∊ℝ ∃𝑛∊ℕ : |(-1)<sup>𝑛</sup>| \\> 𝜀\n>\n> Let 𝜀=2:\n> - ∃𝑛∊ℕ : |(-1)<sup>𝑛</sup>| \\> 2\n>\n> Thus we have both:\n> - |-1| \\> 2\n> - |1| \\> 2\n>\n> These are both contradictions"
    ],
    [
      {
        "content": "Unbounded",
        "bg": "#F4F5F7"
      },
      "a sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is <em>unbounded</em> if it is not bounded:\n- ∀𝜀∊ℝ ∃𝑛∊ℕ : |𝑎<sub>𝑛</sub>| \\> 𝜀",
      "(2<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub>",
      "> [!expand]- proof\n> ###### Proof by Confirmation\n>\n> Assume is (2<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub> unbounded:\n> - ∀𝜀∊ℝ ∃𝑛∊ℕ : |2<sup>𝑛</sup>| \\> 𝜀\n>\n> Let 𝜀 be a constant 𝑐:\n> - ∃𝑛∊ℕ : |2<sup>𝑛</sup>| \\> 𝑐\n> - ∃𝑛∊ℕ : 2<sup>𝑛</sup> \\> 𝑐\n> - ∃𝑛∊ℕ : 𝑙𝑔(2<sup>𝑛</sup>) \\> 𝑙𝑔(𝑐)\n> - ∃𝑛∊ℕ : 𝑛·𝑙𝑔(2) \\> 𝑙𝑔(𝑐)\n> - ∃𝑛∊ℕ : 𝑛 \\> 𝑙𝑔(𝑐)\n>\n> ###### Proof by Contradiction\n>\n> Assume (2<sup>𝑛</sup>)<sub>𝑛∊ℕ</sub>is bounded:\n> - ∃𝜀∊ℝ ∀𝑛∊ℕ : |𝑎<sub>𝑛</sub>| ≤ 𝜀\n> - ∃𝜀∊ℝ ∀𝑛∊ℕ : |2<sup>𝑛</sup>| ≤ 𝜀\n> - ∃𝜀∊ℝ ∀𝑛∊ℕ : |2<sup>∞</sup>| ≤ 𝜀 <font style=\"color: rgb(122,134,154);\">\\# let 𝑛 = ∞</font>\n> - ∃𝜀∊ℝ ∀𝑛∊ℕ : ∞ ≤ 𝜀\n>\n> 𝜀 is greater than or equal to ∞, but ∞ does not exist in ℝ. Thus contradiction"
    ]
  ]
}
```

theorems:
- if a sequence is <em>convergent</em> then it is also <em>bounded</em>
- if a sequence is <em>unbounded</em> then it is also <em>divergent</em>

# TODO
# Theorem on Limits

Given two convergent sequences (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> and (𝑏<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> then:
- 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub> + 𝑏<sub>𝑛</sub>) = 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) + 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>)
- 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub> · 𝑏<sub>𝑛</sub>) = 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) · 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>)
- 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub> / 𝑏<sub>𝑛</sub>) = 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) / 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>) <font style="color: rgb(122,134,154);">\# 𝑏<sub>𝑛</sub>≠ 0</font>

# Monotonicity

Given two convergent sequences (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> and (𝑏<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>:
- <font style="color: rgb(0,128,0);">if 𝑎<sub>𝑛</sub>≤ 𝑏<sub>𝑛</sub> for all 𝑛∊ℕ</font> → <font style="color: rgb(255,102,0);">𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) ≤ 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>)</font>

# Monotonically Increasing/Decreasing

A sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is:
- <em>monotonically increasing</em> if: 𝑎<sub>𝑛</sub>≤ 𝑎<sub>𝑛+1</sub> for all 𝑛
- <em>monotonically decreasing</em> if: 𝑎<sub>𝑛</sub>≥ 𝑎<sub>𝑛+1</sub> for all 𝑛

# Strictly Monotonically Increasing/Decreasing

A sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is:
- <em>strictly monotonically increasing</em> if: 𝑎<sub>𝑛</sub>\< 𝑎<sub>𝑛+1</sub> for all 𝑛
- <em>strictly monotonically decreasing</em> if: 𝑎<sub>𝑛</sub>\> 𝑎<sub>𝑛+1</sub> for all 𝑛

# Bounded From Above/Below - Bounded

A sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is:
- <em>bounded from above</em> if the set {𝑎<sub>𝑛</sub>}<sub>𝑛∊ℕ</sub> has an [[Upper Bound - Lower Bound|upper bound]]
- <em>bounded from below</em> if the set {𝑎<sub>𝑛</sub>}<sub>𝑛∊ℕ</sub> has a [[Upper Bound - Lower Bound|lower bound]]
- <em>bounded</em> if the set {𝑎<sub>𝑛</sub>}<sub>𝑛∊ℕ</sub> has an upper bound and lower bound

# Sandwich Theorem

Given two convergent sequences (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> and (𝑏<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>, and a sequence (𝑐<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>:
- <font style="color: rgb(0,128,0);">if 𝑎<sub>𝑛</sub>≤ 𝑏<sub>𝑛</sub> ≤ 𝑐<sub>𝑛</sub>for all 𝑛∊ℕ AND 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) = 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>)</font> → <font style="color: rgb(255,102,0);">(𝑐<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is convergent with 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑐<sub>𝑛</sub>) = 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) = 𝑙𝑖𝑚<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>)</font>

# Cauchy Sequence

A sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is a <em>Cauchy sequence</em> if:
- ∀𝜀\>0 ∃𝑁∊ℕ ∀𝑛,𝑚≥𝑁 : |𝑎<sub>𝑛</sub> - 𝑎<sub>𝑚</sub>| \< 𝜀
> [!info]
> For sequences of real numbers:
> - Cauchy sequence ↔ convergent sequence
# Dedekind Completeness
- If subset 𝑆⊆ℝ is bounded from above, then [[Supremum (Least Upper Bound) - Infimum (Greatest Lower Bound)|𝑠𝑢𝑝𝑟𝑒𝑚𝑢𝑚]](𝑆) exists
- If subset 𝑆⊆ℝ is bounded from below, then [[Supremum (Least Upper Bound) - Infimum (Greatest Lower Bound)|𝑖𝑛𝑓𝑖𝑚𝑢𝑚]](𝑆) exists

# Monotone Convergence Criterion

A sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is convergent if both:
- monotonically decreasing (i.e. 𝑎<sub>𝑛</sub>≥𝑎<sub>𝑛+1</sub> for all 𝑛)
- bounded from below (i.e. the set {𝑎<sub>𝑛</sub>}<sub>𝑛∊ℕ</sub> has a [[Upper Bound - Lower Bound|lower bound]])

A sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is convergent if both:
- monotonically increasing (i.e. 𝑎<sub>𝑛</sub>≤𝑎<sub>𝑛+1</sub> for all 𝑛)
- bounded from above (i.e. the set {𝑎<sub>𝑛</sub>}<sub>𝑛∊ℕ</sub> has an [[Upper Bound - Lower Bound|upper bound]])

# Accumulation/Cluster/Partial-Limit Values/Point

𝑎̃∊ℝ is called an <em>accumulation value</em> of a sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> if either:
- there exists a subsequence (𝑎<sub>𝑛𝑘</sub>)<sub>𝑘∊ℕ</sub> with 𝑙𝑖𝑚<sub>𝑘→∞</sub>𝑎<sub>𝑛𝑘</sub> = 𝑎̃ (i.e. subsequence is convergent)
- ∀𝜀\>0: the [[Metric Spaces (Neighborhoods)|𝜀-neighborhood]] of 𝑎̃ contains infinitely many sequence members of (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>

# Improper Accumulation Value
- a sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> has the <em>improper accumulation value</em> ∞ ↔ (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is not bounded from above
- a sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> has the <em>improper accumulation value</em> ∞ ↔ (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is not bounded from below

# Limit Superior - Limit Inferior

Given a sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>, an element 𝑎̃ ∊ ℝ∪{∞,-∞} = \[-∞,∞\] is called:
- <em>limit superior</em> of (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>if 𝑎̃ is the largest (improper) accumulation value of (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> (denoted as 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub>)
- <em>limit inferior</em> of (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>if 𝑎̃ is the smallest (improper) accumulation value of (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>(denoted as 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub>)

Limit superior relates to supremum:
- 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub> = 𝑙𝑖𝑚<sub>𝑛→∞</sub>[[Supremum (Least Upper Bound) - Infimum (Greatest Lower Bound)|𝑠𝑢𝑝𝑟𝑒𝑚𝑢𝑚]]{𝑎<sub>𝑘</sub> | 𝑘 ≥ 𝑛}

Limit inferior relates to infimum:
- 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub> = 𝑙𝑖𝑚<sub>𝑛→∞</sub>[[Supremum (Least Upper Bound) - Infimum (Greatest Lower Bound)|𝑖𝑛𝑓𝑖𝑚𝑢𝑚]]{𝑎<sub>𝑘</sub> | 𝑘 ≥ 𝑛}

Limit Superior/Inferior Algebra:
- 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>+𝑏<sub>𝑛</sub>) ≤ 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) + 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>)
- 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>·𝑏<sub>𝑛</sub>) ≤ 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) · 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>) <font style="color: rgb(122,134,154);">\# if 𝑎<sub>𝑛</sub>,𝑏<sub>𝑛</sub>≥ 0 </font>
- 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>+𝑏<sub>𝑛</sub>) ≥ 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) + 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>)
- 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>·𝑏<sub>𝑛</sub>) ≥ 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) · 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>) <font style="color: rgb(122,134,154);">\# if 𝑎<sub>𝑛</sub>,𝑏<sub>𝑛</sub>≥ 0 </font>

Limit Superior/Inferior Algebra Examples:

> [!expand]- Example #1
> Given the following sequences:
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> = (1, -1, 1, -1, 1, ...)
> - (𝑏<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> = (0, 2, 0, 2, 0, ...)
> - (𝑎<sub>𝑛</sub>+ 𝑏<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> = (1, 1, 1, 1, 1, ...)
> - (𝑎<sub>𝑛</sub>· 𝑏<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> = (0, -2, 0, -2, 0, ...)
>
> Then:
> - <font style="color: rgb(0,128,0);">1 = 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>+𝑏<sub>𝑛</sub>)</font> ≤ <font style="color: rgb(255,102,0);">𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) + 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>) = 1 + 2 = 3</font>
> - <font style="color: rgb(0,128,0);">1 = 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>+𝑏<sub>𝑛</sub>)</font> ≥ <font style="color: rgb(255,102,0);">𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) + 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>) = -1 + 0 = -1</font>

> [!expand]- Example #2
> Given the following sequences:
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> = (1, 0, 1, 0, 1, ...)
> - (𝑏<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> = (0, 2, 0, 2, 0, ...)
> - (𝑎<sub>𝑛</sub>· 𝑏<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> = (0, 0, 0, 0, 0, ...)
>
> Then:
> - <font style="color: rgb(0,128,0);">0 = 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>·𝑏<sub>𝑛</sub>)</font> ≤ <font style="color: rgb(255,102,0);">𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) · 𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>) = 1 · 2 = 2</font>
> - <font style="color: rgb(0,128,0);">0 = 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>·𝑏<sub>𝑛</sub>)</font> ≥ <font style="color: rgb(255,102,0);">𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑎<sub>𝑛</sub>) · 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>(𝑏<sub>𝑛</sub>) = 0 · 0 = 0</font>
# Convergent/Divergent vs Limit Superior/Inferior
- <font style="color: rgb(0,128,0);">(𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is convergent</font> ↔ <font style="color: rgb(255,102,0);">𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub>= 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub> ∉ {±∞}</font>
- <font style="color: rgb(0,128,0);">(𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is divergent to ∞</font> ↔ <font style="color: rgb(255,102,0);">𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub>= 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub> = ∞</font>
- <font style="color: rgb(0,128,0);">(𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is divergent to -∞</font> ↔ <font style="color: rgb(255,102,0);">𝑙𝑖𝑚𝑠𝑢𝑝<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub>= 𝑙𝑖𝑚𝑖𝑛𝑓<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub> = -∞</font>

# Bolzano-Weierstrass Theorem

Bolzano-Weierstrass Theorem:
- <font style="color: rgb(0,128,0);">sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is bounded</font> → <font style="color: rgb(255,102,0);">(𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> has at least 1 accumulation value</font>

Proof:

> [!expand]- Click here to expand...
> TODO
# Divergent to Infinity
- <font style="color: rgb(0,128,0);">divergent to infinity</font> ↔ <font style="color: rgb(51,204,204);">𝑙𝑖𝑚<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub> = ∞</font> ↔ <font style="color: rgb(255,102,0);">∀𝑐\>0 ∃𝑁∊ℕ ∀𝑛≥𝑁 : 𝑎<sub>𝑛</sub>\>𝑐</font>
- <font style="color: rgb(0,128,0);">divergent to -infinity</font> ↔ <font style="color: rgb(51,204,204);">𝑙𝑖𝑚<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub> = -∞</font> ↔ <font style="color: rgb(255,102,0);">∀𝑐\<0 ∃𝑁∊ℕ ∀𝑛≥𝑁 : 𝑎<sub>𝑛</sub>\<𝑐</font>

# Epsilon/𝜀-Neighborhoods

For 𝜀\>0, (𝑥-𝜀,𝑥+𝜀) = 𝐵<sub>𝜀</sub>(𝑥) is the <em>epsilon-neighborhood</em> of 𝑥

𝑆⊆ℝ is called a <em>neighborhood</em> of 𝑥 if:
- ∃𝜀\>0 : 𝐵<sub>𝜀</sub>(𝑥)⊆𝑆

# Open Sets - Closed Sets

𝑆⊆ℝ is called <em>open</em> (in ℝ) if:
- ∀𝑥∊𝑆 ∃𝜀\>0 : 𝐵<sub>𝜀</sub>(𝑥)⊆𝑆

𝑆⊆ℝ is called <em>closed</em> (in ℝ) if:
- 𝑆<sup>c</sup> = ℝ\\𝑆 is open

Open and Closed Sets Examples:
- ⦰, ℝ are both open and closed
- \[-2, 2\] is closed but not open
- (-2, 2) is open but not closed
- (-2,2\] is neither open nor closed

# Closed Sets vs Convergent Sequences

both statements are equivalent:
- <font style="color: rgb(0,128,0);">𝑆⊆ℝ is <em>closed</em></font> ↔ <font style="color: rgb(255,102,0);">for all <em>convergent sequences</em> (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> with 𝑎<sub>𝑛</sub>∊𝑆 for all 𝑛∊ℕ we have: 𝑙𝑖𝑚<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub> ∊ 𝑆</font>
- <font style="color: rgb(0,128,0);">𝑆⊆ℝ is <em>closed</em></font> ↔ <font style="color: rgb(255,102,0);">any <em>convergent sequences</em> (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆 has <em>limit point</em> 𝑎̃∊𝑆</font>

# Compact Sets vs Convergent Subsequences

both statements are equivalent:
- <font style="color: rgb(0,128,0);">𝑆⊆ℝ is <em>compact</em></font> ↔ <font style="color: rgb(255,102,0);">for all sequences (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> with 𝑎<sub>𝑛</sub>∊𝑆 for all 𝑛∊ℕ, there exists a convergent subsequence (𝑎<sub>𝑛𝑘</sub>)<sub>𝑘∊ℕ</sub> with 𝑙𝑖𝑚<sub>𝑘→∞</sub>𝑎<sub>𝑛𝑘</sub> ∊ 𝑆</font>
- <font style="color: rgb(0,128,0);">𝑆⊆ℝ is <em>compact</em></font> ↔ <font style="color: rgb(255,102,0);">any sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆 has an <em>accumulation value</em> 𝑎̃∊𝑆</font>

Compact Sets Examples:
- ⦰ is compact
- {5} is compact
- ℝ is not compact (is closed though) <font style="color: rgb(122,134,154);">\# for example (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> = (𝑛)<sub>𝑛∊ℕ</sub> has no accumulation value 𝑎̃∊𝑆</font>
- \[𝑐,𝑑\] is compact
> [!expand]- proof
> Let (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆\[𝑐,𝑑\] thus:
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆\[𝑐,𝑑\] → (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is a bounded sequence
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆\[𝑐,𝑑\] → (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is has an accumulation value 𝑎̃∊ℝ <font style="color: rgb(122,134,154);">\# via Bolzano-Weierstrass Theorem</font>
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆\[𝑐,𝑑\] → accumulation value actually satisfies 𝑎̃∊\[𝑐,𝑑\] <font style="color: rgb(122,134,154);">\# \[𝑐,𝑑\] is closed</font>

# Heine-Borel Theorem

For 𝑆⊆ℝ, we have:
- <font style="color: rgb(0,128,0);">𝑆 is compact</font> ↔ <font style="color: rgb(255,102,0);">𝑆 is bounded and closed</font>

Proof:

> [!expand]- 𝑆 is bounded and closed → 𝑆 is compact
> Assume 𝑆⊆ℝ is <em>bounded</em> and <em>closed</em>.
>
> Let (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> be a sequence in 𝑆 thus:
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆 → (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆 → (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is a <strong>bounded</strong> sequence
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆 → (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> has an <em>accumulation value</em> 𝑎̃∊ℝ <font style="color: rgb(122,134,154);">\# via Bolzano-Weierstrass Theorem</font>
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆 → accumulation value actually satisfies 𝑎̃∊𝑆 <font style="color: rgb(122,134,154);">\# because 𝑆 is <strong>closed</strong></font>

> [!expand]- 𝑆 is compact → 𝑆 is closed
> Assume 𝑆⊆ℝ is <em>compact</em>. Prove that for any convergent sequences (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> with 𝑎<sub>𝑛</sub>∊𝑆 for all 𝑛∊ℕ we have: 𝑙𝑖𝑚<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub>∊𝑆
>
> Let:
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> be a convergent sequence in 𝑆
> - (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> has an accumulation value 𝑎̃∊𝑆 <font style="color: rgb(122,134,154);">\# via 𝑆 is compact</font>
> - 𝑙𝑖𝑚<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub> = 𝑎̃ ∊ 𝑆 <font style="color: rgb(122,134,154);">\# Every convergent sequence has only 1 accumulation value</font>
> - 𝑙𝑖𝑚<sub>𝑛→∞</sub>𝑎<sub>𝑛</sub> ∊ 𝑆

> [!expand]- 𝑆 is compact → 𝑆 is bounded
> ###### [[Proof by Contradiction]]
>
> 𝑆 is not bounded → 𝑆 is not compact
>
> Bounded Definition
> - a set is bounded if it has an upper bound and lower bound
>
> Not Bounded Definition
> - a set is unbounded if (does not have an upper bound) or (does not have a lower bound)
>
> Compact Definition
> - <font style="color: rgb(255,102,0);">∀(𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆 ∃(𝑎<sub>𝑛𝑘</sub>)<sub>𝑘∊ℕ</sub> : (𝑎<sub>𝑛𝑘</sub>)<sub>𝑘∊ℕ</sub>is convergent AND 𝑙𝑖𝑚<sub>𝑘→∞</sub>𝑎<sub>𝑛𝑘</sub>∊𝑆</font>
>
> Not Compact Definition
> - <font style="color: rgb(255,102,0);">∃(𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆 ∀(𝑎<sub>𝑛𝑘</sub>)<sub>𝑘∊ℕ</sub> : (𝑎<sub>𝑛𝑘</sub>)<sub>𝑘∊ℕ</sub>is not convergent OR 𝑙𝑖𝑚<sub>𝑘→∞</sub>𝑎<sub>𝑛𝑘</sub>∉𝑆</font>
>
> Assume 𝑆⊆ℝ is unbounded. Prove that 𝑆 is not convergent (i.e. there exists a sequence in 𝑆 such that all subsequences are not convergent)
> - 𝑆⊆ℝ is unbounded → 𝑆⊆ℝ is unbounded
> - 𝑆⊆ℝ is unbounded → There is a sequence (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆 such that |𝑎<sub>𝑛</sub>|\>𝑛 for all 𝑛∊ℕ <font style="color: rgb(122,134,154);">\# 𝑆 does not have a lower bound or upper bound</font>
> - 𝑆⊆ℝ is unbounded → all subsequences of (𝑎<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑆 is not convergent
# Next Topics
- [[Series (mathematics)]]
- [[Cauchy Criterion For Convergence]]
- [[Leibniz's Criterion／Test／Rule - Alternating Series Test|Leibniz's Criterion/Test/Rule - Alternating Series Test]]

# Absolutely Convergent - Absolute Convergence

A series 𝛴<sub>1≤𝑖≤∞</sub>𝑎<sub>𝑖</sub> <em>absolutely convergent</em> if 𝛴<sub>1≤𝑖≤∞</sub>|𝑎<sub>𝑖</sub>| is convergent

Theorem:
- absolute convergence → convergence

Proof:

> [!expand]- Click here to expand...
> - <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤∞</sub>|𝑎<sub>𝑖</sub>| is convergent</font> → <font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁∊ℕ ∀𝑛≥𝑚≥𝑁 : |𝛴<sub>1≤𝑖≤∞</sub>|𝑎<sub>𝑖</sub>|| \< 𝜀</font> <font style="color: rgb(122,134,154);">\# via [[Cauchy Criterion For Convergence|Cauchy criterion]]</font>
> - <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤∞</sub>|𝑎<sub>𝑖</sub>| is convergent</font> → <font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁∊ℕ ∀𝑛≥𝑚≥𝑁 : 𝛴<sub>1≤𝑖≤∞</sub>|𝑎<sub>𝑖</sub>| \< 𝜀</font><font style="color: rgb(122,134,154);"> \# all summands are positive</font>
> - <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤∞</sub>|𝑎<sub>𝑖</sub>| is convergent</font> → <font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁∊ℕ ∀𝑛≥𝑚≥𝑁 : |𝛴<sub>1≤𝑖≤∞</sub>𝑎<sub>𝑖</sub>| \< 𝜀 </font><font style="color: rgb(122,134,154);">\# triangle inequality |𝛴<sub>1≤𝑖≤∞</sub>𝑎<sub>𝑖</sub>| ≤ 𝛴<sub>1≤𝑖≤∞</sub>|𝑎<sub>𝑖</sub>|</font>
> - <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤∞</sub>|𝑎<sub>𝑖</sub>| is convergent</font> → <font style="color: rgb(255,102,0);">𝛴<sub>1≤𝑖≤∞</sub>𝑎<sub>𝑖</sub> </font><font style="color: rgb(122,134,154);">\# via [[Cauchy Criterion For Convergence|Cauchy criterion]]</font>
# Majorant Criterion
###### Theorem

Let 𝛴<sub>1≤𝑖≤∞</sub>𝑎<sub>𝑖</sub>be a series. If there is 𝑛<sub>0</sub>∊ℕ and a convergent series 𝛴<sub>1≤𝑖≤∞</sub>𝑏<sub>𝑖</sub>satisfying the following for all 𝑖≥𝑛<sub>0</sub>:
- 𝑏<sub>𝑖</sub>≥0
- |𝑎<sub>𝑖</sub>| ≤ 𝑏<sub>𝑖</sub>

Then 𝛴<sub>1≤𝑖≤∞</sub>𝑎<sub>𝑖</sub> is an absolutely convergent series
###### Proof

> [!expand]- Click here to expand...
> Apply the Cauchy criterion to series 𝛴<sub>1≤𝑖≤∞</sub>𝑏<sub>𝑖</sub><font style="color: rgb(0,128,0);">:</font>
> - <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤∞</sub>𝑏<sub>𝑖</sub> is a convergent series</font> → <font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁≥ℕ ∀𝑛≥𝑚≥𝑁 : |𝛴<sub>𝑚≤𝑖≤𝑛</sub>𝑏<sub>𝑖</sub>| \< 𝜀</font> <font style="color: rgb(122,134,154);">\# via the [[Cauchy Criterion For Convergence|Cauchy criterion]]</font>
> - <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤∞</sub>𝑏<sub>𝑖</sub> is a convergent series</font> → <font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁≥𝑛<sub>0</sub> ∀𝑛≥𝑚≥𝑁 : |𝛴<sub>𝑚≤𝑖≤𝑛</sub>𝑏<sub>𝑖</sub>| \< 𝜀</font> <font style="color: rgb(122,134,154);">\# choose an 𝑁≥𝑛<sub>0</sub></font>
> - <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤∞</sub>𝑏<sub>𝑖</sub> is a convergent series</font> → <font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁≥𝑛<sub>0</sub> ∀𝑛≥𝑚≥𝑁 : 𝛴<sub>𝑚≤𝑖≤𝑛</sub>𝑏<sub>𝑖</sub> \< 𝜀 </font><font style="color: rgb(122,134,154);">\# because 𝑏<sub>𝑖</sub>≥0</font>
> - <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤∞</sub>𝑏<sub>𝑖</sub> is a convergent series</font> → <font style="color: rgb(255,102,0);">∀𝜀\>0 ∃𝑁≥𝑛<sub>0</sub> ∀𝑛≥𝑚≥𝑁 : 𝛴<sub>𝑚≤𝑖≤𝑛</sub>|𝑎<sub>𝑖</sub>| \< 𝜀 </font><font style="color: rgb(122,134,154);">\# because |𝑎<sub>𝑖</sub>| ≤ 𝑏<sub>𝑖</sub></font>
> - <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤∞</sub>𝑏<sub>𝑖</sub> is a convergent series</font> → <font style="color: rgb(255,102,0);">𝛴<sub>𝑚≤𝑖≤𝑛</sub>|𝑎<sub>𝑖</sub>| is a convergent series <font style="color: rgb(122,134,154);">\# via the [[Cauchy Criterion For Convergence|Cauchy criterion]]</font></font>
> - <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤∞</sub>𝑏<sub>𝑖</sub> is a convergent series</font> → <font style="color: rgb(255,102,0);">𝛴<sub>𝑚≤𝑖≤𝑛</sub>𝑎<sub>𝑖</sub> is an absolutely convergent series</font><font style="color: rgb(122,134,154);"> \# by definition of absolutely convergent series</font>
# Minorant Criterion
###### Theorem

Let 𝛴<sub>1≤𝑖≤∞</sub>𝑎<sub>𝑖</sub>be a series with 𝑎<sub>𝑖</sub>≥0. If there is 𝑛<sub>0</sub>∊ℕ and a divergent series 𝛴<sub>1≤𝑖≤∞</sub>𝑏<sub>𝑖</sub>satisfying the following for all 𝑖≥𝑛<sub>0</sub>:
- 𝑏<sub>𝑖</sub>≥ 0
- 𝑎<sub>𝑖</sub> ≥ 𝑏<sub>𝑖</sub>

Then 𝛴<sub>1≤𝑖≤∞</sub>𝑎<sub>𝑖</sub> is a divergent series
###### Proof

> [!expand]- Click here to expand...
> TODO
###### Example

> [!expand]- Click here to expand...
> 𝛴<sub>1≤𝑖≤∞</sub>(1/√𝑖) is divergent because:
> - √𝑖 ≤ 𝑖 ↔ (1/√𝑖) ≥ (1/𝑖) for all 𝑖
> - 𝛴<sub>1≤𝑖≤∞</sub>(1/𝑖) is the [[Harmonic Series|harmonic series]] which is known to be divergent
>
> Thus the minorant criterion is satisfied → 𝛴<sub>1≤𝑖≤∞</sub>(1/√𝑖) is divergent
# Ratio Test (TODO)

![](https://www.youtube.com/watch?v=yLbgdL9HAeg&list=PLBh2i93oe2quABbNq4I_-hyjhW8eOdgrO&index=20)
# Root Test
