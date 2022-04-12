# 우선순위 큐(Priority Queue)

# 우선순위 큐(Priority Queue)란?

### 우선순위가 가장 높은 데이터를 가장 먼저 삭제하는 자료구조.

⇒데이터를 우선순위에 따라 처리하고 싶을 때 사용.

![5.PNG](%E1%84%8B%E1%85%AE%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B1%20a0e8f/5.png)

## 구현방식

### 1. 리스트

const a = [1,2,3...]

### 2. heap

- **완전 이진트리**를 기본으로 한 자료 구조.
- 자료 구조 형태 중 하나로서 우선순위 큐를 위해 만들어진 구조.
- 코딩 테스트 문제 중 최소값,최대값을 계속해서 호출해야 하는 경우 heap 구조를 이용하여 구현하면 **시간 측면에서 효율적**이다.
- 힙 방식이 최악에 경우라도 **시간복잡도-O(logN**)-을 보장하기 때문에 일반적으로 힙을 가지고

       구현을 한다.

![1.PNG](%E1%84%8B%E1%85%AE%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B1%20a0e8f/1.png)

### 3. 완전 이진 트리

![2.PNG](%E1%84%8B%E1%85%AE%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B1%20a0e8f/2.png)

![3.PNG](%E1%84%8B%E1%85%AE%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B1%20a0e8f/3.png)

![4.PNG](%E1%84%8B%E1%85%AE%E1%84%89%E1%85%A5%E1%86%AB%E1%84%89%E1%85%AE%E1%86%AB%E1%84%8B%E1%85%B1%20a0e8f/4.png)

### heapify()

```python
import heapq # heapq : 파이썬의 리스트를 힙처럼 사용할 수 있게 해준다.

my_heap = [1,3,2,6,8,0,6]
heapq.heapify(my_heap)
print(my_heap) 
# [0,3,1,6,8,2,6]
#          1
#       3     2
#     6  8   0  6
```

### heappush(배열이름, 요소)

```python
my_heap = []
heapq.heappush(my_heap,3)
heapq.heappush(my_heap,5)
heapq.heappush(my_heap,1)
heapq.heappush(my_heap,-3)
print(my_heap)
# [-3,1,3,5]
```

### heappop(배열이름)

```python
# my_heap = [-3,1,3,5]

heapq.heappop(my_heap)
heapq.heappop(my_heap)
heapq.heappop(my_heap)
print(my_heap)
# [**3, 5]**
```

[자료구조: 우선순위 큐(Priority Queue)와 힙(Heap) 10분 핵심 요약](https://youtu.be/AjFlp951nz0)