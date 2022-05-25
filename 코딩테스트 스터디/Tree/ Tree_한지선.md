# 트리(Tree)

## 트리란?

* 트리는 값을 가진 노드(Node)와 이 노드들을 연결해주는 간선(Edge)으로 이루어져있다.
* 모든 노드들은 0개 이상의 자식(Child) 노드를 갖고 있으며 보통 부모-자식 관계로 부른다.
* 트리는 스택이나 큐와 같은 선형 구조가 아닌 비선형 자료구조이다.
* 트리는 계층적 관계(Hierarchical Relationship)를 표현한다.

<br>

## 트리 용어

* Node (노드) : 트리를 구성하고 있는 각각의 요소를 의미한다.
* Edge (간선) : 트리를 구성하기 위해 노드와 노드를 연결하는 선을 의미한다.
* Root Node (루트 노드) : 트리 구조에서 최상위에 있는 노드를 의미한다.
* Leaf Node (= Terminal Node, 단말 노드) : 하위에 다른 노드가 연결되어 있지 않은 노드를 의미한다.
* Internal Node (내부노드, 비단말 노드) : 단말 노드를 제외한 모든 노드로 루트 노드를 포함한다.

<br>

## 노드 간의 관계

* 루트 노드를 제외한 모든 노드는 단 하나의 부모 노드(parent node)만을 가진다.
* 모든 요소 노드는 자식 노드(child node)를 가질 수 있다.
* 형제 노드(sibling node)란 같은 부모 노드를 가지는 모든 노드를 가리킨다.
* 조상 노드(ancestor node)란 부모 노드를 포함해 계층적으로 현재 노드의 상위에 존재하는 모든 노드를 가리킨다.
* 자손 노드(descendant node)란 자식 노드를 포함해 계층적으로 현재 노드의 하위에 존재하는 모든 노드를 가리킨다.
  
<br>

## 트리의 특징

* 트리에는 사이클이 존재할 수 없다. (만약 사이클이 만들어진다면, 그것은 트리가 아니고 그래프다)
* 모든 노드는 자료형으로 표현이 가능하다.
* 루트에서 한 노드로 가는 경로는 유일한 경로 뿐이다.
* 노드의 개수가 N개면, 간선은 N-1개를 가진다.

<br>

## 트리 순회
<br>

**1.전위 순회(pre-order)**

각 루트(Root)를 순차적으로 먼저 방문하는 방식이다.  
(Root → 왼쪽 자식 → 오른쪽 자식)  
``` python
def recursivePreorder(node): 
  if node is None:
    return 
  print(node.val, end=' ')
  recursivePreorder(node.left) 
  recursivePreorder(node.right) 

recursivePreorder(node1)
```
<br>

**2.중위 순회(in-order)**

왼쪽 하위 트리를 방문 후 루트(Root)를 방문하는 방식이다.  
(왼쪽 자식 → Root → 오른쪽 자식)  
```python
def recursiveInorder(node): 
  if node is None:
    return 
  recursiveInorder(node.left) 
  print(node.val, end=' ')
  recursiveInorder(node.right) 

recursiveInorder(node1)
```
<br>

**3.후위 순회(post-order)**

왼쪽 하위 트리부터 하위를 모두 방문 후 루트(Root)를 방문하는 방식이다.  
(왼쪽 자식 → 오른쪽 자식 → Root)  
```python
def recursivePostorder(node): 
  if node is None:
    return 
  recursivePostorder(node.left) 
  recursivePostorder(node.right)
  print(node.val, end=' ')

recursivePostorder(node1)
```
