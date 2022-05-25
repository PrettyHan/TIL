# Greedy Algorithm (탐욕적 알고리즘)

- 탐욕적 알고리즘은 최적해를 구하는 데에 사용되는 근사적인 방법. 여러 경우 중 하나를 선택해야 할 때마다 그 순간 최적이라고 생각되는 것을 선택해 나가는 방식.
- 순간마다의 선택은 그 순간은 최적, 그러나 최종 답이 최적이라는 보장은 없음. 
⇒ 지역적 선택의 최적이 전역적 최적인 문제에 적용!
- 탐욕적 알고리즘을 적용하기 좋은 문제의 조건
    - 탐욕스런 선택 조건 (greedy choice property) : 앞의 선택이 이후의 선택에 영향X
    - 최적 부분 구조 조건 (optimal substructure) : 문제에 대한 최적해가 부분 문제에 대해 최적해 
                                                                            (매 순간의 최적해 = 문제의 최적해)
- 현재 단계에서 가장 좋다고 생각되는 해는 가능한 해(feasible solution)인지를 확인하고, 가능한 해가 아닌 경우에는 차선의 해를 선정.
- 전체 해는 단계 별로 얻어진 해를 모아서 구성. 
(한 단계에서 얻어진 해는 다시 고려하지 않음. 전체해에서 변경X)

## 매 선택에서 당장 최적인 답을 선택하여 결과를 도출하자!

탐욕적 알고리즘의 예) 

- “서울 → 대구 → 부산” 최단 경로 = “서울 → 대구” 최단 경로 + “대구 → 부산” 최단 경로
// 단 모든 최단 거리 문제의 최적 ≠ 탐욕적 알고리즘 (동적 계획법으로!!)
- 허프만 코드(Huffman code) : 주어진 데이터를 가장 짧게 해주는 전치(prefix)코드 만들기
인코딩 방법 중 하나로 문자를 0, 1만으로 구성된 코드에 매칭하여 인코딩함.
- 예 ) aaaavvddjjjhh ⇒ a: 00, j: 01, v: 000, d: 001, hh: 010

```python
class HuffNode:
def __init__ (self, symbol, freq):
        self.symbol = symbol
        self.freq = freq
        self.left = None
        self.right = None

def huffman (n, PQ):
for _in range(n - 1):
        p = PQ.get()[1]
        q = PQ.get()[1]
        r = HuffNode(' ', p.freq + q.freq)
        r.left = p
        r.right = q
        PQ.put((r.freq, r))
return PQ.get()[1]     
```

- 거스름돈 문제 / 최소 동전 개수 문제 : 동전의 개수가 최소가 되도록 거스름돈을 주는 문제
거스름돈은 500원 →  100원 → 50원 → 10원 순서로 동전 개수를 계산.
⇒ 전체 동전이 최소가 되도록 함(그러기 위해서는 큰 화폐 단위의 동전 수가 많아야 함)
- 최소 신장 트리(Minimum spanning tree)