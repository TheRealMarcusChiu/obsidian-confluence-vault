---
created: 2024-01-12T13:31:23.875-06:00
modified: 2024-01-12T16:59:59.265-06:00
parent: "[[Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)]]"
children: []
---
###### Composition of Morphisms
````excerpt
- denoted as: 𝑓;𝑔 = 𝑔◦𝑓 = 𝑔𝑓
````
^excerpt

# TODO
- for every three objects 𝑎, 𝑏, and 𝑐, a [binary operation](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1023131) ℎ𝑜𝑚(𝑎, 𝑏) × ℎ𝑜𝑚(𝑏, 𝑐) → ℎ𝑜𝑚(𝑎, 𝑐) called <strong>composition of morphisms</strong>
	- Here ℎ𝑜𝑚(𝑎, 𝑏) denotes the subclass of morphisms 𝑓 in 𝑚𝑜𝑟(𝐶) such that 𝑑𝑜𝑚(𝑓)=𝑎 and 𝑐𝑜𝑑(𝑓)=𝑏
	- Morphisms in this subclass are written 𝑓:𝑎→𝑏, and the composite of 𝑓:𝑎→𝑏 and 𝑔:𝑏→𝑐 is often written as 𝑔∘𝑓 or 𝑔𝑓

such that the following axioms hold:
- 
	- the <strong>[associative property](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=52396647)</strong>: if 𝑓:𝑎→𝑏, 𝑔:𝑏→𝑐 and ℎ:𝑐→𝑑 then ℎ∘(𝑔∘𝑓) = (ℎ∘𝑔)∘𝑓
	- the (<strong>[left and right unit laws](https://en.wikipedia.org/wiki/Identity_(mathematics))</strong>): for every object 𝑥, there exists a morphism 1<sub>𝑥</sub>: 𝑥 → 𝑥 (some authors write 𝑖𝑑<sub>𝑥</sub>) called the identity morphism for 𝑥, such that:
		- every morphism 𝑓 : 𝑎 → 𝑥 satisfies 1<sub>𝑥</sub> ∘ 𝑓 = 𝑓, and
		- every morphism 𝑔 : 𝑥 → 𝑏 satisfies 𝑔 ∘ 1<sub>𝑥</sub> = 𝑔

Morphisms are equipped with a [partial binary operation](https://en.wikipedia.org/wiki/Partial_operation), called composition. The composition of two morphisms 𝑓 and 𝑔 is defined precisely when the target of 𝑓 is the source of 𝑔, and is denoted 𝑔∘𝑓 (or sometimes simply 𝑔𝑓). The source of 𝑔∘𝑓 is the source of 𝑓, and the target of 𝑔∘𝑓 is the target of 𝑔. The composition satisfies two [axioms](https://en.wikipedia.org/wiki/Axiom):
- <strong>Identity</strong> - For every object X, there exists a morphism 𝑖𝑑<sub>𝑋</sub> : 𝑋 → 𝑋 called the identity morphism on 𝑋, such that for every morphism 𝑓 : 𝐴 → 𝐵 we have 𝑖𝑑<sub>𝐵</sub>∘𝑓 = 𝑓 = 𝑓∘𝑖𝑑<sub>𝐴</sub>
- <strong>Associativity</strong> - ℎ∘(𝑔∘𝑓) = (ℎ∘𝑔)∘𝑓 whenever all the compositions are defined, i.e. when the target of 𝑓 is the source of 𝑔, and the target of 𝑔 is the source of ℎ
